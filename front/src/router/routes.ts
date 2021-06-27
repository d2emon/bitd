import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  /*
  {
    path: '/login',
    meta: {
      name: 'External',
      requiresAuth: false,
    },
    component: () => import('@/components/views/ExternalView.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/components/core/LoginForm.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/components/unused/Home.vue'),
      },
    ],
  },
   */

  {
    path: '/',
    /*
    meta: {
      name: 'dashboard-view',
      requiresAuth: false,
    },
     */
    component: () => import('@/components/views/DashboardView.vue'),
    children: [
    ],
  },

  /*
  {
    path: "*",
    redirect: {
      name: 'catchAll',
      path: "/dashboard",
    },
    meta: {
      requiresAuth: true,
    },
  },
   */

  /*
  {
    path: "/:catchAll(.*)",
    component: () => import(`@/components/error/NotFound.vue`),
    name: "NotFound",
  },
   */
];

export default routes;
