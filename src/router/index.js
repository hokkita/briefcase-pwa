import { createWebHashHistory, createRouter } from "vue-router";

import ComingSoon from '@/pages/ComingSoon.vue';

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL
        ),
    routes: [
        {
            path: '/',
            component: ComingSoon,
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: ComingSoon
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

export default router;