import { AppRoutesProps, Routes, getHomeRoute } from '@/shared/types/routes.types'
import { MembersPage } from '@/pages/members-page'
import { SignIn } from '@/features/auth'
import { MemberViewPage } from '@/pages/members-view-page'
import { AddAdminPage } from '@/pages/add-admin-page'

export const routeConfig: Record<Routes, AppRoutesProps> = {
  [Routes.HOME]: {
    path: getHomeRoute(),
    element: <MembersPage />,
    withLayout: true,
  },
  [Routes.MEMBER_VIEW]: {
    path: '/members/:id',
    element: <MemberViewPage />,
    withLayout: true,
  },
  [Routes.ADD_ADMIN]: {
    path: '/add-admin',
    element: <AddAdminPage />,
    withLayout: true,
  },
  [Routes.LOGIN]: {
    path: '/login',
    element: <SignIn />,
  },
}
