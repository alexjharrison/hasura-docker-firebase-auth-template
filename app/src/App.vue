<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>Hasura Console: <a href="/api/console" target="_blank">Here</a></p>
  <p>Ngrok Console: <a href="http://localhost:4552" target="_blank">Here</a></p>
  <p>allusers: {{ allUsers }}</p>
  <Button v-if="auth.user" label="Sign Out" @click="signOut" />
  <Button v-else @click="signIn">Sign In</Button>
</template>

<script lang="ts">
  import { useQuery } from '@urql/vue'
  import { defineComponent, ref } from 'vue'
  import { useAuth, useUserUpsert } from './hooks/auth'
  import { GET_ALL_USERS } from './models/users/operations'

  export default defineComponent({
    name: 'App',
    setup() {
      const { signIn, signOut, auth } = useAuth()
      useUserUpsert()

      const trigger = ref(false)

      const {
        data: allUsers,
        error,
        fetching,
      } = useQuery({ query: GET_ALL_USERS })
      return { allUsers, error, fetching, signIn, signOut, auth, trigger }
    },
  })
</script>
