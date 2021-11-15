<template>
    <div>
        <v-app light>
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant="miniVariant"
                fixed
                app
                right
            >
                <router-link
                    :to="{ name: 'home' }"
                    class="d-flex justify-center"
                >
                    <Logo class="mx-auto my-3" />
                </router-link>

                <v-list rounded>
                    <v-list-item-group color="primary">
                        <v-list-item
                            v-for="(item, i) in navItems"
                            :key="i"
                            :to="item.to"
                            exact-path
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.text"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar :clipped-left="clipped" fixed app flat>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
                <v-btn icon @click.stop="miniVariant = !miniVariant">
                    <v-icon
                        >mdi-{{
                            `chevron-${miniVariant ? "right" : "left"}`
                        }}</v-icon
                    >
                </v-btn>
                <v-spacer></v-spacer>
                <v-menu
                    offset-y
                    bottom
                    right
                    origin="center center"
                    transition="scale-transition"
                    :close-on-content-click="false"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-icon>mdi-account-circle</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <img :src="user.profile_src" alt="John" />
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>{{
                                        user.name
                                    }}</v-list-item-title>
                                    <v-list-item-subtitle>{{
                                        user.email
                                    }}</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-btn icon @click="logout">
                                        <v-icon>mdi-logout</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list>
                            <v-list-item>
                                <router-link
                                    class="grey--text"
                                    :to="{ name: 'profile' }"
                                >
                                    پروفایل
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link
                                    class="grey--text"
                                    :to="{ name: 'post-create' }"
                                >
                                    نوشتن پست جدید
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link
                                    class="grey--text"
                                    :to="{ name: 'my-post' }"
                                >
                                    پست ها و پیش نویس ها
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <router-link
                                    class="grey--text"
                                    :to="{ name: 'profile-setting' }"
                                >
                                    تنظیمات حساب کاربری
                                </router-link>
                            </v-list-item>
                            <v-list-item @click="changeTheme">
                                <div class="grey--text">حالت شب</div>
                                <v-spacer></v-spacer>
                                <v-switch
                                    v-model="$vuetify.theme.dark"
                                    inset
                                ></v-switch>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-app-bar>
            <v-main>
                <v-container>
                    <router-view />
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import Logo from "@/components/Logo/";
import { mapState } from "vuex";
export default {
    name: "AdminLayout",
    components: {
        Logo
    },
    data() {
        return {
            selectedItem: 0,
            clipped: false,
            drawer: true,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            navItems: [
                {
                    text: "داشبورد",
                    icon: "mdi-view-dashboard-outline",
                    to: { name: "admin-dashboard" }
                },
                {
                    text: "کاربران",
                    icon: "mdi-account-group-outline",
                    to: { name: "admin-users-index" }
                },
                {
                    text: "دسته بندی ها",
                    icon: "mdi-shape-outline",
                    to: { name: "admin-categories-index" }
                },

                {
                    text: "پست ها",
                    icon: "mdi-file-multiple-outline",
                    to: { name: "admin-posts-index" }
                },
                {
                    text: "پیش نویس ها",
                    icon: "mdi-file-multiple-outline",
                    to: { name: "admin-drafts-index" }
                },
                {
                    text: "نظرات",
                    icon: "mdi-comment-text-multiple-outline",
                    to: { name: "admin-comments-index" }
                }
            ]
        };
    },
    computed: {
        ...mapState({
            auth: state => state.user.isLoggedIn,
            user: state => state.user.user
        })
    },

    methods: {
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.$vuetify.theme.dark
                ? localStorage.setItem("isDark", 1)
                : localStorage.removeItem("isDark");
        },
        logout() {
            this.$store
                .dispatch("user/logout")
                .then(() => this.$router.push({ name: "home" }));
        }
    }
};
</script>
