import axios from "axios"

export const namespaced = true

export const state = () => ({
    categories: [],
})

export const getters = {}

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    }
}

export const actions = {

    async getNavbarCategories({commit, state}) {
        if (state.categories.length === 0) {
            let response = await axios.get('/api/navbar/categories')
            commit('SET_CATEGORIES', response.data.data)
            return
        }
    },


}
