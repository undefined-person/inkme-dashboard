import { MemberStatus } from '../types/member.type'

export const formatMemberStatus = (status: MemberStatus) => {
  switch (status) {
    case 'REGISTRATION_REQUEST_APPROVED':
      return 'Waiting for user agreement upload'
    case 'APPROVED':
      return 'Approved'
    case 'WAITING_FOR_AGREEMENT_APPROVE':
      return 'Waiting for Agreement Approve'
    case 'WAITING_FOR_REGISTRATION_APPROVE':
      return 'Waiting for Registration Approve'
    case 'REJECTED':
      return 'Rejected'
    default:
      return status
  }
}

export const getBadgeColor = (status: MemberStatus) => {
  switch (status) {
    case 'REGISTRATION_REQUEST_APPROVED':
      return 'bg-yellow-400'
    case 'APPROVED':
      return 'bg-green-400'
    case 'WAITING_FOR_AGREEMENT_APPROVE':
      return 'bg-yellow-400'
    case 'WAITING_FOR_REGISTRATION_APPROVE':
      return 'bg-yellow-400'
    case 'REJECTED':
      return 'bg-red-400'
    default:
      return 'bg-gray-400'
  }
}
