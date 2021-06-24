<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>allusers: {{ allUsers }}</p>
  <p>error: {{ error }}</p>
  <p>fetching: {{ fetching }}</p>
</template>

<script lang="ts">
import { useQuery } from "@urql/vue";
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { GET_ALL_USERS } from "./models/users/operations";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const {
      data: allUsers,
      error,
      fetching,
    } = useQuery({ query: GET_ALL_USERS });
    return { allUsers, error, fetching };
  },
});
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
