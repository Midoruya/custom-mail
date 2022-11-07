<template>
  <q-item
    @click="openMessage()"
    v-ripple
    class="q-my-xs q-mx-md rounded-borders bg-grey-3"
    clickable
  >
    <q-item-section style="max-width: 300px">
      <q-item-label lines="1">{{ mailSender }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon name="delete" @click="inboxStore.removeInboxByIndex(index)" />
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
    isDeferred: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const inboxStore = useInboxStore();
    const deferredStore = useDeferredStore();
    const sentStore = useSentStore();

    function removeMessage(index: number) {
      if (props.isDeferred) deferredStore.removeDeferredByIndex(index);
      else inboxStore.removeInboxByIndex(index);
    }

    const openMessage = () => router.push({ path: '/message/' + props.index });

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
  methods: {},
});
</script>

<style scoped></style>
