import { createRouter, createWebHistory } from 'vue-router';

import NProgress from 'nprogress';

const routes = [{
  path: '/',
  name: 'Main',
  component: () => import('@/pages/Main.vue'),
  children: [
    {
      path: '',
      name: 'Home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/collections',
      name: 'Collections',
      component: () => import('@/pages/Collections.vue'),
      children: {
        path: '/collections/bureaux-droit',
        name: 'Bureaux Droit',
        component: () => import('@/pages/BureauxDroit.vue'),
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/pages/Contact.vue'),
    }
  ]
}]


const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;