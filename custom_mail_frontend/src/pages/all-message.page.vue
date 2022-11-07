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
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInboxStore } from 'stores/inbox.store';
import CollapsesMessage from 'components/collapses-message.componens.vue';

export default defineComponent({
  name: 'AllMessagePage',
  components: { CollapsesMessage },
  watch: {
    inputData() {
      this.inboxStore.searchBy = this.inputData;
    },
  },
  setup() {
    const inboxStore = useInboxStore();
    inboxStore.fetchInbox();
    return { inboxStore };
  },
  data() {
    return {
      inputData: '',
    };
  },
});
</script>

<style scoped></style>
