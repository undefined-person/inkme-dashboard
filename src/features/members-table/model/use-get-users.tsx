import { gql, NetworkStatus, useLazyQuery } from '@apollo/client'

const GET_MEMBERS = gql`
  query getMembers($where: InkMeMemberFilterInput!, $order: [InkMeMemberSortInput!]) {
    members(where: $where, order: $order) {
      id
      username747
      firstName
      lastName
      status
      contractNumber
    }
  }
`

export const useGetMembers = () => {
  const [fetchMembers, { loading, error, data, refetch, networkStatus }] = useLazyQuery(GET_MEMBERS)

  const getMembers = (variables: {
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
    const { status, firstName, lastName, username747, contractNumber, bankDetails, createAt, orderBy, orderDirection } =
      variables
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
      },
    })
  }

  return {
    loading,
    error,
    data,
    refetch,
    isRefetching: networkStatus === NetworkStatus.refetch,
    getMembers,
  }
}
