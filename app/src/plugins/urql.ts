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
import { devtoolsExchange } from '@urql/devtools'
import { authExchange } from '@urql/exchange-auth'
import { useFirebase } from './firebase'
import { isLoggingIn } from '@/hooks/user'

const { firebaseAuth, signIn } = useFirebase()

const subscriptionClient = new SubscriptionClient('ws://api/v1/graphql', {
  reconnect: true,
  lazy: true,
})

export const urqlConfig: ClientOptions = {
  url: 'api/v1/graphql',
  requestPolicy: 'cache-and-network',
  fetchOptions: { headers: { 'content-type': 'application/json' } },
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
    authExchange<string>({
      addAuthToOperation({ authState, operation }) {
        // the token isn't in the auth state, return the operation without changes
        if (!authState) {
          return operation
        }

        // fetchOptions can be a function (See Client API) but you can simplify this based on usage
        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {}

        return {
          ...operation,
          context: {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                ...fetchOptions.headers,
                Authorization: `Bearer ${authState}`,
              },
            },
          },
        }
      },
      async getAuth({ authState, mutate }) {
        if (authState) return authState

        const user = firebaseAuth.currentUser

        if (user) return user.getIdToken()
        else return ''
      },
      didAuthError() {
        // retry if firebase has not finished logging in
        return !isLoggingIn.value
      },
    }),
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
}

export const client = createClient(urqlConfig)
