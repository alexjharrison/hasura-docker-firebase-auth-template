<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Hasura Console: <a href="/api/console" target="_blank">Here</a></p>
    <p>
      Ngrok Console: <a href="http://localhost:4552" target="_blank">Here</a>
    </p>
    <p>Me: {{ user }}</p>
    <p-button v-if="user" label="logout" @click="signOut" />
    <p-button v-else label="Login" @click="signIn" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { user } from './hooks/user'
  import { useFirebase } from './plugins/firebase'

  export default defineComponent({
    name: 'App',
    setup() {
      const { signIn, signOut } = useFirebase()

      return { user, signIn, signOut }
    },
  })
</script>
