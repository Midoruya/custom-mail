<template>
  <q-page>
    <q-list>
      <CollapsesMessage
        v-for="(message, index) in deferredStore.deferred"
        :key="index"
        :index="index"
        :title="message.title"
        :mail-sender="message.receiver"
        is-deferred
      />
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import { useDeferredStore } from 'stores/defered.store';
import CollapsesMessage from '../components/collapses-message.componens.vue';

const deferredStore = useDeferredStore();
</script>

<style scoped></style>
