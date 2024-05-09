import { RouteProps } from 'react-router-dom'

export enum Routes {
  HOME = '/',
  MEMBER_VIEW = '/members/:id',
  ADD_ADMIN = '/add-admin',
  LOGIN = '/login',
}

export const getHomeRoute = () => Routes.HOME
export const getMemberViewRoute = (id: string) => Routes.MEMBER_VIEW.replace(':id', id)
export const getAddAdminRoute = () => Routes.ADD_ADMIN
export const getLoginRoute = () => Routes.LOGIN

export type AppRoutesProps = RouteProps & {
  withLayout?: boolean
}
