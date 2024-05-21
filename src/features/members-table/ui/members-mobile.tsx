import { Link } from 'react-router-dom'

import { Input } from '@/shared/ui/input'
import { MembersList } from './members-columns'
import { buttonVariants } from '@/shared/ui/button'
import { cn } from '@/shared/lib/cn'
import { ToggleMemberStatus } from '@/features/toggle-member-status'
import { getBadgeColor, formatMemberStatus } from '@/shared/lib/format-member-status'
import { Badge } from '@/shared/ui/badge'

export function MemberMobile({ members }: { members: MembersList[] }) {
  return (
    <div className="mt-4 lg:hidden">
      <Input placeholder="Filter users..." value="" onChange={() => {}} className="max-w-sm" />
      {members.map((member) => {
        return (
          <div key={member.id} className="py-4 border-b border-gray-200">
            <div className="flex items-center">
              <div>
                <span className="text-lg font-bold">{member.username747}</span>
                <h3 className="text-sm">
                  {member.firstName} {member.lastName}
                </h3>
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
            <div className="flex flex-col items-start gap-2 mt-4">
              <ToggleMemberStatus refetch={member.refetch} status={member.status} memberId={member.id} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
