<template>
    <div>
        <verify-banner></verify-banner>
        <navbar @show-nav="drawer = true"></navbar>
        <navbar-drawer v-model="drawer"></navbar-drawer>
        <router-view></router-view>
    </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import NavbarDrawer from "@/components/NavbarDrawer";
import VerifyBanner from "../../components/VerifyBanner";
export default {
    name: "App",
    data: () => ({
        drawer: false,
    }),
    components: {VerifyBanner, NavbarDrawer, Navbar},
}
</script>

<style scoped>

</style>
