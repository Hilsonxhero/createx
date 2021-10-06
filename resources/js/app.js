require('./bootstrap');

import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from '@/store'


const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store
});
