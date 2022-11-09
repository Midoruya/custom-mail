import { defineStore } from 'pinia';
import { CreateMailInterface } from 'src/interfaces/mail.interface';

export const useSentStore = defineStore({
  id: 'sentStore',
  state: () => ({
    sent: [] as Array<CreateMailInterface>,
  }),
  getters: {},
  actions: {
    pushSent(sent: CreateMailInterface): void {
      this.sent.push(sent);
    },
    removeSentByIndex(index: number): void {
      this.sent.splice(index, 1);
    },
  },
});
