import { Link } from 'react-router-dom'

import { Input } from '@/shared/ui/input'
import { Members } from './members-columns'
import { Button, buttonVariants } from '@/shared/ui/button'
import { cn } from '@/shared/utils'

export function MemberMobile({ members }: { members: Members[] }) {
  return (
    <div className="mt-4 lg:hidden">
      <Input placeholder="Filter users..." value="" onChange={() => {}} className="max-w-sm" />
      {members.map((member) => {
        return (
          <div key={member.id} className="py-4 border-t border-gray-200">
            <div className="text-lg font-bold">{member.username747}</div>
            <div className="text-sm">
              {member.firstName} {member.lastName}
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
              <Button className="w-full">Approve</Button>
              <Button className="w-full" variant="destructive">
                Reject
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
