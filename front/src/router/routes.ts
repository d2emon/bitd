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
    component: () => import('@/components/views/NewDashboardView.vue'),
    children: [
      {
        path: '',
        /*
        meta: {
          name: 'Dashboard',
        },
         */
        component: () => import('@/components/dashboard/CharacterSheet.vue'),
      },
      {
        path: 'crew',
        component: () => import('@/components/dashboard/Crews.vue'),
        children: [
          {
            path: ':id',
            component: () => import('@/components/dashboard/CrewSheet.vue'),
          },
        ],
      },
      {
        path: 'character',
        component: () => import('@/components/dashboard/CharacterSheet.vue'),
      },
      {
        path: 'decisions',
        component: () => import('@/components/dashboard/Decisions.vue'),
      },
      {
        path: 'roll',
        component: () => import('@/components/dashboard/Roll.vue'),
      },
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
