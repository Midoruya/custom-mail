import { defineStore } from 'pinia';
import {InboxInterface} from 'src/interfaces/inbox.interface';

export const useInboxStore = defineStore({
  id:'inboxStore',
  state: () => ({
    inbox: [] as Array<InboxInterface>,
    searchBy: '' as string,
  }),
  getters: {
    getInbox: ({ inbox }: {inbox: Array<InboxInterface>}): Array<InboxInterface> => inbox,
    searchInbox: ({ inbox, searchBy }: {inbox: Array<InboxInterface>, searchBy: string}): Array<InboxInterface> => {
      console.log('searchBy: ', searchBy);
      return inbox.filter((item: InboxInterface) => {
        return item.title.toLowerCase().includes(searchBy.toLowerCase());
      });
    }
  },
  actions: {
    removeInboxByIndex(index: number): void {
      console.log(index)
      this.inbox.splice(index, 1)
    },
    fetchInbox(): void {
      const newInbox = [] as Array<InboxInterface>
      newInbox.push({
        emailSender: 'testsender@mail.ru',
        emailReceiver: 'testreceiver@mail.ru',
        title: 'new push message',
        message: 'this is new push message',
      });
      newInbox.push({
        emailSender: 'testsender@mail.ru',
        emailReceiver: 'testreceiver@mail.ru',
        title: 'new push message 321313',
        message: 'this is new push message 321313',
      })
      this.inbox = newInbox;
    }
  },
});
