import { useParams } from 'react-router-dom'

import { MemberView } from '@/features/member-view'

export function MemberViewPage() {
  const { id } = useParams()

  return (
    <>
      <MemberView userId={Number(id)} />
    </>
  )
}
