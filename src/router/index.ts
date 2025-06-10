import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
      meta: {
        title: 'Accueil - Ludovic Dormoy'
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Retourne toujours en haut lors des transitions
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Navigation guards pour les titres
router.beforeEach((to, from, next) => {
  // Mettre à jour le titre de la page
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router