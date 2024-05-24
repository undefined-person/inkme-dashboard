import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { setContext } from '@apollo/client/link/context'

import { AppRouter } from './providers/router.provider'
import { Toaster } from '@/shared/ui/toaster'
import { queryClient } from '@/shared/api/query-client'
import { isTokenCloseToExpiring } from '@/shared/lib/is-token-close-to-expiring'
import { refreshToken } from '@/features/auth'
import { useEffect } from 'react'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, new HttpLink({ uri: `${import.meta.env.VITE_API_URL}/graphql` })]),
})

export const AppProvider = () => {
  useEffect(() => {
    const checkToken = () => {
      if (isTokenCloseToExpiring()) {
        refreshToken()
      }
    }

    checkToken()

    const intervalId = setInterval(checkToken, 5 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <AppRouter />
        </ApolloProvider>
        <Toaster />
      </QueryClientProvider>
    </BrowserRouter>
  )
}
