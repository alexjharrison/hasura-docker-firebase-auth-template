import {
  Users,
  UserUpsertDocument,
  UserUpsertMutation,
  UserUpsertMutationVariables,
} from '@/api'
import { client } from '@/plugins/urql'
import { User } from 'firebase/auth'
import { readonly, ref } from 'vue'

const appUser = ref<Users | null>(null)
export const user = readonly(appUser)
export const isLoggingIn = ref(true)

export function setUser(newUser: User | null) {
  isLoggingIn.value = false
  appUser.value = null
  console.log({ newUser })

  if (newUser)
    client
      .mutation<UserUpsertMutation, UserUpsertMutationVariables>(
        UserUpsertDocument,
        {
          object: {
            display_name: newUser?.displayName,
            email: newUser?.email,
            id: newUser?.uid,
            image_url: newUser?.photoURL,
          },
        }
      )
      .toPromise()
      .then(({ data }) => {
        appUser.value = data?.insert_users_one || {
          created_at: Date.now(),
          email: newUser.email,
          id: newUser.uid,
          display_name: newUser.displayName,
          updated_at: Date.now(),
          image_url: newUser.photoURL,
          __typename: 'users',
        }
      })
}
