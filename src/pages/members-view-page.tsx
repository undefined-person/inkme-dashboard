import { MemberView } from '@/features/member-view'
import { useParams } from 'react-router-dom'

export function MemberViewPage() {
  const { id } = useParams()

  // if (!id) return null

  return (
    <>
      {/* <h1 className="text-4xl font-bold">Member View</h1> */}
      <MemberView userId={Number(id)} />
    </>
  )
}
