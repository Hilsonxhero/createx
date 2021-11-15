export default [
    {
        path: "/dashboard",
        component: require("@/views/layout/AdminLayout.vue/").default,
        meta: {
            auth: true,
            verified: true
        },
        children: [
            {
                path: "",
                component: require("@/views/Admin/Dashboard.vue/").default,
                name: "admin-dashboard"
            },
            {
                path: "/dashboard/users",
                component: require("@/views/Admin/User/Users.vue/").default,
                name: "admin-users-index"
            },
            {
                path: "/dashboard/users/create",
                component: require("@/views/Admin/User/Create.vue/").default,
                name: "admin-users-create"
            },
            {
                path: "/dashboard/users/edit/:id",
                component: require("@/views/Admin/User/Edit.vue/").default,
                name: "admin-users-edit"
            },
            {
                path: "/dashboard/categories",
                component: require("@/views/Admin/Category/Index.vue/").default,
                name: "admin-categories-index"
            },

            {
                path: "/dashboard/categories/create",
                component: require("@/views/Admin/Category/Create.vue/")
                    .default,
                name: "admin-categories-create"
            },
            {
                path: "/dashboard/categories/edit/:id",
                component: require("@/views/Admin/Category/Edit.vue/").default,
                name: "admin-categories-edit"
            },

            {
                path: "/dashboard/posts",
                component: require("@/views/Admin/Post/Index.vue/").default,
                name: "admin-posts-index"
            },
            {
                path: "/dashboard/posts/edit/:id",
                component: require("@/views/Admin/Post/Edit.vue/").default,
                name: "admin-posts-edit"
            },

            {
                path: "/dashboard/drafts",
                component: require("@/views/Admin/Draft/Index.vue/").default,
                name: "admin-drafts-index"
            },
            {
                path: "/dashboard/comments",
                component: require("@/views/Admin/Comment/Index.vue/").default,
                name: "admin-comments-index"
            }
        ]
    },

    {
        path: "/",
        component: () =>
            import(
                /* webpackChunkName: "AppLayout" */ "@/views/layout/App.vue"
            ),
        children: [
            {
                path: "",
                component: () =>
                    import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
                name: "home"
            },
            {
                path: "/posts/:slug",
                component: () =>
                    import(
                        /* webpackChunkName: "PostShow" */ "@/views/Post/Index.vue"
                    ),
                name: "post-show"
            },
            {
                path: "/post/draft",
                component: () =>
                    import(
                        /* webpackChunkName: "MyPost" */ "@/views/Post/MyPosts.vue"
                    ),
                name: "my-post"
            },
            {
                path: "/drafts/:link",
                component: () =>
                    import(
                        /* webpackChunkName: "UpdateDraft" */ "@/views/Post/Create.vue"
                    ),
                name: "update-draft",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/drafts/:link/save",
                component: () =>
                    import(
                        /* webpackChunkName: "SavePost" */ "@/views/Post/SavePost.vue"
                    ),
                name: "save-post",
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: "/post/create",
                component: () =>
                    import(
                        /* webpackChunkName: "PostCreate" */ "@/views/Post/Create.vue"
                    ),

                name: "post-create",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/post/:slug/edit",
                component: () =>
                    import(
                        /* webpackChunkName: "PostEdit" */ "@/views/Post/Edit.vue"
                    ),

                name: "edit-post",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/post/:slug/update",
                component: () =>
                    import(
                        /* webpackChunkName: "UpdatePost" */ "@/views/Post/UpdatePost.vue"
                    ),

                name: "update-post",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/posts/category/:slug",
                component: () =>
                    import(
                        /* webpackChunkName: "PostCategory" */ "@/views/Post/PostCategory.vue"
                    ),

                name: "post-category"
            },

            {
                path: "/profile",
                component: () =>
                    import(
                        /* webpackChunkName: "Profile" */ "@/views/User/Profile.vue"
                    ),
                name: "profile",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/@:username",
                component: () =>
                    import(
                        /* webpackChunkName: "UserPosts" */ "@/views/User/UserPosts.vue"
                    ),
                name: "user-posts"
            },

            {
                path: "/me/setting",
                component: () =>
                    import(
                        /* webpackChunkName: "ProfileSetting" */ "@/views/User/Setting.vue"
                    ),

                name: "profile-setting",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/me/bookmarks",
                component: () =>
                    import(
                        /* webpackChunkName: "UserBookMarks" */ "@/views/User/UserBookmarkedPost.vue"
                    ),

                name: "user-bookmarks",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/me/likes",
                component: () =>
                    import(
                        /* webpackChunkName: "UserLikes" */ "@/views/User/UserLikedPost.vue"
                    ),

                name: "user-likes",
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: "/search/:type",
                component: () =>
                    import(
                        /* webpackChunkName: "Search" */ "@/views/Search/Index.vue"
                    ),

                name: "search"
            }
        ]
    },

    {
        path: "/register",
        component: () =>
            import(
                /* webpackChunkName: "Register" */ "@/views/Auth/Register.vue"
            ),

        name: "register",
        meta: {
            guest: true
        }
    },
    {
        path: "/login",
        component: () =>
            import(/* webpackChunkName: "Login" */ "@/views/Auth/Login.vue"),
        name: "login",
        meta: {
            guest: true
        }
    },

    {
        path: "/auth/verify",
        component: () =>
            import(
                /* webpackChunkName: "AuthVerify" */ "@/views/Auth/Verify.vue/"
            ),

        name: "auth-verify",
        meta: {
            auth: true
        }
    },
    {
        path: "/reset/password",
        component: () =>
            import(
                /* webpackChunkName: "ResetEmailPassword" */ "@/views/Auth/ResetEmailPassword.vue"
            ),

        name: "reset-email-password",
        meta: {
            guest: true
        }
    },
    {
        path: "/reset/password/:token",
        component: () =>
            import(
                /* webpackChunkName: "ResetPassword" */ "@/views/Auth/ResetPassword.vue/"
            ),

        name: "reset-password",
        meta: {
            guest: true
        }
    },
    {
        path: "/403",
        component: () =>
            import(/* webpackChunkName: "403" */ "@/views/pages/AccessDenied/")
    },
    {
        path: "/404",
        component: () =>
            import(/* webpackChunkName: "404" */ "@/views/pages/NotFound/"),
        name: "not-found"
    },
    {
        path: "/:match(.*)",
        redirect: "/404"
    }
];
