import { useEffect } from 'react'

import { useGetMembers } from '../model/use-get-users'
import { IMember, columns } from './members-columns'
import { MembersDataTable } from './members-data-table'
import { MemberMobile } from './members-mobile'
import { FilterMembersForm } from '@/features/filter-members-form'
import { Spinner } from '@/shared/ui/spinner'

export function MembersTable() {
  const { data, error, loading, refetch, isRefetching, getMembers, handleNextPage, handlePrevPage, currentPage } =
    useGetMembers()

  console.log(currentPage)

  useEffect(() => {
    getMembers({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <p className="container text-red-500 max-lg:px-4">Error : {error.message}</p>

  return (
    <div>
      <FilterMembersForm refetch={getMembers} />
      {loading || isRefetching || !data ? (
        <div className="flex items-center justify-center h-24">
          <Spinner />
        </div>
      ) : (
        <>
          <MembersDataTable
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            isNextPage={data.members.pageInfo.hasNextPage}
            isPrevPage={data.members.pageInfo.hasPreviousPage}
            columns={columns}
            data={data.members.items.map((member: IMember) => ({
              refetch,
              ...member,
            }))}
          />
          <MemberMobile
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            isNextPage={data.members.pageInfo.hasNextPage}
            isPrevPage={data.members.pageInfo.hasPreviousPage}
            members={data.members.items.map((member: IMember) => ({ refetch, ...member }))}
          />
        </>
      )}
    </div>
  )
}
