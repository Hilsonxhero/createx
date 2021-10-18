import Vue from 'vue'
import Vuex from 'vuex'

import * as user from '@/store/modules/user/'
import * as draft from '@/store/modules/draft.js'
import * as post from '@/store/modules/post.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        draft,
        post
    }


})
export default store