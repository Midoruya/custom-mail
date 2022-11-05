import {defineStore} from 'pinia';
import {InboxInterface} from 'src/interfaces/inbox.interface';

export const useDeferredStore = defineStore({
  id: 'deferredStore',
  state: () => ({
    deferred: [] as Array<InboxInterface>,
  }),
  getters: {
    getByIndex: ({ deferred }: {deferred: Array<InboxInterface>}) => (index: number): InboxInterface => deferred[index],
  },
  actions: {
    pushDeferred(deferred: InboxInterface): void {
      console.log('pushDeferred: ', deferred);
      this.deferred.push(deferred);
    },
    removeDeferredByIndex(index: number): void {
      this.deferred.splice(index, 1)
    },
  },
});
