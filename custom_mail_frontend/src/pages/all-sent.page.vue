<template>
  <q-page>
    <q-list>
      <CollapsesMessage
        v-for="(message, index) in sentStore.sent"
        :key="message.message"
        :index="index"
        :title="message.title"
        :mail-sender="message.sender"
        is-sent
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSentStore } from 'stores/sent.store';
import CollapsesMessage from '../components/collapses-message.componens.vue';

export default defineComponent({
  name: 'AllSentPage',
  components: { CollapsesMessage },
  setup() {
    const sentStore = useSentStore();
    return { sentStore };
  },
});
</script>

<style scoped></style>
