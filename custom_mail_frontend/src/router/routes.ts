import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/AllMessagePage.vue') },
      { path: '/inbox', component: () => import('pages/AllMessagePage.vue') },
      { path: '/sent', component: () => import('pages/AllSentPage.vue') },
      { path: '/deferred', component: () => import('pages/AllDeferredPage.vue') },
      { path: '/new', component: () => import('pages/CreateNewMessage.vue') },
    ],
  },
  {
    path: '/inbox',
    component: () => import('pages/AllMessagePage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
