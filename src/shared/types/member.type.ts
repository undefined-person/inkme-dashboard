export type MemberStatus =
  | 'REGISTRATION_REQUEST_APPROVED'
  | 'APPROVED'
  | 'WAITING_FOR_AGREEMENT_APPROVE'
  | 'WAITING_FOR_REGISTRATION_APPROVE'
  | 'REJECTED'

export enum MemberStatusEnum {
  REGISTRATION_REQUEST_APPROVED = 'REGISTRATION_REQUEST_APPROVED',
  APPROVED = 'APPROVED',
  WAITING_FOR_AGREEMENT_APPROVE = 'WAITING_FOR_AGREEMENT_APPROVE',
  WAITING_FOR_REGISTRATION_APPROVE = 'WAITING_FOR_REGISTRATION_APPROVE',
  REJECTED = 'REJECTED',
}
