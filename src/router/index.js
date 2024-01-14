import { createRouter, createWebHistory } from "vue-router";

const routers = [
    { path: '/', redirect: '/g6' },
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
]

const router = createRouter({
    routes: routers,
    history: createWebHistory()
})

export default router;
