import { createWebHashHistory, createRouter } from "vue-router";

import Splash from '@/pages/Splash.vue';
import Login from '@/pages/Login.vue';


import UserDashboard from '@/pages/user/Dashboard.vue';


import ComingSoon from '@/pages/ComingSoon.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL
        ),
    routes: [
        {
            path: '/',
            component: Splash,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/user',
            // component: User,
            children: [
                {
                    path: 'dashboard',
                    component: UserDashboard,
                }
            ]
        },
        {
            path: '/coming-soon',
            component: ComingSoon,
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: PageNotFound
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

export default router;