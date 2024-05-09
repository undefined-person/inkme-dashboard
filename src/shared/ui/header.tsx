import { UserMenu } from '@/features/user-menu'

export function Header() {
  return (
    <header className="bg-white">
      <div className="container flex justify-between px-8 py-5 mx-auto">
        <span className="text-3xl font-bold tracking-tight">InkMe</span>
        <UserMenu />
      </div>
    </header>
  )
}
