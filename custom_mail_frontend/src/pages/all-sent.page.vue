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
        v-for="(message, index) in sentData"
        :key="message.message"
        :index="index"
        :title="message.title"
        :mail-sender="message.receiver"
        is-sent
      />
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import { useSentStore } from 'stores/sent.store';
import CollapsesMessage from '../components/collapses-message.componens.vue';
import { computed, ref } from "vue";

const sentStore = useSentStore();
sentStore.fetchSent();

const inputData = ref<string>('');

const sentData = computed(() => sentStore.sent.filter((message) => message.title.toLowerCase().includes(inputData.value.toLowerCase())));
</script>

<style scoped></style>
