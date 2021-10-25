<template>
    <v-navigation-drawer
        app
        temporary
        left
        :value="value"
        @input="changeDrawer"
        :close-on-content-click="false"

    >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                active-class="deep-purple--text text--accent-4"
            >
                <v-list-item v-for="(item,index) in $store.state.notifications.notifications" :key="index">
                    <a :href="item.data.link" @click.prevent="readNotification(item)">{{ item.data.text }}</a>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name: "NotificationDrawer",
    props: ['value'],
    data: () => ({
    }),
    created() {
        this.$store.dispatch('notifications/getNotification')
    },
    methods: {
        changeDrawer(event) {
            this.$emit('input', event)
        },
        readNotification(notification) {
            axios.patch(`/api/user/notification/${notification.id}`)
                .then(() => {
                    this.$router.push(notification.data.link)
                })
        }
    },

}
</script>

<style scoped>

</style>
