import { defineStore } from 'pinia';
import { MailInterface } from 'src/interfaces/mail.interface';

export const useSentStore = defineStore({
  id: 'sentStore',
  state: () => ({
    sent: [] as Array<MailInterface>,
  }),
  getters: {
  },
  actions: {
    pushSent(sent: MailInterface): void {
      this.sent.push(sent);
    }
  }
});
