import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout/LayoutView.vue'

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
        { path: '', name: 'HomeView', component: () => import('@/views/HomeView/HomeView.vue') },
        { path: 'register', name: 'Register', component: () => import('@/views/RegisterView/RegisterView.vue') },
        { path: 'login', name: 'Login', component: () => import('@/views/LoginView/LoginView.vue') },
        { path: 'issue', name: 'IssueForm', component: () => import('@/views/IssueFormView/IssueFormView.vue') },
        { path: 'menu', name: 'MenuView', component: () => import('@/views/MenuView/MenuView.vue') },
        {
          path: 'member',
          name: 'memberLayout',
          component: () => import('@/views/Member/MemberLayout/MemberLayout.vue'),
          redirect: {
            name: 'Profile'
          },
          children: [
            { path: 'profile', name: 'Profile', component: () => import('@/views/Member/ProfileView/ProfileView.vue') },
            { path: 'freeDays', name: 'FreeDays', component: () => import('@/views/Member/FreeDaysView/FreeDaysView.vue') },
            { path: 'bento-diary', name: 'BentoDiaryView', component: () => import('@/views/Member/BentoDiaryView/BentoDiaryView.vue') }
          ]
        },
        {
          path: 'admin',
          name: 'adminLayout',
          component: () => import('@/views/AdminLayout/AdminLayout.vue'),
          children: [
            { path: 'dashboard', name: 'AdminDashboard', component: () => import('@/views/AdminLayout/Dashboard/DashboardView.vue') },
            { path: 'login', name: 'AdminLogin', component: () => import('@/views/AdminLayout/AdminLogin/AdminLogin.vue') },
            { path: 'admin-items', name: 'AdminItems', component: () => import('@/views/AdminLayout/AdminItems/AdminItems.vue') },
            { path: 'add-item', name: 'AddItem', component: () => import('@/views/AdminLayout/AddItem/AddItem.vue') },
            { path: 'edit-item/:id', name: 'EditItem', component: () => import('@/views/AdminLayout/EditItem/EditItem.vue') }
          ]
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/ErrorView/ErrorView.vue')
    }
  ]
})

export default router
