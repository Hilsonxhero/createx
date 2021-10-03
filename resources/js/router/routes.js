export default [
    {
        path : '/',
        component : require('@/views/layout/App.vue').default,
        children : [
            {
                path : '',
                component : require('@/views/Home.vue').default,
                name : 'home'

            },
            {
                path : '/post/:id',
                component : require('@/views/Post/Index.vue').default,
                name : 'post-index'

            },
            {
                path : '/posts/draft',
                component : require('@/views/Post/MyPosts.vue').default,
                name : 'my-post'

            },
        ]

    },

    {
        path : '/dashboard',
        component : require('@/views/layout/AdminLayout.vue/').default,
        children : [
            {
                path : '',
                component : require('@/views/Admin/Dashboard.vue/').default,
                name : 'dashboard'

            },
        ]

    },

    {
        path : '/register',
        component : require('@/views/Auth/Register.vue/').default,
        name : 'register'

    },
    {
        path : '/login',
        component : require('@/views/Auth/Login.vue/').default,
        name : 'login'

    },
    {
        path: '/403',
        component: () => import(/* webpackChunkName: "403" */ '@/views/pages/AccessDenied/'),
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '@/views/pages/NotFound/'),
    },
    {
        path: '/:match(.*)',
        redirect: '/404'
    }
]
