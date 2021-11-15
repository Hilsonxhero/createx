<template>
    <v-app-bar flat :height="$vuetify.breakpoint.smAndDown ? 80 : 160">
        <v-container fluid class="pa-0">
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto d-flex">
                            <Logo />
                            <v-app-bar-nav-icon
                                class="hidden-md-and-up"
                                @click="$emit('show-nav')"
                            ></v-app-bar-nav-icon>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <v-btn icon @click="$emit('show-notification')">
                                <v-icon>mdi-bell</v-icon>
                            </v-btn>
                            <v-menu
                                v-model="search"
                                :close-on-content-click="false"
                                absolute
                                top
                                min-width="100%"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn icon @click="search = true">
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                </template>
                                <v-list class="d-flex flex-row align-center">
                                    <v-text-field
                                        class="mr-10"
                                        placeholder="در بین مقالات، نویسندگان و… جستجو کنید"
                                        v-model="form"
                                        @keyup.enter="pushToSearch"
                                    ></v-text-field>
                                    <v-btn
                                        class="ml-10 title"
                                        text
                                        large
                                        @click="search = false"
                                        >x
                                    </v-btn>
                                </v-list>
                            </v-menu>
                            <template v-if="!auth">
                                <v-btn
                                    text
                                    small
                                    color="primary"
                                    router
                                    :to="{ name: 'login' }"
                                    >ورود
                                </v-btn>
                                <span>/</span>
                                <v-btn
                                    text
                                    small
                                    color="primary"
                                    router
                                    :to="{ name: 'register' }"
                                    >ثبت نام
                                </v-btn>
                            </template>
                            <template v-else>
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
                                                    <img
                                                        :src="user.profile_src"
                                                        alt="John"
                                                    />
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
                                                        <v-icon
                                                            >mdi-logout</v-icon
                                                        >
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
                                                    :to="{
                                                        name: 'post-create'
                                                    }"
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
                                                    :to="{ name: 'user-likes' }"
                                                >
                                                    پست های مورد علاقه
                                                </router-link>
                                            </v-list-item>
                                            <v-list-item>
                                                <router-link
                                                    class="grey--text"
                                                    :to="{
                                                        name: 'user-bookmarks'
                                                    }"
                                                >
                                                    پست های ذخیره شده
                                                </router-link>
                                            </v-list-item>
                                            <v-list-item>
                                                <router-link
                                                    class="grey--text"
                                                    :to="{
                                                        name: 'profile-setting'
                                                    }"
                                                >
                                                    تنظیمات حساب کاربری
                                                </router-link>
                                            </v-list-item>
                                            <v-list-item @click="changeTheme">
                                                <div class="grey--text">
                                                    حالت شب
                                                </div>
                                                <v-spacer></v-spacer>
                                                <v-switch
                                                    v-model="
                                                        $vuetify.theme.dark
                                                    "
                                                    inset
                                                ></v-switch>
                                            </v-list-item>
                                        </v-list>
                                    </v-card>
                                </v-menu>
                            </template>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
            <v-row class="blue darken-2 d-none d-md-block">
                <v-col cols="12">
                    <v-container class="py-0">
                        <v-row>
                            <v-col cols="12" class="py-5 d-flex">
                                <div
                                    class="body-2 ml-4 t-header-link-hui"
                                    v-for="(category, index) in $store.state
                                        .category.categories"
                                    :key="index"
                                >
                                    <router-link
                                        :to="{
                                            name: 'post-category',
                                            params: { slug: category.slug }
                                        }"
                                        class="white--text"
                                        >{{ category.title }}
                                    </router-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import Logo from "./Logo";
import { mapState, mapActions } from "vuex";

export default {
    name: "Navbar",
    components: { Logo },
    data: () => ({
        search: false,
        form: null
    }),
    computed: {
        ...mapState({
            auth: state => state.user.isLoggedIn,
            user: state => state.user.user
        }),

        switchTheme: {
            get: function() {
                return this.$vuetify.theme.dark;
            },

            set: function(newValue) {
                return (this.$vuetify.theme.dark = newValue);
            }
        }
    },

    methods: {
        logout() {
            this.$store
                .dispatch("user/logout")
                .then(() => this.$router.push({ name: "home" }));
        },

        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.$vuetify.theme.dark
                ? localStorage.setItem("isDark", 1)
                : localStorage.removeItem("isDark");
        },
        pushToSearch() {
            this.$router.push({
                name: "search",
                params: { type: "posts" },
                query: { q: this.form }
            });
        }
    },

    created() {
        this.$store.dispatch("category/getNavbarCategories");
    }
};
</script>
