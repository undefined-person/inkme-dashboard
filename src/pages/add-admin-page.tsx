import { AddAdminForm } from '@/features/add-admin'
import { Container } from '@/shared/ui/container'

export function AddAdminPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold">Add Admin</h1>
      <AddAdminForm />
    </Container>
  )
}
