<template>
  <div>
    <div class="px-2 pt-1 pb-3 p-card">
      <p class="mb-2 text-xl">Hello {{ user?.display_name }}</p>
      <div class="flex align-items-center">
        <avatar
          v-if="user?.image_url"
          :image="user?.image_url"
          size="large"
          shape="circle"
          class="mr-4"
        />
        <p-button label="Log Out" @click="signOut" class="p-button-sm" />
      </div>
    </div>
    <router-link :to="{ name: 'AddRoom' }">
      <p-button
        label="Create New Room"
        class="mt-3 p-button-sm p-button-help p-button-rounded"
      />
    </router-link>
    <hr />
    <section>
      <h2>My Rooms</h2>
      <sidebar-rooms
        v-for="room in rooms?.chat_room"
        :key="room.id"
        :room="room"
      />
    </section>
  </div>
</template>

<script lang="ts">
  import { user } from '@/hooks/user'
  import { useFirebase } from '@/plugins/firebase'
  import { defineComponent } from 'vue'
  import Card from 'primevue/card'
  import { useChatRoomsWithUsersSubscription } from '@/api'
  import Chip from 'primevue/chip'
  import Avatar from 'primevue/avatar'
  import SidebarRooms from '@/components/SidebarRooms.vue'

  export default defineComponent({
    components: { Card, Chip, SidebarRooms, Avatar },
    setup() {
      const { signOut } = useFirebase()

      const { data: rooms } = useChatRoomsWithUsersSubscription()

      return { signOut, user, rooms }
    },
  })
</script>

<style lang="scss" scoped>
  .p-card {
    background-color: var(--surface-c);
  }
</style>
