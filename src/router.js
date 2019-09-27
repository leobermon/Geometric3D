import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { 
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue')
    },
    { 
      path: '/faq',
      name: 'faq',
      component: () => import(/* webpackChunkName: "about" */ './views/Faq.vue')
    },
    { 
      path: '/galery',
      name: 'galery',
      component: () => import(/* webpackChunkName: "about" */ './views/Galery.vue')
    },
    { 
      path: '/materiales',
      name: 'materiales',
      component: () => import(/* webpackChunkName: "about" */ './views/Materials.vue')
    },
    { 
      path: '/cotizaciones',
      name: 'cotizaciones',
      component: () => import(/* webpackChunkName: "about" */ './views/Cotizaciones.vue')
    },
    { 
      path: '/servicios',
      name: 'servicios',
      component: () => import(/* webpackChunkName: "about" */ './views/Services.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
