import { Link } from 'react-router-dom'
import { ColumnDef } from '@tanstack/react-table'

import { buttonVariants } from '@/shared/ui/button'
import { cn } from '@/shared/lib/cn'
import { MemberStatus } from '@/shared/types/member.type'
import { formatMemberStatus } from '@/shared/lib/format-member-status'
import { Badge } from '@/shared/ui/badge'
import { ToggleMemberStatus } from '@/features/toggle-member-status'

export type Members = {
  id: number
  firstName: string
  lastName: string
  username747: string
  status: MemberStatus
}

export const columns: ColumnDef<Members>[] = [
  {
    accessorKey: 'username747',
    header: 'Username747',
  },
  {
    accessorKey: 'firstName',
    header: 'FirstName',
  },
  {
    accessorKey: 'lastName',
    header: 'LastName',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return <Badge>{formatMemberStatus(row.original.status)}</Badge>
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Link
            to={`/members/${row.original.id}`}
            className={cn(
              buttonVariants({
                variant: 'outline',
              })
            )}>
            View
          </Link>
          <ToggleMemberStatus status={row.original.status} memberId={row.original.id} />
        </div>
      )
    },
  },
]
