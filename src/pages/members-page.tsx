import { MembersTable } from '@/features/members-table'

export function MembersPage() {
  return (
    <div className="pb-8 mt-4">
      <h1 className="container text-4xl font-bold max-lg:px-4">Members</h1>
      <MembersTable />
    </div>
  )
}
