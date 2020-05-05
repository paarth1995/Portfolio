import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard' 
import BasicProjects from '../components/BasicProjects'
import ReactProjects from '../components/ReactProjects'
import VueProjects from '../components/VueProjects'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/basics',
      name: 'BasicProjects',
      component: BasicProjects,
    },
    {
      path: '/react',
      name: 'ReactProjects',
      component: ReactProjects,
    },
    {
      path: '/vue',
      name: 'VueProjects',
      component: VueProjects,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
