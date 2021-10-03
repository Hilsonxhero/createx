<template>
    <div>
        <navbar @show-nav="drawer = true"></navbar>
        <navbar-drawer :drawer="drawer"></navbar-drawer>
        <router-view></router-view>
    </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import NavbarDrawer from "@/components/NavbarDrawer";
export default {
    name: "App",
    data: () => ({
        drawer: false,
    }),
    components: {NavbarDrawer, Navbar},
}
</script>

<style scoped>

</style>
