import axios from "axios";

export const namespaced = true
export const state = () => ({
    user: window.user,
    isLoggedIn: !!window.user,
})
export const mutations = {
    LOGOUT(state) {
        state.isLoggedIn = false
        state.user = null
    },

    LOGIN(state, payload) {
        state.isLoggedIn = true
        state.user = {
            name: payload.name,
            email: payload.email,
            isVerified: payload.email_verified_at == null ? 1 : 2,
        }
    },

    REGISTER(state, payload) {
        state.isLoggedIn = true
        state.user = {
            name: payload.name,
            email: payload.email,
            isVerified: 1
        }
    },
    RESET_PASSWORD(state, payload) {
        state.isLoggedIn = true
        state.user = {
            name: payload.name,
            email: payload.email,
            isVerified: 1
        }
    },
    UPDATE_PROFILE(state, payload) {
        state.user = {
            name: payload.name,
            email: payload.email,
            username: payload.username,
            phone: payload.phone,
        }
    }
}
export const actions = {
    logout({ commit }) {
        return axios.post('/logout')
            .then(() => {
                commit('LOGOUT')
            })
    },
    login({ commit }, payload) {
        return axios.post('/login', payload)
            .then(({ data }) => {
                commit('LOGIN', data.data)
            })
    },
    register({ commit }, payload) {
        return axios.post('/register', payload)
            .then(({ data }) => {
                commit('REGISTER', data.data)
            })
    },
    resetPassword({ commit }, payload) {
        return axios.post('/api/reset-password', payload)

    },
    resendVerifyEmail({ commit }) {
        return axios.post('/api/email/verification-notification')
    },
    updateProfile({ commit }, payload) {
        commit('UPDATE_PROFILE', payload)
    }
}