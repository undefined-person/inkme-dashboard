import { gql, NetworkStatus, useLazyQuery } from '@apollo/client'
import { useState, useCallback, useEffect } from 'react'

const GET_MEMBERS = gql`
  query getMembers($where: InkMeMemberFilterInput!, $order: [InkMeMemberSortInput!], $skip: Int, $take: Int) {
    members(where: $where, order: $order, skip: $skip, take: $take) {
      items {
        id
        username747
        firstName
        lastName
        status
        contractNumber
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

export const useGetMembers = () => {
  const [fetchMembers, { loading, error, data, refetch, networkStatus }] = useLazyQuery(GET_MEMBERS)
  const [currentPage, setCurrentPage] = useState(1)
  const take = 10

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  const getMembers = useCallback(
    (variables: {
      status?: string
      firstName?: string
      lastName?: string
      username747?: string
      contractNumber?: string
      bankDetails?: string
      createAt?: string
      orderBy?: string
      orderDirection?: 'ASC' | 'DESC'
    }) => {
      const {
        status,
        firstName,
        lastName,
        username747,
        contractNumber,
        bankDetails,
        createAt,
        orderBy,
        orderDirection,
      } = variables

      const skip = take * (currentPage - 1)

      fetchMembers({
        variables: {
          where: {
            and: [
              status ? { status: { eq: status } } : null,
              firstName ? { firstName: { startsWith: firstName } } : null,
              lastName ? { lastName: { startsWith: lastName } } : null,
              username747 ? { username747: { startsWith: username747 } } : null,
              contractNumber ? { contractNumber: { startsWith: contractNumber } } : null,
              bankDetails ? { bankDetails: { startsWith: bankDetails } } : null,
              createAt
                ? {
                    createAt: {
                      gte: new Date(createAt).toISOString(),
                      lte: new Date(new Date(createAt).setDate(new Date(createAt).getDate() + 1)).toISOString(),
                    },
                  }
                : null,
            ].filter(Boolean),
          },
          order: orderBy ? [{ field: orderBy, direction: orderDirection || 'ASC' }] : [],
          skip,
          take,
        },
      })
    },
    [fetchMembers, currentPage]
  )

  useEffect(() => {
    getMembers({})
  }, [currentPage, refetch, getMembers])

  return {
    loading,
    error,
    data,
    refetch,
    isRefetching: networkStatus === NetworkStatus.refetch,
    getMembers,
    handleNextPage,
    handlePrevPage,
    currentPage,
  }
}
