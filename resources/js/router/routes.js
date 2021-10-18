export default [

    {
        path: '/dashboard',
        component: require('@/views/layout/AdminLayout.vue/').default,
        children: [{
            path: '',
            component: require('@/views/Admin/Dashboard.vue/').default,
            name: 'dashboard'

        }, ]

    },

    {
        path: '/',
        component: require('@/views/layout/App.vue').default,
        children: [{
                path: '',
                component: require('@/views/Home.vue').default,
                name: 'home'

            },
            {
                path: '/posts/:slug',
                component: require('@/views/Post/Index.vue').default,
                name: 'post-show'

            },
            {
                path: '/post/draft',
                component: require('@/views/Post/MyPosts.vue').default,
                name: 'my-post'

            },
            {
                path: '/drafts/:link',
                component: require('@/views/Post/Create.vue').default,
                name: 'update-draft',
                meta: {
                    auth: true,
                    verified: true
                }

            },

            {
                path: '/drafts/:link/save',
                component: require('@/views/Post/SavePost.vue').default,
                name: 'save-post',
                meta: {
                    auth: true,
                    verified: true
                }

            },
            {
                path: '/post/create',
                component: require('@/views/Post/Create.vue').default,
                name: 'post-create',
                meta: {
                    auth: true,
                    verified: true
                }

            },

            {
                path: '/post/:slug/edit',
                component: require('@/views/Post/Edit.vue').default,
                name: 'edit-post',
                meta: {
                    auth: true,
                    verified: true
                }

            },

            {
                path: '/post/:slug/update',
                component: require('@/views/Post/UpdatePost.vue').default,
                name: 'update-post',
                meta: {
                    auth: true,
                    verified: true
                }

            },



            {
                path: '/profile',
                component: require('@/views/User/Profile.vue').default,
                name: 'profile',
                meta: {
                    auth: true,
                    verified: true
                }

            },

            {
                path: '/me/setting',
                component: require('@/views/User/Setting.vue').default,
                name: 'profile-setting',
                meta: {
                    auth: true,
                    verified: true
                }

            },
        ]

    },

    {
        path: '/register',
        component: require('@/views/Auth/Register.vue/').default,
        name: 'register',
        meta: {
            guest: true
        }

    }, {
        path: '/login',
        component: require('@/views/Auth/Login.vue/').default,
        name: 'login',
        meta: {
            guest: true
        }

    },

    {
        path: '/auth/verify',
        component: require('@/views/Auth/Verify.vue/').default,
        name: 'auth-verify',
        meta: {
            auth: true
        }

    }, {
        path: '/reset/password',
        component: require('@/views/Auth/ResetEmailPassword.vue/').default,
        name: 'reset-email-password',
        meta: {
            guest: true
        }

    }, {
        path: '/reset/password/:token',
        component: require('@/views/Auth/ResetPassword.vue/').default,
        name: 'reset-password',
        meta: {
            guest: true
        }

    }, {
        path: '/403',
        component: () =>
            import ( /* webpackChunkName: "403" */ '@/views/pages/AccessDenied/'),
    }, {
        path: '/404',
        component: () =>
            import ( /* webpackChunkName: "404" */ '@/views/pages/NotFound/'),
        name: 'not-found'
    }, {
        path: '/:match(.*)',
        redirect: '/404'
    }
]