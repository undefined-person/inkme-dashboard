import { PageLoader } from '@/shared/ui/page-loader'
import { useGetMembers } from '../model/use-get-users'
import { IMember, columns } from './members-columns'
import { MembersDataTable } from './members-data-table'
import { MemberMobile } from './members-mobile'

export function MembersTable() {
  const { data, error, loading, refetch } = useGetMembers()

  if (loading) return <PageLoader />
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <MembersDataTable
        columns={columns}
        data={data.members.map((member: IMember) => ({
          refetch,
          ...member,
        }))}
      />
      <MemberMobile members={data.members.map((member: IMember) => ({ refetch, ...member }))} />
    </>
  )
}
