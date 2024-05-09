import axios, { AxiosRequestConfig } from 'axios'

export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  return $api({
    ...config,
    ...options,
  }).then((res) => res.data)
}

type BodyType<Data> = Data

type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never

export interface SignInBodyDto {
  userName: string
  password: string
}

type AuthResponse = {
  token: string
  tokenExpiryTime: string
  refreshToken: string
  refreshTokenExpiryTime: string
}

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<AuthResponse>(
    {
      url: `/api/account/login`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signInBodyDto,
    },
    options
  )
}

type RefreshTokenBodyDto = {
  refreshToken: string
}

export const authControllerRefreshToken = (
  refreshTokenBodyDto: BodyType<RefreshTokenBodyDto>,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<AuthResponse>(
    {
      url: `/api/account/refresh-token`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: refreshTokenBodyDto,
    },
    options
  )
}

export const managementControllerApproveRegistration = (
  memberId: number,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>(
    {
      url: `/api/ink-me-members-management/${memberId}/approve-registration`,
      method: 'PUT',
    },
    options
  )
}

export const managementControllerReject = (memberId: number, options?: SecondParameter<typeof createInstance>) => {
  return createInstance<void>(
    {
      url: `/api/ink-me-members-management/${memberId}/reject`,
      method: 'PUT',
    },
    options
  )
}

export const managementControllerApproveAgreement = (
  memberId: number,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<void>(
    {
      url: `/api/ink-me-members-management/${memberId}/approve-agreement`,
      method: 'PUT',
    },
    options
  )
}
