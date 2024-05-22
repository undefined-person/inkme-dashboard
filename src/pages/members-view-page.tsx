import { useParams } from 'react-router-dom'

import { MemberView } from '@/features/member-view'
import { Container } from '@/shared/ui/container'

export function MemberViewPage() {
  const { id } = useParams()

  return (
    <Container>
      <MemberView userId={Number(id)} />
    </Container>
  )
}
