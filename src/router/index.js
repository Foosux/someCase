import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Main.vue';

Vue.use(Router);

const routers = [
    {
        path: '/',
        name: 'index',
        redirect: '/main',
        component: Main,
        children: [
            {
                path: '/main',
                name: 'main',
                component: () => import('@/views/home/Home.vue')
            },
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: Main,
        children: [
            {
                path: '/search',
                name: 'search',
                component: () => import('@/views/search/Home.vue')
            },
        ]
    },
    {
        path: '/clueDaily',
        name: 'clueDaily',
        component: () => import('@/views/xsrb/xsrb.vue')
    },
    {
        path: '/mlc',
        name: 'Monitoring large screen',
        component: () => import('@/views/jkdp/jkdp.vue')
    },
    {
        path: '/403',
        name: 'error-403',
        component: () => import('@/views/error-page/403.vue')
    },
    {
        path: '/404',
        name: 'error-404',
        component: () => import('@/views/error-page/404.vue')
    },
    {
        path: '/500',
        name: 'error-500',
        component: () => import('@/views/error-page/500.vue')
    }
];
const RouterConfig = {
    routes: routers
};
const router = new Router(RouterConfig);
export default router;
// router.beforeEach((to, from, next) => {
//     console.log('to', to);
//     console.log('from', from);
//     console.log('next', next);
// });

// router.afterEach(to => {
//     console.log('to', to);
// });
