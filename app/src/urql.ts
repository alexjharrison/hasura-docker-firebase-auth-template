import { ClientOptions, defaultExchanges } from "@urql/vue";

export const urqlConfig: ClientOptions = {
  url: "api/v1/graphql",
  exchanges: [...defaultExchanges],
  requestPolicy: "cache-and-network",
};
