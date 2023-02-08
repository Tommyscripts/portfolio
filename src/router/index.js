import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import ContactmeView from '@/views/Contactme.vue'
import AboutmeView from '@/components/Aboutme.vue'
import MyprojectsView from '@/views/Myprojects.vue'


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
      {
        path: '/aboutme',
        name: 'Aboutme',
        component: AboutmeView,
      },
      {
        path: '/myprojects',
        name: 'Myprojects',
        component: MyprojectsView,
      },
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
