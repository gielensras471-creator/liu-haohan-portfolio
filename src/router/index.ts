import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/projects/hireflow',
      name: 'hireflow',
      component: () => import('../views/projects/HireFlowView.vue')
    },
    {
      path: '/projects/paper-cutting',
      name: 'paper-cutting',
      component: () => import('../views/projects/PaperCuttingView.vue')
    },
    {
      path: '/projects/maixiang-health',
      name: 'maixiang-health',
      component: () => import('../views/projects/MaixiangHealthView.vue')
    },
    {
      path: '/projects/liuli-workshop',
      name: 'liuli-workshop',
      component: () => import('../views/projects/LiuliWorkshopView.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
