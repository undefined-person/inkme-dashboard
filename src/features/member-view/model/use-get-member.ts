import { gql, useQuery } from '@apollo/client'

const GET_MEMBER_BY_ID = gql`
  query GetMemberById($id: Long!) {
    memberById(id: $id) {
      id
      username747
      firstName
      lastName
      contractNumber
      facebookUrl
      bankDetails
      idDocumentFronSidePhotoUrl
      idDocumentBackSidePhotoUrl
      signatureUrl
      agreementUrl
      status
      healthDeclaration {
        doesNotHaveBloodDisorders
        doesNotHaveSkinDisease
        isNotDiabetic
        isNotPregnant
        isNotUnderTreatmentOrMedications
      }
      attachments {
        createAt
        id
        url
      }
    }
  }
`

export const useGetMember = ({ id }: { id: number }) => {
  const { loading, error, data } = useQuery(GET_MEMBER_BY_ID, {
    variables: { id },
  })

  if (!data) return { loading, error, data: null }

  return {
    loading,
    error,
    data: data.memberById,
  }
}
