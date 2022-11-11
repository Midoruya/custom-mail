import { defineStore } from 'pinia';
import { MailInterface } from 'src/interfaces/mail.interface';
import backend from 'src/backend';

export const useSentStore = defineStore({
  id: 'sentStore',
  state: () => ({
    sent: [] as Array<MailInterface>,
  }),
  getters: {},
  actions: {
    fetchSent(): void {
      backend.mail
        .getAllSentMessage()
        .then((data) => (this.sent = data))
        .catch((reason) => alert(reason.response.data.message));
    },
    removeSentByIndex(index: number): void {
      backend.mail
        .removeMailByIndex(this.sent[index].id)
        .then(() => this.fetchSent())
        .catch((reason) => alert(reason.response.data.message));
    },
  },
});
