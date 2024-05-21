import { authControllerRefreshToken } from '@/shared/api/api'

export async function refreshToken() {
  try {
    const data = await authControllerRefreshToken({
      refreshToken: localStorage.getItem('refreshToken') || '',
    })
    localStorage.setItem('token', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
    localStorage.setItem('tokenExpiryTime', data.tokenExpiryTime)
    localStorage.setItem('refreshTokenExpiryTime', data.refreshTokenExpiryTime)
  } catch (error) {
    window.location.href = '/login'
    localStorage.clear()
  }
}
