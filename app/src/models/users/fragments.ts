import { gql } from '@urql/vue'

export const USER_FIELDS = gql`
  fragment USER_FIELDS on users {
    id
    email
    username
    created_at
    updated_at
  }
`
