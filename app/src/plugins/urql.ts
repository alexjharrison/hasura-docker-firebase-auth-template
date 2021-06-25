import { ClientOptions, defaultExchanges } from '@urql/vue'
import { auth } from './firebase'

auth

export const urqlConfig: ClientOptions = {
  url: 'api/v1/graphql',
  exchanges: [...defaultExchanges],
  requestPolicy: 'cache-and-network',
}
