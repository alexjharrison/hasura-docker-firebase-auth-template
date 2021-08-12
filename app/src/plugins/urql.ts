import { authExchange } from '@urql/exchange-auth'
import { devtoolsExchange } from '@urql/devtools'
import { subscriptionClient } from './exchanges/subscription'
import { authExchangeOptions } from './exchanges/auth'
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

export const urqlConfig: ClientOptions = {
  url: 'api/v1/graphql',
  requestPolicy: 'cache-and-network',
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
    authExchange(authExchangeOptions),
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: op => subscriptionClient.request(op),
    }),
  ],
}

export const client = createClient(urqlConfig)
