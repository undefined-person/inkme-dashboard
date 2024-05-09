import { PageLoader } from '@/shared/ui/page-loader'
import { useGetMembers } from '../model/use-get-users'
import { columns } from './members-columns'
import { MembersDataTable } from './members-data-table'
import { MemberMobile } from './members-mobile'

export function MembersTable() {
  const { data, error, loading } = useGetMembers()

  if (loading) return <PageLoader />
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <MembersDataTable columns={columns} data={data.members} />
      <MemberMobile members={data.members} />
    </>
  )
}
