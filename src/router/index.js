import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Register from '@/views/Register.vue'
import Search from '@/views/Search.vue'
import Settings from '@/views/Settings.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    },
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: false
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      auth: false
    },
    component: About,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      auth: true
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      auth: true
    },
    component: About,
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      auth: true
    },
    component: Search,
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      auth: true
    },
    component: Settings,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.state.authenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
