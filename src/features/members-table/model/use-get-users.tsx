import { gql, useQuery } from '@apollo/client'

const GET_MEMBERS = gql`
  query GetMembers {
    members {
      id
      username747
      firstName
      lastName
      status
    }
  }
`

export const useGetMembers = () => {
  const { loading, error, data, refetch } = useQuery(GET_MEMBERS)

  return {
    loading,
    error,
    data,
    refetch,
  }
}

// import { gql, useQuery } from '@apollo/client'

// const GET_MEMBERS = gql`
//   query GetMembers($searchTerm: String, $page: Int, $pageSize: Int) {
//     members(searchTerm: $searchTerm, page: $page, pageSize: $pageSize) {
//       id
//       username747
//       firstName
//       lastName
//       status
//     }
//   }
// `

// export const useGetMembers = (searchTerm = '', page = 1, pageSize = 10) => {
//   const { loading, error, data } = useQuery(GET_MEMBERS, {
//     variables: { searchTerm, page, pageSize },
//   })

//   return {
//     loading,
//     error,
//     data,
//   }
// }
