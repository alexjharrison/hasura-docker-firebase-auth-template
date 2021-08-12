import {} from '@urql/vue'
import { SubscriptionClient } from 'subscriptions-transport-ws'

export const subscriptionClient = new SubscriptionClient(
  'ws://api/v1/graphql',
  {
    reconnect: true,
    lazy: true,
    // connectionParams: {
    //   headers: {
    //     ...(auth.value.token && {
    //       Authorization: `Bearer ${auth.value.token}`,
    //     }),
    //   },
    // },
  }
)
