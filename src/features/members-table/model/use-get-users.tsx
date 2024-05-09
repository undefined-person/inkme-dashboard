import { gql, useQuery } from '@apollo/client'

const GET_MEMBERS = gql`
  query GetMembers {
    members {
      id
      username747
      firstName
      lastName
    }
  }
`

export const useGetMembers = () => {
  const { loading, error, data } = useQuery(GET_MEMBERS)

  return {
    loading,
    error,
    data,
  }
}
