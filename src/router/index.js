import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      auth: false
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      auth: true
    },
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.state.authenticated) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
