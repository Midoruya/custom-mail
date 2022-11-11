<template>
  <q-page>
    <q-list>
      <q-input
        v-model="inputData"
        class="q-pa-sm"
        outlined
        standout
        borderless
        rounded
        type="text"
        clear-icon="reload"
      >
        <template #append>
          <q-icon
            v-if="inputData !== ''"
            name="close"
            class="cursor-pointer"
            @click="inputData = ''"
          />
        </template>
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <CollapsesMessage
        v-for="(message, index) in inboxStore.searchInbox"
        :key="index"
        :index="index"
        :title="message.title"
        :mail-sender="message.sender"
        is-inbox
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import {defineComponent, onUnmounted, ref, watch} from 'vue';
import { useInboxStore } from 'stores/inbox.store';
import CollapsesMessage from 'components/collapses-message.componens.vue';

export default defineComponent({
  name: 'AllMessagePage',
  components: { CollapsesMessage },
  setup() {
    const inputData = ref('');
    const inboxStore = useInboxStore();
    inboxStore.fetchInbox();

    const interval = setInterval(() => {
      inboxStore.fetchInbox();
    }, 5000);

    onUnmounted(() => {
      clearInterval(interval);
    });

    watch(inputData, (inputData) => (inboxStore.searchBy = inputData));
    return { inboxStore, inputData };
  },
});
</script>

<style scoped></style>
