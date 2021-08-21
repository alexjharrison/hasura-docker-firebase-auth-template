<template>
  <div class="px-4">
    <h1 class="text-center">{{ room?.name }}</h1>

    <scroll-panel
      class="p-4 bg-cyan-800 border-round-top"
      style="width: 100%; height: 50vh"
    >
      <div class="flex h-full flex-column-reverse justify-content-start">
        <div
          v-for="message in room?.chat_messages"
          :key="message.id"
          class="flex my-2 align-items-center"
        >
          <chip
            :label="message.user.display_name"
            :image="message.user.image_url || undefined"
            class="flex-shrink-0 mt-1 align-self-start"
          />
          <span class="ml-2 text-xl font-semibold">{{ message.message }}</span>
          <span class="flex-shrink-0 ml-auto">{{
            new Date(message.created_at).toLocaleTimeString()
          }}</span>
        </div>
      </div>
    </scroll-panel>
    <form @submit.prevent="submitMessage" class="p-inputgroup">
      <p-button icon="pi pi-check" type="submit" />
      <input-text autofocus class="p-inputtext-lg" v-model="messageText" />
    </form>
    <invite-user />
  </div>
</template>

<script lang="ts">
  import {
    ChatRoomDetailsSubscriptionVariables,
    useChatRoomDetailsSubscription,
    useCreateChatMessageMutation,
  } from '@/api'
  import { computed, defineComponent, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import ScrollPanel from 'primevue/scrollpanel'
  import InputText from 'primevue/inputtext'
  import Chip from 'primevue/chip'
  import { user } from '@/hooks/user'
  import InviteUser from '@/components/InviteUser.vue'

  export default defineComponent({
    components: { ScrollPanel, InputText, Chip, InviteUser },
    setup() {
      const route = useRoute()

      const messageText = ref('')

      const variables = computed<ChatRoomDetailsSubscriptionVariables>(() => ({
        where: { id: { _eq: route.params.id } },
      }))

      const { data } = useChatRoomDetailsSubscription({ variables })
      const room = computed(() => data.value?.chat_room[0])

      const { executeMutation: addMessage } = useCreateChatMessageMutation()

      function submitMessage() {
        if (!messageText.value) return
        addMessage({
          object: {
            message: messageText.value,
            user_id: user.value?.id,
            chat_room_id: room.value?.id,
          },
        })

        messageText.value = ''
      }

      return {
        messageText,
        submitMessage,
        room,
      }
    },
  })
</script>
