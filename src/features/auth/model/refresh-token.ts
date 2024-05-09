// import { AxiosError } from 'axios'
// import { ErrorResponse } from 'react-router-dom'
import { authControllerRefreshToken } from '@/shared/api/api'

export async function refreshToken() {
  try {
    const data = await authControllerRefreshToken({
      refreshToken: localStorage.getItem('refreshToken') || '',
    })
    localStorage.setItem('token', data.token)
    localStorage.setItem('refreshToken', data.refreshToken)
  } catch (error) {
    // const axiosError = error as AxiosError
    // toast({
    //   title: 'Error',
    //   description: (axiosError.response as ErrorResponse)?.data?.message || 'Something went wrong',
    // })
  }
}
