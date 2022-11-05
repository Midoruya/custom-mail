<template>
  <q-page>
    <q-list>
      <CollapsesMessage
        v-for="(message, index) in deferredStore.deferred"
        :key="index"
        :index="index"
        :title="message.title"
        :mail-sender="message.emailSender"
        :is_deferred="true"
      />
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useDeferredStore } from '../stores/defered.store';
import CollapsesMessage from '../components/CollapsesMessage.vue';

export default defineComponent({
  name: 'AllDeferredPage',
  components: { CollapsesMessage },
  setup() {
    const deferredStore = useDeferredStore();
    return { deferredStore };
  },
});
</script>

<style scoped>

</style>
