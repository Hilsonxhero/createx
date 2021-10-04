require('./bootstrap');

import Vue from 'vue'
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from '@/store'


const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store
});
