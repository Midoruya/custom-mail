<template>
  <q-item
    v-ripple
    clickable
    class="q-my-xs q-mx-md rounded-borders bg-grey-3"
  >
    <q-item-section style="max-width: 300px">
      <q-item-label lines="1">{{ mailSender }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon name="message" @click="openMessage()" />
    </q-item-section>
    <q-item-section avatar>
      <q-icon name="delete" @click="removeMessage(index)" />
    </q-item-section>
    <q-item-section v-if="isDeferred" avatar>
      <q-icon name="send" @click="pushToSent()" />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInboxStore } from 'stores/inbox.store';
import { useSentStore } from 'stores/sent.store';
import { useDeferredStore } from 'stores/defered.store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CollapsesMessage',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    mailSender: {
      type: String,
      default: 'testsender@mail.ru',
    },
    title: {
      type: String,
      default: 'Message',
    },
    isDeferred: Boolean,
    isInbox: Boolean,
    isSent: Boolean,
  },
  setup(props) {
    const router = useRouter();
    const inboxStore = useInboxStore();
    const deferredStore = useDeferredStore();
    const sentStore = useSentStore();

    function removeMessage(index: number) {
      if (props.isInbox) {
        inboxStore.removeInboxByIndex(index);
      } else if (props.isSent) {
        sentStore.removeSentByIndex(index);
      } else if (props.isDeferred) {
        deferredStore.removeDeferredByIndex(index);
      } else {
        console.log('Error: unknown message type');
      }
    }

    const openMessage = () => {
      let messageType = '';
      if (props.isInbox) {
        messageType = 'inbox';
      } else if (props.isSent) {
        messageType = 'sent';
      } else if (props.isDeferred) {
        messageType = 'deferred';
      } else {
        console.log('Error: unknown message type');
      }
      router.push(`/message/${messageType}/${props.index}`);
    };

    const pushToSent = () => deferredStore.sendDeferred(props.index);

    return {
      inboxStore,
      sentStore,
      deferredStore,
      removeMessage,
      openMessage,
      pushToSent,
    };
  },
});
</script>

<style scoped></style>
