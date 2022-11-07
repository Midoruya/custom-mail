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
      <q-form @v-on:submit="sendNewMail()">
        <q-input
          v-model="emailSender"
          type="email"
          clear-icon="close"
          placeholder="кому"
        >
          <template #prepend>
            <q-icon name="email" />
          </template>
          <template #append>
            <q-icon
              v-if="emailSender !== ''"
              name="close"
              @click="emailSender = ''"
            />
          </template>
        </q-input>
        <q-input
          v-model="emailRecipient"
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
              v-if="emailRecipient !== ''"
              name="close"
              @click="emailRecipient = ''"
            />
          </template>
        </q-input>
        <q-input
          v-model="messageTitle"
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
              v-if="emailRecipient !== ''"
              name="close"
              @click="emailRecipient = ''"
            />
          </template>
        </q-input>
        <q-editor v-model="message"></q-editor>
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
            />
          </div>
          <q-btn style="width: 200px" color="primary" label="На главную" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useDeferredStore } from '../stores/defered.store';
import backend from '../backend';

export default defineComponent({
  name: 'CreateNewMessage',
  setup() {
    const deferredStore = useDeferredStore();
    return { deferredStore };
  },
  data() {
    return {
      emailSender: '',
      emailRecipient: '',
      messageTitle: '',
      message: '',
    };
  },
  methods: {
    sendToDeferred() {
      console.log(this.emailSender);
      this.deferredStore.pushDeferred({
        sender: this.emailSender,
        receiver: this.emailRecipient,
        title: this.messageTitle,
        message: this.message,
      });
    },
    sendNewMail() {
      backend.mail.sendNewMessage({
        sender: this.emailSender,
        receiver: this.emailRecipient,
        title: this.messageTitle,
        message: this.message,
      });
    },
  },
});
</script>

<style scoped></style>
