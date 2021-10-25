<template>
    <div>
        <verify-banner></verify-banner>
        <navbar @show-nav="drawer = true" @show-notification="showNotification = true"></navbar>
        <navbar-drawer v-model="drawer"></navbar-drawer>
        <notification-drawer v-model="showNotification"></notification-drawer>
        <router-view></router-view>
    </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import NavbarDrawer from "@/components/NavbarDrawer";
import VerifyBanner from "../../components/VerifyBanner";
import NotificationDrawer from "../../components/NotificationDrawer";
export default {
    name: "App",
    data: () => ({
        drawer: false,
        showNotification : false
    }),
    components: {NotificationDrawer, VerifyBanner, NavbarDrawer, Navbar},
}
</script>

<style scoped>

</style>
