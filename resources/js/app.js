require('./bootstrap');

import Vue from 'vue'
import vuetify from "@/plugins/vuetify";
import router from "@/router";
// import "../sass/_variables.scss"

const app = new Vue({
    el: '#app',
    vuetify,
    router,
});
