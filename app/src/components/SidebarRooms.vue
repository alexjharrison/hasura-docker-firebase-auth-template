<template>
  <div class="my-4">
    <router-link :to="{ name: 'Room', params: { id: room.id } }">
      <p-button
        :label="room.name"
        class="p-button-sm p-button-info p-button-rounded"
        badge-class="p-badge-warning"
        :badge="unread ? String(unread) : undefined"
        icon="pi pi-external-link"
      />
    </router-link>
  </div>
  <div
    class="mb-1"
    v-for="member in room.chat_room_xref_users"
    :key="member.id"
  >
    <chip
      :label="member.user.id === user?.id ? 'Me' : member.user.display_name"
      :image="member.user.image_url || undefined"
    />
  </div>
  <hr />
  <!-- {{ messages?.chat_message.map(({ message }) => message) }} -->
</template>

<script lang="ts">
  import { user } from '@/hooks/user'
  import { Maybe } from 'graphql/jsutils/Maybe'
  import {
    computed,
    defineComponent,
    PropType,
    ref,
    watch,
    watchEffect,
  } from 'vue'
  import Chip from 'primevue/chip'
  import { useMessagesByRoomSubscription } from '@/api'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    components: { Chip },
    props: {
      room: {
        type: Object as PropType<{
          __typename?: 'chat_room'
          id: any
          name: string
          chat_room_xref_users: Array<{
            __typename?: 'chat_room_xref_users'
            id: any
            user: {
              __typename?: 'users'
              id: string
              email: string
              display_name: string
              image_url?: Maybe<string>
              created_at: any
              updated_at: any
            }
          }>
        }>,
        required: true,
      },
    },
    setup(props) {
      const unread = ref(0)

      const { data: messages } = useMessagesByRoomSubscription({
        variables: computed(() => ({
          where: { chat_room_id: { _eq: props.room.id } },
        })),
      })

      const route = useRoute()
      watchEffect(() => {
        if (route.params.id === props.room.id) {
          unread.value = 0
        }
      })
      watch(messages, (newMessages, oldMessages) => {
        const numNewMessages = newMessages?.chat_message.length
        const numOldMessages = oldMessages?.chat_message.length
        if (route.params.id === props.room.id) {
          unread.value = 0
        } else if (
          numNewMessages &&
          numOldMessages &&
          numNewMessages !== numOldMessages
        ) {
          unread.value++
        }
      })

      return { user, unread }
    },
  })
</script>
