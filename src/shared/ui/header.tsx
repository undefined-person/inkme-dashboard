import { Link } from 'react-router-dom'

import { UserMenu } from '@/features/user-menu'
import { getHomeRoute } from '../types/routes.types'

export function Header() {
  return (
    <header className="bg-white">
      <div className="container flex justify-between px-8 py-5 mx-auto max-md:px-4">
        <Link to={getHomeRoute()} className="text-3xl font-bold tracking-tight">
          InkMe
        </Link>
        <UserMenu />
      </div>
    </header>
  )
}
