import { NavigationPanelInterface } from 'src/interfaces/navigation-panel.interface';

export default [
  {
    title: 'Inbox',
    description: 'Входящие',
    icon: 'inbox',
    moveTo: '/inbox'
  },
  {
    title: 'deferred',
    description: 'Отложенные',
    icon: 'timer',
    moveTo: '/deferred'
  },
  {
    title: 'New message',
    description: 'Новое сообщение',
    icon: 'send',
    moveTo: '/new'
  },
  {
    title: 'Sent',
    description: 'Отправленные',
    icon: 'history',
    moveTo: '/sent'
  },

] as Array<NavigationPanelInterface>;
