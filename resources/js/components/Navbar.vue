<template>

    <v-app-bar
        flat
        :height="$vuetify.breakpoint.smAndDown ? 80  : 160"
    >
        <v-container fluid class="pa-0">
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto d-flex">
                            <Logo/>
                            <v-app-bar-nav-icon class="hidden-md-and-up"
                                                @click="$emit('show-nav')"></v-app-bar-nav-icon>

                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="auto">
                            <v-menu v-model="search"
                                    :close-on-content-click="false"
                                    absolute
                                    top
                                    min-width="100%"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn text @click="search = true">
                                        <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                </template>
                                <v-list class="d-flex flex-row align-center">
                                    <v-text-field class="mr-10"
                                                  placeholder="در بین مقالات، نویسندگان و… جستجو کنید"
                                    ></v-text-field>
                                    <v-btn class="ml-10 title"
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
                                    :to="{name: 'login'}"
                                >ورود
                                </v-btn>
                                <span>/</span>
                                <v-btn
                                    text
                                    small
                                    color="primary"
                                    router
                                    :to="{name: 'register'}"
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
                                    <template v-slot:activator="{on}">
                                        <v-btn
                                            v-on="on"
                                            icon
                                        >
                                            <v-icon>mdi-account-circle</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-avatar>
                                                    <img
                                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                        alt="John"
                                                    >
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{ user.name }}</v-list-item-title>
                                                    <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                                                </v-list-item-content>

                                                <v-list-item-action>
                                                    <v-btn
                                                        icon
                                                        @click="logout"
                                                    >
                                                        <v-icon>mdi-logout</v-icon>
                                                    </v-btn>
                                                </v-list-item-action>
                                            </v-list-item>
                                        </v-list>

                                        <v-divider></v-divider>

                                        <v-list>
                                            <v-list-item>
                                                <router-link :to="{name : 'home'}">
                                                    پروفایل
                                                </router-link>
                                            </v-list-item>
                                            <v-list-item @click="changeTheme">
                                                <div>حالت شب</div>
                                                <v-spacer></v-spacer>
                                                <v-switch

                                                    v-model="$vuetify.theme.dark"
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
                                <div class="body-2 ml-4 t-header-link-hui"
                                     v-for="item in items"
                                     :key="item.text"

                                >
                                    <router-link :to="{name : item.to}" :class="item.class">{{ item.text }}
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
import {mapState,mapActions} from 'vuex'

export default {
    name: "Navbar",
    components: {Logo},
    data: () => ({
        search: false,
        items: [
            {
                text: 'جدیدترین پست‌ها',
                class: 'blue--text text--lighten-4',
                to: 'home'
            },
            {
                text: 'پست‌های دوستان',
                class: 'blue--text text--lighten-4',
                to: 'home'
            },
            {
                text: 'استارتاپ',
                class: 'blue--text text--lighten-4',
                to: 'home'
            },
            {
                text: 'دلنوشته',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
            {
                text: 'زندگی',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
            {
                text: 'کتاب',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
            {
                text: 'برنامه نویسی',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
            {
                text: 'روانشناسی',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
            {
                text: 'حال خوبتو',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
            {
                text: 'با من تقسیم کن',
                class: 'blue--text  text--lighten-4',
                to: 'home'
            },
        ],


    }),
    computed: {
        ...mapState({
            auth: state => state.user.isLoggedIn,
            user: state => state.user.user
        }),

        switchTheme: {

            get: function () {
                return this.$vuetify.theme.dark

            },

            set: function (newValue) {
                return this.$vuetify.theme.dark = newValue
            }
        }

    },

    methods: {
        ...mapActions('user',['logout']),

        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            this.$vuetify.theme.dark ? localStorage.setItem('isDark', 1) : localStorage.removeItem('isDark')
        }
    }
}
</script>

<style lang="scss">
.t-header-link-hui a {
    transition: color 250ms ease-in;
}

.t-header-link-hui a.blue--text.text--lighten-4:hover, .t-header-link-hui a.white--text:hover {
    color: #ffffff !important;
}


ul li {
    list-style: none;
    margin-right: .8rem;
}

ul li:first-child {
    margin-right: unset;
}


</style>
