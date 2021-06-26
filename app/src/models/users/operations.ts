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

// TODO FIX UPSERT

// export const USER_UPSERT = gql`
//   ${USER_FIELDS}
//   mutation USER_UPSERT() {
//     insert_users_one(
//       object: { display_name: "", email: "", id: "", username: "" }
//       on_conflict: { constraint: users_pkey }
//     ) {
//       ...USER_FIELDS
//     }
//   }
// `
