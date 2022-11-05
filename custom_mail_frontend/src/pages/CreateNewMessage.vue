<template>
  <q-page
    class="full-width full-height row justify-center items-center content-center"
    style="width: max-content"
  >
    <div
      class="rounded-borders col rounded-borders bg-grey-3 q-pa-lg"
      style="max-width: 900px"
    >
      <h6
        class="text-h6"
        style="margin: 0"
      >Создань новое письмо</h6>
      <q-form type="submit">
        <q-input type="email" clear-icon="close" placeholder="кому" v-model="emailSender">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
          <template v-slot:append>
            <q-icon v-if="emailSender !== ''" name="close" @click="emailSender = ''" />
          </template>
        </q-input>
        <q-input type="email" clear-icon="close" placeholder="от кого" class="q-my-sm" v-model="emailRecipient">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
          <template v-slot:append>
            <q-icon v-if="emailRecipient !== ''" name="close" @click="emailRecipient = ''" />
          </template>
        </q-input>
        <q-input type="text" clear-icon="close" placeholder="тема сообшения" class="q-my-sm" v-model="messageTitle">
          <template v-slot:prepend>
            <q-icon name="title" />
          </template>
          <template v-slot:append>
            <q-icon v-if="emailRecipient !== ''" name="close" @click="emailRecipient = ''" />
          </template>
        </q-input>
        <q-editor v-model="message"></q-editor>
        <div class="q-mt-md full-width row  justify-between items-center content-center">
          <div>
            <q-btn @click="sendToDeferred()" style="width: 200px" color="primary" label="В отложеные" />
            <q-btn style="width: 200px" class="q-ml-sm" color="primary" label="Отправить" />
          </div>
          <q-btn style="width: 200px" color="primary" label="На главную"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useDeferredStore } from '../stores/defered.store';

export default defineComponent({
  name: 'CreateNewMessage',
  setup() {
    const deferredStore =  useDeferredStore();
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
        emailSender: this.emailSender,
        emailRecipient: this.emailRecipient,
        messageTitle: this.messageTitle,
        message: this.message,
      });
    },
  }
});
</script>

<style scoped>

</style>
