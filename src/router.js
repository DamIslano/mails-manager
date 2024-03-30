import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
import Mail from './views/Mail'
import NotFoundPage from './views/NotFoundPage'
import AppEmailBody from './components/AppEmailBody'

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: Forget },
    { path: '/dashboard', component: Dashboard },
    { path: '/mail', component: Mail, name: 'email', children: [
      { path: ':mailId?', component: AppEmailBody, props: true }
    ] },
    { path: '/:notFound(.*)', component: NotFoundPage }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
}) 

export default route