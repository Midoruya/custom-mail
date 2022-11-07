<template>
  <q-page
    class="full-width full-height row justify-center items-center content-center"
    style="width: max-content"
  >
    <div
      class="rounded-borders col rounded-borders bg-grey-3 q-pa-lg"
      style="max-width: 900px"
    >
      <h6 class="text-h6" style="margin: 0">Создань новое письмо</h6>
      <q-form>
        <q-input
          v-model="newMessageData.sender"
          type="email"
          clear-icon="close"
          placeholder="кому"
        >
          <template #prepend>
            <q-icon name="email" />
          </template>
          <template #append>
            <q-icon
              v-if="newMessageData.sender !== ''"
              name="close"
              @click="newMessageData.sender = ''"
            />
          </template>
        </q-input>
        <q-input
          v-model="newMessageData.receiver"
          type="email"
          clear-icon="close"
          placeholder="от кого"
          class="q-my-sm"
        >
          <template #prepend>
            <q-icon name="email" />
          </template>
          <template #append>
            <q-icon
              v-if="newMessageData.receiver !== ''"
              name="close"
              @click="newMessageData.receiver = ''"
            />
          </template>
        </q-input>
        <q-input
          v-model="newMessageData.title"
          type="text"
          clear-icon="close"
          placeholder="тема сообшения"
          class="q-my-sm"
        >
          <template #prepend>
            <q-icon name="title" />
          </template>
          <template #append>
            <q-icon
              v-if="newMessageData.title !== ''"
              name="close"
              @click="newMessageData.title = ''"
            />
          </template>
        </q-input>
        <q-editor v-model="newMessageData.message"></q-editor>
        <div
          class="q-mt-md full-width row justify-between items-center content-center"
        >
          <div>
            <q-btn
              style="width: 200px"
              color="primary"
              label="В отложеные"
              @click="sendToDeferred()"
            />
            <q-btn
              style="width: 200px"
              type="submit"
              class="q-ml-sm"
              color="primary"
              label="Отправить"
              @click="sendNewMail()"
            />
          </div>
          <q-btn style="width: 200px" color="primary" label="На главную" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDeferredStore } from 'stores/defered.store';
import backend from '../backend';
import { CreateMailInterface } from '../interfaces/mail.interface';

export default defineComponent({
  name: 'CreateNewMessage',
  setup() {
    const deferredStore = useDeferredStore();
    const newMessageData = ref({
      sender: '',
      receiver: '',
      title: '',
      message: '',
    } as CreateMailInterface);

    const sendToDeferred = () =>
      deferredStore.pushDeferred(newMessageData.value);

    const sendNewMail = () => backend.mail.sendNewMessage(newMessageData.value);

    return { deferredStore, newMessageData, sendToDeferred, sendNewMail };
  },
});
</script>

<style scoped></style>
