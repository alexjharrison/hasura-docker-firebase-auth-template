<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Hasura Console: <a href="/api/console" target="_blank">Here</a></p>
    <p>
      Ngrok Console: <a href="http://localhost:4552" target="_blank">Here</a>
    </p>
    <!-- <p>Me: {{ user }}</p>
    <Button v-if="auth.user" label="Sign Out" @click="signOut" />
    <Button v-else @click="signIn">Sign In</Button> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { user, useAuth, useUserUpsert } from './hooks/auth'

  export default defineComponent({
    name: 'App',
    setup() {},
  })
</script>
