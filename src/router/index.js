import Home from '../views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('../views/ContactUs.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../views/Profile'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/Products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/ProductView',
    name: 'ProductView',
    component: () => import('../views/ProductView.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/ConfirmShopping',
    name: 'ConfirmShopping',
    component: () => import('../views/ConfirmShopping.vue'),
    meta: {
      layout: 'default'
    }
  }
]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
})

export { router }
