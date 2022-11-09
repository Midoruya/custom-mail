<template>
  <q-page
    class="full-width full-height row justify-center items-center content-center"
    style="width: max-content"
  >
    <div
      class="rounded-borders col rounded-borders bg-grey-3 q-pa-lg"
      style="max-width: 1200px"
    >
      <q-item-label class="text-h6 q-my-sm">{{
        getSelectedMessage.title
      }}</q-item-label>
      <q-item>
        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{
              getSelectedMessage.sender
            }}</span>
            <span class="text-grey-8"> - от кого</span>
          </q-item-label>
          <q-item-label caption lines="1">
            <span>{{ getSelectedMessage.receiver }}</span>
            <span class="text-weight-medium"> - кому</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn
              v-if="isDeferred"
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="send"
              @click="sendNewMail()"
            ></q-btn>
            <q-btn
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="delete"
            ></q-btn>
          </div>
        </q-item-section>
      </q-item>
      <q-separator inset />
      <div class="q-my-lg" v-html="getSelectedMessage.message" />
      <q-btn to="/" color="primary" class="full-width" label="На главную" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useInboxStore } from 'stores/inbox.store';
import { useSentStore } from 'stores/sent.store';
import { useDeferredStore } from 'stores/defered.store';
import backend from 'src/backend';
import {
  CreateMailInterface,
  MailInterface,
} from 'src/interfaces/mail.interface';

export default defineComponent({
  name: 'SelectedMessagePage',
  setup() {
    const currentRouter = useRoute();
    const sentStore = useSentStore();
    const deferredStore = useDeferredStore();
    const inboxStore = useInboxStore();
    const messageIndex = parseInt(currentRouter.params.id as string);
    const messageType = currentRouter.params.type;

    let resultMessageData: MailInterface | CreateMailInterface;

    switch (messageType) {
      case 'inbox':
        resultMessageData = inboxStore.inbox[messageIndex];
        break;
      case 'sent':
        resultMessageData = sentStore.sent[messageIndex];
        break;
      case 'deferred':
        resultMessageData = deferredStore.deferred[messageIndex];
        break;
      default:
        resultMessageData = inboxStore.inbox[messageIndex];
        break;
    }

    const sendNewMail = () => {
      deferredStore.removeDeferredByIndex(messageIndex);
      sentStore.pushSent(resultMessageData);
      backend.mail.sendNewMessage(resultMessageData);
    };

    const isDeferred = computed((): boolean => messageType === 'deferred');

    const getSelectedMessage = resultMessageData;
    const getSelectedMessageData = computed(() => getSelectedMessage.message);
    return {
      getSelectedMessage,
      getSelectedMessageData,
      isDeferred,
      sendNewMail,
    };
  },
});
</script>
