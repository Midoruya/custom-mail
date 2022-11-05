import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main.layout.vue'),
    children: [
      { path: '/', component: () => import('pages/all-message.page.vue') },
      { path: '/inbox', component: () => import('pages/all-message.page.vue') },
      { path: '/sent', component: () => import('pages/all-sent.page.vue') },
      { path: '/deferred', component: () => import('pages/all-deferred.page.vue') },
      { path: '/new', component: () => import('pages/create-new-message.page.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error-not-found.page.vue'),
  },
];

export default routes;
