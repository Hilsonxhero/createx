<template>
    <v-system-bar height="50px" class="d-flex justify-center" v-if="user && user.isVerified == 1">
        <span>شما هنوز ایمیل خود را تایید نکرده اید</span>
        <v-btn text small outlined rounded class="mr-5" @click="resendEmail">ارسال مجدد ایمیل</v-btn>
    </v-system-bar>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "VerifyBanner",
    computed: {
        ...mapState('user',['user']),
    },
    methods: {
        resendEmail() {
            axios.post('/api/email/verification-notification')
        }
    }
}
</script>

<style scoped>

</style>
