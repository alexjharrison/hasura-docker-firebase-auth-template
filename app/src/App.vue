<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>Hasura Console: <a href="/api/console" target="_blank">Here</a></p>
  <p>Ngrok Console: <a href="http://localhost:4552" target="_blank">Here</a></p>
  <p>allusers: {{ allUsers }}</p>
  <button v-if="auth.user" @click="signOut">Sign Out</button>
  <button v-else @click="signIn">Sign In</button>
</template>

<script lang="ts">
  import { useQuery } from '@urql/vue'
  import { defineComponent, ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import { useAuth } from './hooks/auth'
  import { GET_ALL_USERS } from './models/users/operations'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
    },
    setup() {
      const { signIn, signOut, auth } = useAuth()

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

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
