import { authControllerRefreshToken } from '@/shared/api/api'

export async function refreshToken() {
  try {
    const data = await authControllerRefreshToken({
      refreshToken: localStorage.getItem('refreshToken') || '',
    })
    localStorage.setItem('token', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
  } catch (error) {
    console.log('Error refreshing token', error)
  }
}
