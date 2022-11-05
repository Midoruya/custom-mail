<template>
  <q-page>
    <q-list>
      <q-input class="q-pa-sm" outlined standout  borderless rounded type="text" v-model="inputData" clear-icon="reload">
        <template v-slot:append>
          <q-icon
            name="close"
            class="cursor-pointer"
            v-if="inputData !== ''"
            @click="inputData = ''"
          />
        </template>
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
      </q-input>
      <CollapsesMessage
        v-for="(message, index) in inboxStore.searchInbox"
        :key="index"
        :index="index"
        :title="message.title"
        :mail-sender="message.emailSender"
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useInboxStore} from 'stores/inbox.store';
import CollapsesMessage from 'components/CollapsesMessage.vue';

export default  defineComponent({
  name: 'AllMessagePage',
  components: {CollapsesMessage},
  watch: {
    inputData() {
      this.inboxStore.searchBy = this.inputData;
    },
  },
  setup() {
    const inboxStore = useInboxStore();
    inboxStore.fetchInbox();
    return {inboxStore}
  },
  data() {
    return {
      inputData: '',
    };
  },
});
</script>

<style scoped>

</style>
