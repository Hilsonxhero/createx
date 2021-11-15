import Vue from "vue";
import Vuex from "vuex";

import * as user from "@/store/modules/user/";
import * as draft from "@/store/modules/draft.js/";
import * as post from "@/store/modules/post.js/";
import * as category from "@/store/modules/category.js/";
import * as notifications from "@/store/modules/notifications.js/";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user,
        draft,
        post,
        category,
        notifications
    }
});
export default store;
