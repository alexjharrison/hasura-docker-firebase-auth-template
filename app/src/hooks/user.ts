import {
  Users,
  UserUpsertDocument,
  UserUpsertMutation,
  UserUpsertMutationVariables,
} from '@/api'
import { client } from '@/plugins/urql'
import { User } from 'firebase/auth'
import { readonly, ref } from 'vue'

const appUser = ref<Users | null>()
export const user = readonly(appUser)

export function setUser(newUser: User | null) {
  if (!newUser) appUser.value = null

  client
    .mutation<UserUpsertMutation, UserUpsertMutationVariables>(
      UserUpsertDocument,
      {
        object: {
          display_name: newUser?.displayName,
          email: newUser?.email,
          id: newUser?.uid,
        },
      }
    )
    .toPromise()
    .then(({ data }) => {
      appUser.value = data?.insert_users_one || null
    })
}
