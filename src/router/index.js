import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        { path: '', name: 'HomeView', component: () => import('@/views/HomeView') },
        { path: 'register', name: 'Register', component: () => import('@/views/RegisterView') },
        { path: 'login', name: 'Login', component: () => import('@/views/loginView') },
        {
          path: 'admin',
          name: 'adminLayout',
          component: () => import('@/views/AdminLayout'),
          children: []
        }
      ]
    }
  ]
})

export default router
