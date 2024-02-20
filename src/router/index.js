import { createRouter, createWebHistory } from "vue-router";

const routers = [
    { path: '/', redirect: '/slot' },
    {
        path: '/g6',
        component: () => import('@/views/g6/g6.vue')
    },
    {
        path: '/x6',
        component: () => import('@/views/x6/x6.vue')
    },
    {
        path: '/three',
        component: () => import('@/views/three/three.vue')
    },
    {
        path: '/slot',
        component: () => import('@/views/slot/slot.vue')
    },
]

const router = createRouter({
    routes: routers,
    history: createWebHistory()
})

export default router;
