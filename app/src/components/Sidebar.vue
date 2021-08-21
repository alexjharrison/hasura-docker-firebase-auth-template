<template>
  <div>
    <Card class="px-3 pt-3 bg-blue-500 border-blue-400 border-3">
      <template #header> Hello {{ user?.display_name }} </template>
      <template #content>
        <p-button label="Log Out" @click="signOut" />
      </template>
    </Card>
    <section>
      <h2>My Rooms</h2>
      <router-link :to="{ name: 'AddRoom' }">
        <p-button label="Create New Room" class="p-button-sm p-button-help" />
      </router-link>
      <hr />
      <div v-for="room in rooms?.chat_room" :key="room.id">
        <div class="my-4">
          <router-link :to="{ name: 'Room', params: { id: room.id } }">
            <p-button class="p-button-sm p-button-info">
              <span class="font-semibold">Room: {{ room.name }}</span>
            </p-button>
          </router-link>
        </div>
        <chip
          v-for="member in room.chat_room_xref_users"
          :key="member.id"
          :label="member.user.id === user?.id ? 'Me' : member.user.display_name"
          :image="member.user.image_url || undefined"
          class="mb-2"
        />
        <hr />
      </div>
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

  export default defineComponent({
    components: { Card, Chip },
    setup() {
      const { signOut } = useFirebase()

      const { data: rooms } = useChatRoomsWithUsersSubscription()

      return { signOut, user, rooms }
    },
  })
</script>
