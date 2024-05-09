import { Link } from 'react-router-dom'
import { ColumnDef } from '@tanstack/react-table'

import { Button, buttonVariants } from '@/shared/ui/button'
import { cn } from '@/shared/utils'

export type Members = {
  id: number
  firstName: string
  lastName: string
  username747: string
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
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="space-x-4">
          <Link
            to={`/members/${row.original.id}`}
            className={cn(
              buttonVariants({
                variant: 'outline',
              })
            )}>
            View
          </Link>
          <Button>Approve</Button>
          <Button variant="destructive">Reject</Button>
        </div>
      )
    },
  },
]
