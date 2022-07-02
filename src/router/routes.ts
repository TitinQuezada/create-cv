import { RouteRecordRaw } from 'vue-router';

export const routePaths = {
  publicRoutes: {
    login: '/',
    singup: '/singup',
  },
  privateRoutes: {
    home: '/home',
    personalInformation: '/personal-information',
  },
};

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
    path: '/',
    meta: { private: true },
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    children: [
      {
        path: routePaths.privateRoutes.home,
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: routePaths.privateRoutes.personalInformation,
        component: () => import('pages/PersonalInformationPage.vue'),
      },
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
