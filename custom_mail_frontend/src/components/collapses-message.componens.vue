<template>
  <q-item v-ripple class="q-my-xs q-mx-md rounded-borders bg-grey-3" clickable>
    <q-item-section style="max-width: 300px">
      <q-item-label lines="1">{{ mailSender }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label lines="1">{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon name="delete" @click="inboxStore.removeInboxByIndex(index)" />
    </q-item-section>
    <q-item-section v-if="is_deferred" avatar>
      <q-icon name="send" @click="pushToSent()" />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInboxStore } from 'stores/inbox.store';
import { useSentStore } from 'stores/sent.store';
import { useDeferredStore } from 'stores/defered.store';

export default defineComponent({
  name: 'CollapsesMessage',
  setup() {
    const inboxStore = useInboxStore();
    const deferredStore = useDeferredStore();
    const sentStore = useSentStore();
    return { inboxStore, sentStore, deferredStore };
  },
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
  methods: {
    removeMessage(index: number) {
      if (this.isDeferred) this.deferredStore.removeDeferredByIndex(index);
      else this.inboxStore.removeInboxByIndex(index);
    },
    pushToSent() {
      this.deferredStore.sendDeferred(this.index);
    },
  },
});
</script>

<style scoped></style>
