import { NavigationPaneInterface } from 'src/interfaces/NavigationPaneInterface';

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
    moveTo: ''
  },
  {
    title: 'Sent',
    description: 'Отправленные',
    icon: 'send',
    moveTo: ''
  },

] as Array<NavigationPaneInterface>;
