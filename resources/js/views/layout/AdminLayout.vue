<template>
<div>
    <v-app light>
        <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app right>
            <router-link :to="{name : 'Home'}" class="d-flex justify-center">
                <Logo class="mx-auto my-3" />
            </router-link>

            <v-list rounded>

                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in navItems" :key="i">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>


        </v-navigation-drawer>
        <v-app-bar :clipped-left="clipped" fixed app flat>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
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
                    text: 'داشبورد',
                    icon: 'mdi-view-dashboard-outline'
                },
                 {
                    text: 'کاربران',
                    icon: 'mdi-account-group-outline'
                },
                {
                    text: 'دسته بندی ها',
                    icon: 'mdi-shape-outline'
                },

            ],
        }
    },
}
</script>

<style>
/*.v-application {*/
/*    font-family: IRANSans,sans-serif !important;*/
/*}*/
</style>
