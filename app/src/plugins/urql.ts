import { SubscriptionClient } from 'subscriptions-transport-ws'
import {
  cacheExchange,
  ClientOptions,
  debugExchange,
  dedupExchange,
  errorExchange,
  fetchExchange,
  subscriptionExchange,
} from '@urql/vue'
import { useAuth } from '../hooks/auth'

const { auth } = useAuth()

const subscriptionClient = new SubscriptionClient('ws://api/v1/graphql', {
  reconnect: true,
  lazy: true,
  connectionParams: {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  },
})

export const urqlConfig: ClientOptions = {
  url: 'api/v1/graphql',
  requestPolicy: 'cache-and-network',
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      'content-type': 'application/json',
    },
  },
  exchanges: [
    errorExchange({
      onError: (error, operation) => {
        console.error('Error Logged', error, operation)
      },
    }),
    debugExchange,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
}
