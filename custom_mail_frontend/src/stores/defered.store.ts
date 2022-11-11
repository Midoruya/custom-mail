import { defineStore } from 'pinia';
import { CreateMailInterface } from 'src/interfaces/mail.interface';
import backend from 'src/backend';

export const useDeferredStore = defineStore({
  id: 'deferredStore',
  state: () => ({
    deferred: [] as Array<CreateMailInterface>,
  }),
  getters: {
    getByIndex:
      ({ deferred }: { deferred: Array<CreateMailInterface> }) =>
      (index: number): CreateMailInterface =>
        deferred[index],
  },
  actions: {
    pushDeferred(deferred: CreateMailInterface): void {
      console.log('pushDeferred: ', deferred);
      this.deferred.push(deferred);
    },
    sendDeferred(index: number): void {
      backend.mail
        .sendNewMessage(this.deferred[index])
        .then(() => this.removeDeferredByIndex(index))
        .catch((reason) => alert(reason.response.data.message));
    },
    removeDeferredByIndex(index: number): void {
      this.deferred.splice(index, 1);
    },
  },
});
