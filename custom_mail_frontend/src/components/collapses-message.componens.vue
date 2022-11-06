<template>
  <q-item
    class="q-my-xs q-mx-md rounded-borders bg-grey-3"
    clickable
    v-ripple>
    <q-item-section style="max-width: 300px">
      <q-item-label lines="1">{{ mailSender }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label  lines="1">{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon @click="inboxStore.removeInboxByIndex(index)" name="delete" />
    </q-item-section>
    <q-item-section v-if="is_deferred" avatar>
      <q-icon @click="pushToSent()" name="send" />
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
    is_deferred: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    removeMessage(index: number) {
      if (this.is_deferred)
        this.deferredStore.removeDeferredByIndex(index);
      else
        this.inboxStore.removeInboxByIndex(index);
    },
    pushToSent() {
      this.deferredStore.sendDeferred(this.index);
    },
  }
});

</script>

<style scoped>

</style>
