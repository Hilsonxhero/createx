<template>
    <router-link :to="{ name: 'home' }">
        <v-img max-width="100" src="/images/logo-dark.svg"></v-img>
    </router-link>
</template>

<script>
export default {
    name: "Logo"
};
</script>
