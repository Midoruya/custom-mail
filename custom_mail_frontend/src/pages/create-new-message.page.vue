<template>
  <q-page
    class="full-width full-height row justify-center items-center content-center"
    style="width: max-content"
  >
    <div
      class="rounded-borders col rounded-borders bg-grey-3 q-pa-lg"
      style="max-width: 900px"
    >
      <q-item>
        <q-item-section top>
          <q-item-label class="text-h6 q-my-sm" lines="1">
            Создань новое письмо
          </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-btn class="q-ml-sm" flat round dense icon="close" to="/" />
        </q-item-section>
      </q-item>
      <q-form>
        <q-input
          v-model="newMessageData.receiver"
          type="email"
          clear-icon="close"
          placeholder="кому"
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
        <q-file
          v-model="file"
          class="q-my-sm"
          label="Если нужно прикрепить файл"
        >
          <template #prepend>
            <q-icon name="cloud_upload" @click.stop.prevent></q-icon>
          </template>
          <template #append>
            <q-icon
              v-if="file !== null"
              name="close"
              class="cursor-pointer"
              @click.stop.prevent="file = null"
            />
          </template>
          <template #hint> Field hint </template>
        </q-file>
        <q-editor v-model="newMessageData.message"></q-editor>
        <div
          class="q-mt-md full-width row justify-between items-center content-center"
        >
          <q-btn
            style="width: 270px"
            color="primary"
            label="В отложеные"
            @click="sendToDeferred()"
          />
          <q-btn
            style="width: 270px"
            type="submit"
            color="primary"
            label="Отправить"
            @click="sendNewMail()"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useDeferredStore } from 'stores/defered.store';
import backend from '../backend';
import { CreateMailInterface } from '../interfaces/mail.interface';
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();
const deferredStore = useDeferredStore();
const newMessageData = ref({
  receiver: '',
  title: '',
  message: '',
} as CreateMailInterface);
const file = ref(null);

const sendToDeferred = () => {
  deferredStore.pushDeferred(newMessageData.value);
  router.push('/deferred');
};

const sendNewMail = () => {
  backend.mail.sendNewMessage(newMessageData.value);
  router.push('/sent');
};

</script>

<style scoped></style>
