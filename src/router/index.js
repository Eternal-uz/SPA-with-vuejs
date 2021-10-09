import { createRouter, createWebHistory } from 'vue-router';
import firstUser from '@/views/firstUser';
import returningUser from '@/views/returningUser';
import registeredUser from '@/views/registeredUser';


const routes = [{
        path: '/firstUser',
        name: 'firstUser',
        component: firstUser,

    },
    {
        path: '/returningUser',
        name: 'returningUser',
        component: returningUser,

    },
    {
        path: '/registeredUser',
        name: 'registeredUser',
        component: registeredUser,

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router