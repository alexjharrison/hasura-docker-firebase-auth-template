<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Hasura Console: <a href="/api/console" target="_blank">Here</a></p>
    <p>
      Ngrok Console: <a href="http://localhost:4552" target="_blank">Here</a>
    </p>
    <p>Me: {{ user }}</p>
    <p-button label="Login" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { user } from './hooks/user'

  export default defineComponent({
    name: 'App',
    setup() {
      return { user }
    },
  })
</script>
