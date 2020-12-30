import Vue from 'vue';
import VueRouter from 'vue-router';
import Domov from '../views/Domov.vue';
import Isci from '../views/Isci.vue';
import Deli from '../views/Deli.vue';
import KakoDeluje from '../views/KakoDeluje.vue';
import Zgodovina from '../views/Zgodovina.vue';
import CCGN from '../views/CCGN.vue';

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
  {
    path: '/zgodovina',
    name: 'Zgodovina',
    component: Zgodovina,
  },
  {
    path: '/o-ccgn',
    name: 'CCGN',
    component: CCGN,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
