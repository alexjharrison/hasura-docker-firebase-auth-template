<template>
  <router-link :to="{ name: 'Home' }" class="text-white">
    <h1 class="text-center text-7xl">Chattr</h1>
  </router-link>
  <div class="m-auto text-center" v-if="isLoggingIn">
    <i class="pi pi-spin pi-spinner" style="font-size: 5rem"></i>
  </div>
  <div v-else-if="!user?.id">
    <p-button label="Log In" @click="signIn" />
  </div>
  <div v-else>
    <div class="grid">
      <sidebar class="px-4 col-3" />
      <router-view class="col-9" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { user, isLoggingIn } from './hooks/user'
  import { useFirebase } from './plugins/firebase'
  import Sidebar from '@/components/Sidebar.vue'

  export default defineComponent({
    components: { Sidebar },
    setup() {
      const { signIn } = useFirebase()

      return { user, isLoggingIn, signIn }
    },
  })
</script>
