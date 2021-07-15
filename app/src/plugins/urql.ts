import { SubscriptionClient } from 'subscriptions-transport-ws'
import {
  ClientOptions,
  createClient,
  debugExchange,
  dedupExchange,
  errorExchange,
  fetchExchange,
  subscriptionExchange,
  cacheExchange,
} from '@urql/vue'
import { useAuth } from '../hooks/auth'
import { devtoolsExchange } from '@urql/devtools'

const { auth } = useAuth()

const subscriptionClient = new SubscriptionClient('ws://api/v1/graphql', {
  reconnect: true,
  lazy: true,
  connectionParams: {
    headers: {
      ...(auth.value.token && {
        Authorization: `Bearer ${auth.value.token}`,
      }),
    },
  },
})

export const urqlConfig: ClientOptions = {
  url: 'api/v1/graphql',
  requestPolicy: 'cache-and-network',
  fetchOptions: () => {
    return {
      headers: {
        ...(auth.value.token && {
          Authorization: `Bearer ${auth.value.token}`,
        }),
        'content-type': 'application/json',
      },
    }
  },
  exchanges: [
    devtoolsExchange,
    errorExchange({
      onError: (error, operation) => {
        console.log('[GQL ERROR]', error, operation)
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

export const client = createClient(urqlConfig)
