import Vue from 'vue';
import VueRouter from 'vue-router';
import Domov from '../views/Domov.vue';
import Isci from '../views/Isci.vue';
import Deli from '../views/Deli.vue';
import KakoDeluje from '../views/KakoDeluje.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Domov',
    component: Domov,
  },
  {
    path: '/isci',
    name: 'Isci',
    component: Isci,
  },
  {
    path: '/deli',
    name: 'Deli',
    component: Deli,
  },
  {
    path: '/kako-deluje',
    name: 'KakoDeluje',
    component: KakoDeluje,
  },
  /*
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" *//* '../views/About.vue'),
  },
  */
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
