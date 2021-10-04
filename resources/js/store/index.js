import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: window.user,
        isLoggedIn: !!window.user
    },
    mutations: {
        LOGOUT(state) {
            state.isLoggedIn = false
            state.user = null
        }
    },
    actions: {
        logout({commit}) {
            axios.post('/logout')
                .then(() => {
                    commit('LOGOUT')
                })
        }
    }
})
export default store


