import { api as axios } from 'boot/axios';
import {
  CreateMailInterface,
  MailInterface,
} from 'src/interfaces/mail.interface';
import { useUserStore } from 'stores/user.store';

async function getAllSentMessage(): Promise<Array<MailInterface>> {
  const userStore = useUserStore();
  const token = userStore.token;
  const request = await axios.post(
    'mail/get/sent',
    {
      email: userStore.email,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return request.data as Array<MailInterface>;
}

async function getAllMessage(): Promise<Array<MailInterface>> {
  const userStore = useUserStore();
  const token = userStore.token;
  const request = await axios.post(
    'mail/get/inbox',
    {
      email: userStore.email,
    },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );
  return request.data as Array<MailInterface>;
}

async function sendNewMessage(data: CreateMailInterface): Promise<void> {
  const userStore = useUserStore();
  const token = userStore.token;
  const userEmail = userStore.email;
  const newData = { ...data, sender: userEmail };
  await axios.post('mail/create', newData, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}

async function removeMailByIndex(index: number): Promise<void> {
  const token = useUserStore().token;
  await axios.delete('mail/remove/' + index, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}

export default {
  getAllSentMessage,
  getAllMessage,
  sendNewMessage,
  removeMailByIndex,
};
