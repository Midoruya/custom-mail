import { api as axios } from 'boot/axios';
import {
  CreateMailInterface,
  MailInterface,
} from 'src/interfaces/mail.interface';

async function getAllMessage(): Promise<Array<MailInterface>> {
  const request = await axios.get('mail');
  return request.data as Array<MailInterface>;
}

async function sendNewMessage(data: CreateMailInterface): Promise<void> {
  await axios.post('mail/create', data);
}

async function removeMailByIndex(index: number): Promise<void> {
  await axios.delete('mail/remove/' + index);
}

export default {
  getAllMessage,
  sendNewMessage,
  removeMailByIndex,
};
