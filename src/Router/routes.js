import { createRouter, createWebHistory } from 'vue-router'
import { pageNames, linkPaths } from '@/constants/routeNames';
import HomePage from '@/Home/HomePage.vue';
import ContactPage from '@/Home/ContactPage.vue';
import SchedulesPage from '@/Home/SchedulesPage.vue';
import ServicesPage from '@/Home/ServicesPage.vue';
import BookingPage from '@/Home/BookingPage.vue';

const routes = [
    {
       path: linkPaths.HOME, component: HomePage, name: pageNames.HOME
    },
    {
        path: linkPaths.BOOKING, component: BookingPage, name: pageNames.BOOKING
    },
    {
        path: linkPaths.CONTACT, component: ContactPage, name: pageNames.CONTACT
    },
    ,
    {
        path: linkPaths.SERVICES, component: ServicesPage, name: pageNames.SERVICES
    },
    {
        path: linkPaths.SCHEDULES, component: SchedulesPage, name: pageNames.SCHEDULES
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;