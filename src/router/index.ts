import { createRouter, createWebHashHistory } from 'vue-router';

// Components
// import AdminLayout from '@/layouts/AdminLayout.vue';
// import BlankView from '@/layouts/BlankView.vue';
// import HomeView from '@/pages/HomePage.vue';

// Resources
// import { DashboardOutlined } from '@ant-design/icons-vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('./../pages/AboutPage.vue'),
        },
        // {
        //     path: '/admin',
        //     name: 'Admin',
        //     component: AdminLayout,
        //     children: [
        //         {
        //             path: '/admin/application',
        //             name: '应用',
        //             component: BlankView,
        //             children: [
        //                 {
        //                     meta: {
        //                         icon: DashboardOutlined,
        //                     },
        //                     path: '/admin/application',
        //                     name: '应用调试',
        //                     component: BlankView,
        //                 },
        //             ],
        //         },
        //         {
        //             path: '/admin/management',
        //             name: '管理',
        //             component: BlankView,
        //             children: [
        //                 {
        //                     meta: {
        //                         icon: DashboardOutlined,
        //                     },
        //                     path: '/admin/management',
        //                     name: '设备管理',
        //                     component: BlankView,
        //                 },
        //             ],
        //         },
        //     ],
        // },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./../pages/AboutPage.vue'),
        },
    ],
});

export default router;
