import { defineStore } from 'pinia';
import { InboxInterface } from 'src/interfaces/inbox.interface';

export const useSentStore = defineStore({
  id: 'sentStore',
  state: () => ({
    sent: [] as Array<InboxInterface>,
  }),
  getters: {
  },
  actions: {
    pushSent(sent: InboxInterface): void {
      this.sent.push(sent);
    }
  }
});
