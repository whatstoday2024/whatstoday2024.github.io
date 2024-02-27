import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        { path: '', name: 'HomeView', component: () => import('@/views/HomeView') },
        { path: 'register', name: 'Register', component: () => import('@/views/RegisterView') },
        { path: 'login', name: 'Login', component: () => import('@/views/LoginView') },
        { path: 'issue', name: 'IssueForm', component: () => import('@/views/IssueFormView') },
        { path: 'menu', name: 'MenuView', component: () => import('@/views/MenuView') },
        {
          path: 'member',
          name: 'memberLayout',
          component: () => import('@/views/Member/MemberLayout'),
          children: [
            { path: 'profile', name: 'Profile', component: () => import('@/views/Member/ProfileView') },
          ]
        },
        {
          path: 'admin',
          name: 'adminLayout',
          component: () => import('@/views/AdminLayout'),
          children: []
        },

      ]
    }
  ]
})

export default router
