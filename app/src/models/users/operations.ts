import { gql } from '@urql/vue'
import { USER_FIELDS } from './fragments'

export const GET_ALL_USERS = gql`
  ${USER_FIELDS}
  query GET_ALL_USERS {
    users {
      ...USER_FIELDS
    }
  }
`

export const USER_UPSERT = gql`
  ${USER_FIELDS}
  mutation MyMutation($object: users_insert_input!) {
    insert_users_one(
      object: $object
      on_conflict: { constraint: users_pkey, update_columns: email }
    ) {
      ...USER_FIELDS
    }
  }
`
