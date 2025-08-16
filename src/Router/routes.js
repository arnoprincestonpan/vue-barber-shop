import { createRouter, createWebHistory } from 'vue-router'
import { pageNames } from '@/constants/pageNames';
import HomePage from '@/Home/HomePage.vue';
import ContactPage from '@/Home/ContactPage.vue';
import SchedulesPage from '@/Home/SchedulesPage.vue';
import ServicesPage from '@/Home/ServicesPage.vue';
import BookingPage from '@/Home/BookingPage.vue';

const routes = [
    {
       path: "/", component: HomePage, name: pageNames.HOME
    },
    {
        path:'/book', component: BookingPage, name: pageNames.BOOKING
    },
    {
        path: "/contact", component: ContactPage, name: pageNames.CONTACT
    },
    ,
    {
        path: '/services', component: ServicesPage, name: pageNames.SERVICES
    },
    {
        path: '/schedules', component: SchedulesPage, name: pageNames.SCHEDULES
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;