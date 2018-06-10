import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('~/components/index').then(m => m.default || m);
const Inspire = () => import('~/components/inspire').then(m => m.default || m);

export function createRouter () {
  return new Router({
    mode: 'history',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/inspire',
        name: 'inspire',
        component: Inspire
      }
    ]
  })
}
