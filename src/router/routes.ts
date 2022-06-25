import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: { public: true },
    component: () => import('layouts/UnLoginLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: '/singup',
        component: () => import('pages/RegistrationPage.vue'),
      },
    ],
  },
  {
    path: '/home',
    meta: { private: true },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'home2', component: () => import('pages/HomePage2.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
