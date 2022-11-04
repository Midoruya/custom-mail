import {NavigationPaneInterface} from "src/interfaces/NavigationPaneInterface";

export default [
  {
    title: 'Docs',
    description: 'quasar.dev',
    icon: 'school',
    moveTo: 'https://quasar.dev'
  },
  {
    title: 'Github',
    description: 'github.com/quasarframework',
    icon: 'code',
    moveTo: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    description: 'chat.quasar.dev',
    icon: 'chat',
    moveTo: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    description: 'forum.quasar.dev',
    icon: 'record_voice_over',
    moveTo: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    description: '@quasarframework',
    icon: 'rss_feed',
    moveTo: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    description: '@QuasarFramework',
    icon: 'public',
    moveTo: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    description: 'Community Quasar projects',
    icon: 'favorite',
    moveTo: 'https://awesome.quasar.dev'
  }

] as Array<NavigationPaneInterface>;
