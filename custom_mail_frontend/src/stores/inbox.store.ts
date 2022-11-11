import { defineStore } from 'pinia';
import { MailInterface } from 'src/interfaces/mail.interface';
import backend from 'src/backend';

export const useInboxStore = defineStore({
  id: 'inboxStore',
  state: () => ({
    inbox: [] as Array<MailInterface>,
    searchBy: '' as string,
  }),
  getters: {
    // getById: ({inbox}) => (id: number): MailInterface => inbox[id],
    getInbox: ({
      inbox,
    }: {
      inbox: Array<MailInterface>;
    }): Array<MailInterface> => inbox,
    searchInbox: ({
      inbox,
      searchBy,
    }: {
      inbox: Array<MailInterface>;
      searchBy: string;
    }): Array<MailInterface> => {
      console.log('searchBy: ', searchBy);
      return inbox.filter((item: MailInterface) => {
        return item.title.toLowerCase().includes(searchBy.toLowerCase());
      });
    },
  },
  actions: {
    removeInboxByIndex(index: number): void {
      backend.mail
        .removeMailByIndex(this.inbox[index].id)
        .then(() => this.fetchInbox())
        .catch((reason) => alert(reason.response.data.message));
    },
    fetchInbox(): void {
      backend.mail
        .getAllMessage()
        .then((data) => (this.inbox = data))
        .catch((reason) => alert(reason.response.data.message));
    },
  },
});
