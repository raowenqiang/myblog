
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../view/Home'),
    },  {
        path: '/login',
        name: 'login',
        component: () => import('../view/Login')
    },

];
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router
