import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior () {
    return { top: 0, left: 0 }
  },
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
          redirect: {
            name: 'Profile'
          },
          children: [
            { path: 'profile', name: 'Profile', component: () => import('@/views/Member/ProfileView') },
            { path: 'freeDays', name: 'FreeDays', component: () => import('@/views/Member/FreeDaysView') },
            { path: 'bento-diary', name: 'BentoDiaryView', component: () => import('@/views/Member/BentoDiaryView') }
          ]
        },
        {
          path: 'admin',
          name: 'adminLayout',
          component: () => import('@/views/AdminLayout'),
          children: [
            { path: 'dashboard', name: 'AdminDashboard', component: () => import('@/views/AdminLayout/Dashboard') },
            { path: 'login', name: 'AdminLogin', component: () => import('@/views/AdminLayout/AdminLogin') },
            { path: 'admin-items', name: 'AdminItems', component: () => import('@/views/AdminLayout/AdminItems') },
            { path: 'add-item', name: 'AddItem', component: () => import('@/views/AdminLayout/AddItem') },
            { path: 'edit-item/:id', name: 'EditItem', component: () => import('@/views/AdminLayout/EditItem') }
          ]
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/ErrorView')
    }
  ]
})

export default router
