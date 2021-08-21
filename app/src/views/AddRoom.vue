<template>
  <div>
    <form @submit.prevent="createRoom" class="text-center">
      <h1>Create a Room</h1>
      <span class="mx-8 p-fluid p-float-label">
        <InputText id="new_room_name" type="text" v-model="newName" />
        <label for="new_room_name">New Room Name</label>
      </span>
      <p-button type="submit" label="Create" class="mt-2" />
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import InputText from 'primevue/inputtext'
  import {
    Chat_Room_Xref_Users_Constraint,
    useAddUserToChatRoomMutation,
    useCreateChatRoomMutation,
    Users_Constraint,
  } from '@/api'
  import { user } from '@/hooks/user'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    components: { InputText },
    setup() {
      const newName = ref('')
      const router = useRouter()

      const { executeMutation } = useCreateChatRoomMutation()
      const { executeMutation: addUser } = useAddUserToChatRoomMutation()

      async function createRoom(): Promise<void> {
        const newRoom = await executeMutation({
          object: {
            name: newName.value,
          },
        })

        const roomId = newRoom.data?.insert_chat_room_one?.id

        await addUser({
          object: {
            user_id: user.value?.id,
            chat_room_id: roomId,
          },
        })

        router.push({ name: 'Room', params: { id: roomId } })
      }
      return { newName, createRoom }
    },
  })
</script>
