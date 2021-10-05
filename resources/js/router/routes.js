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
        name : 'register',
        meta : {
            guest : true
        }

    },
    {
        path : '/login',
        component : require('@/views/Auth/Login.vue/').default,
        name : 'login',
        meta : {
            guest : true
        }

    },

    {
        path : '/auth/verify',
        component : require('@/views/Auth/Verify.vue/').default,
        name : 'auth-verify',
        meta : {
            auth : true
        }

    },
    {
        path : '/reset/password',
        component : require('@/views/Auth/ResetEmailPassword.vue/').default,
        name : 'reset-email-password',
        meta : {
            guest : true
        }

    },
    {
        path : '/reset/password/:token',
        component : require('@/views/Auth/ResetPassword.vue/').default,
        name : 'reset-password',
        meta : {
            guest : true
        }

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
