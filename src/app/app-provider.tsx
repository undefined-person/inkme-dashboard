import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { QueryClientProvider } from '@tanstack/react-query'
import { setContext } from '@apollo/client/link/context'

import { AppRouter } from './providers/router.provider'
import { Toaster } from '@/shared/ui/toaster'
import { queryClient } from '@/shared/api/query-client'
import { refreshToken } from '@/features/auth/'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions && err.extensions.code === 'UNAUTHENTICATED') {
        refreshToken()

        return forward(operation)
      }
    }
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, authLink, new HttpLink({ uri: `${import.meta.env.VITE_API_URL}/graphql` })]),
})

export const AppProvider = () => {
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
