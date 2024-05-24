import { Link } from 'react-router-dom'

import { MembersList } from './members-columns'
import { Button, buttonVariants } from '@/shared/ui/button'
import { cn } from '@/shared/lib/cn'
import { ToggleMemberStatus } from '@/features/toggle-member-status'
import { getBadgeColor, formatMemberStatus } from '@/shared/lib/format-member-status'
import { Badge } from '@/shared/ui/badge'

export function MemberMobile({
  members,
  handleNextPage,
  handlePrevPage,
  isNextPage,
  isPrevPage,
}: {
  members: MembersList[]
  handleNextPage: () => void
  handlePrevPage: () => void
  isNextPage: boolean
  isPrevPage: boolean
}) {
  return (
    <div className="container px-4 mx-auto mt-4 lg:hidden">
      {members.map((member) => {
        return (
          <div key={member.id} className="py-4 border-b border-gray-200 first:border-t">
            <div className="flex items-start">
              <div>
                <span className="text-lg font-bold">{member.username747}</span>
                <h3 className="text-sm">
                  {member.firstName} {member.lastName}
                </h3>
                <span className="text-sm text-gray-600">{member.contractNumber}</span>
              </div>
              <Badge className={cn(getBadgeColor(member.status), 'ml-auto')}>{formatMemberStatus(member.status)}</Badge>
            </div>
            <div className="mt-2 space-y-3">
              <Link
                to={`/members/${member.id}`}
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                  }),
                  'w-full'
                )}>
                View
              </Link>
            </div>
            <div className="flex flex-col items-start gap-2 mt-2">
              <ToggleMemberStatus refetch={member.refetch} status={member.status} memberId={member.id} />
            </div>
          </div>
        )
      })}
      <div className="flex items-center justify-center py-4 space-x-2">
        <Button variant="outline" size="sm" onClick={handlePrevPage} disabled={!isPrevPage}>
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={handleNextPage} disabled={!isNextPage}>
          Next
        </Button>
      </div>
    </div>
  )
}
