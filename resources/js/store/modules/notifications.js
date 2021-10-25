import axios from "axios"

export const namespaced = true

export const state = () => ({
    notifications: [],
})

export const getters = {}

export const mutations = {
    SET_NOTIFICATION(state, notifications) {
        state.notifications = notifications
    }
}

export const actions = {

    async getNotification({commit, state}) {
        if (state.notifications.length === 0) {
            let response = await axios.get('/api/user/notification')
            commit('SET_NOTIFICATION', response.data.data)
            return
        }
    },


}
