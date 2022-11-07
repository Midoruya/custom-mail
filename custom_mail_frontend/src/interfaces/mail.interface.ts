export interface MailInterface {
  id: number;
  sender: string;
  receiver: string;
  title: string;
  message: string;
}

export interface CreateMailInterface {
  sender: string;
  receiver: string;
  title: string;
  message: string;
}
