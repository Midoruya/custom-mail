import { defineStore } from 'pinia';
import { MailInterface } from 'src/interfaces/mail.interface';
import backend from 'src/backend';

export const useInboxStore = defineStore({
  id: 'inboxStore',
  state: () => ({
    inbox: [] as Array<MailInterface>,
  }),
  getters: {
    // getById: ({inbox}) => (id: number): MailInterface => inbox[id],
    getInbox: ({
      inbox,
    }: {
      inbox: Array<MailInterface>;
    }): Array<MailInterface> => inbox,
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
