import { MemberStatus } from '@/shared/types/member.type'
import { Button } from '@/shared/ui/button'
import { useApproveRegistration } from '../model/use-approve-registration'
import { useApproveAgreement } from '../model/use-approve-agreement'
import { useRejectMember } from '../model/use-reject-member'

export function ToggleMemberStatus({ status, memberId }: { status: MemberStatus; memberId: number }) {
  const { approveRegistration, isPending: isPendingRegistration } = useApproveRegistration(memberId)
  const { approveAgreement, isPending: isPendingApprove } = useApproveAgreement(memberId)
  const { rejectMember, isPending: isPendingReject } = useRejectMember(memberId)

  switch (status) {
    case 'WAITING_FOR_REGISTRATION_APPROVE': {
      return (
        <>
          <Button className="w-full" onClick={approveRegistration} disabled={isPendingRegistration}>
            Approve
          </Button>
          <Button variant="destructive" className="w-full" onClick={rejectMember} disabled={isPendingReject}>
            Reject
          </Button>
        </>
      )
    }
    case 'WAITING_FOR_AGREEMENT_APPROVE': {
      return (
        <>
          <Button className="w-full" onClick={approveAgreement} disabled={isPendingApprove}>
            Approve
          </Button>
          <Button variant="destructive" className="w-full" onClick={rejectMember} disabled={isPendingReject}>
            Reject
          </Button>
        </>
      )
    }
    default: {
      return null
    }
  }
}
