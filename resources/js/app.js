require("./bootstrap");

import Vue from "vue";
// import Vue from "vue/dist/vue.common.js";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";
import VueMeta from "vue-meta";
import VueClipboard from "vue-clipboard2";

Vue.use(VueMeta);

Vue.use(VueClipboard);

const app = new Vue({
    el: "#app",
    vuetify,
    router,
    store
});
