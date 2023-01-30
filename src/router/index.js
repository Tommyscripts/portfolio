// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'
import ContactmeView from '@/views/contactme.vue'

const routes = [
  
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },
      {
        path: '/contactme',
        name: 'Contactme',
        component: ContactmeView,
      },
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
