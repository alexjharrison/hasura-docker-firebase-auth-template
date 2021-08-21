<template>
  <div class="flex justify-content-end">
    <p-button
      label="Invite User"
      icon="pi pi-user"
      class="mt-5 text-right p-button-secondary"
      @click="display = true"
    />
    <Dialog header="Invite Users" v-model:visible="display">
      <div class="flex">
        <div class="mr-6">
          <h3>Users In Room</h3>
          <div class="flex flex-column">
            <chip
              v-for="user in usersInRoom?.users"
              :key="user.id"
              :label="user.display_name"
              :image="user.image_url || undefined"
              class="mb-2"
            />
          </div>
        </div>
        <div>
          <h3>Users To Invite</h3>
          <div class="flex cursor-pointer flex-column">
            <chip
              v-for="user in usersNotInRoom?.users"
              :key="user.id"
              :label="'+' + user.display_name"
              :image="user.image_url || undefined"
              class="mb-2"
              @click="
                addUser({
                  object: {
                    chat_room_id: $route.params.id,
                    user_id: user.id,
                  },
                })
              "
            />
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Chip from 'primevue/chip'
  import { useAddUserToChatRoomMutation, useUsersSubscription } from '@/api'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    components: { Dialog, Chip },
    setup() {
      const display = ref(false)
      const route = useRoute()

      const { data: usersInRoom } = useUsersSubscription({
        variables: computed(() => ({
          where: {
            chat_room_xref_users: {
              chat_room_id: { _eq: route.params.id },
            },
          },
        })),
      })
      const { data: usersNotInRoom } = useUsersSubscription({
        variables: computed(() => ({
          where: {
            _not: {
              chat_room_xref_users: {
                chat_room_id: { _eq: route.params.id },
              },
            },
          },
        })),
      })

      const { executeMutation: addUser } = useAddUserToChatRoomMutation()

      return { display, usersInRoom, usersNotInRoom, addUser }
    },
  })
</script>
