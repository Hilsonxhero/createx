<template>

    <v-app-bar color="#fff"
               flat
               :height="$vuetify.breakpoint.smAndDown ? 80  : 160"
    >
        <v-container fluid class="pa-0">
            <v-row>
                <v-container>
                    <v-row align="center">
                        <v-col cols="auto d-flex">
                            <Logo />
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
                                        <router-link :to="item.to"  :class="item.class">{{ item.text }}</router-link>
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
export default {
    name: "Navbar",
    components: {Logo},
    data: () => ({
        search: false,
        items: [
            {
                text: 'جدیدترین پست‌ها',
                class: 'blue--text text--lighten-4',
                to: '/'
            },
            {
                text: 'پست‌های دوستان',
                class: 'blue--text text--lighten-4',
                to: '/'
            },
            {
                text: 'استارتاپ',
                class: 'blue--text text--lighten-4',
                to: '/'
            },
            {
                text: 'دلنوشته',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
            {
                text: 'زندگی',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
            {
                text: 'کتاب',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
            {
                text: 'برنامه نویسی',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
            {
                text: 'روانشناسی',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
            {
                text: 'حال خوبتو',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
            {
                text: 'با من تقسیم کن',
                class: 'blue--text  text--lighten-4',
                to: '/'
            },
        ]
    })
}
</script>

<style lang="scss">
.t-header-link-hui a{
    transition: color 250ms ease-in;
}
.t-header-link-hui a.blue--text.text--lighten-4:hover,.t-header-link-hui a.white--text:hover{
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
