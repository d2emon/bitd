import Vue from 'vue';
import VueRouter from 'vue-router';
// TODO: Add 'vue-meta' import
// TODO: Add 'nprogress' import
// TODO: Add store import
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // base: '/',
  // mode: 'history',
  routes,

  /*
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
   */
});

/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.authorized) {
      next();
    } else{
      next('/');
    }
  } else {
    next();
  }
});
*/

/*
router.beforeResolve((to, from, next) => {
   if (to.path) {
     NProgress.start();
   }
   next();
});
*/

/*
router.afterEach(() => {
   NProgress.done();
});
*/

// TODO: Use meta

export default router;
