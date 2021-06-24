import { gql } from "@urql/vue";

export const GET_ALL_USERS = gql`
  query GET_ALL_USERS {
    users {
      created_at
      display_name
      email
      id
      updated_at
      user_role_id
      username
    }
  }
`;
