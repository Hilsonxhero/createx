import axios from "axios"

export const namespaced = true

export const state = () => ({
    draft: null,
    drafts: {},
    drafts_count: null
})

export const getters = {

}

export const mutations = {
    SET_DRAFT(state, data) {
        state.draft = data
    },
    SET_ALL_DRAFTS(state, data) {
        state.drafts = data
    },
    SET_DRAFTS_COUNT(state, data) {
        state.drafts_count = data
    },
    DELETE_DRAFT(state, index) {
        state.drafts.splice(index, 1)
        state.drafts_count--
    }
}

export const actions = {

    saveDraft({ commit }, {
        requestType,
        requestUrl,
        title,
        content
    }) {

        const data = { title, content }
        commit('SET_DRAFT', data)
        return axios[requestType](requestUrl, data)
    },

    async getDraft({ commit, state }, link) {
        if (state.draft == null) {
            let response = await axios.get(`/api/drafts/${link}`)
            const data = {
                title: response.data.title,
                content: response.data.content
            }
            commit('SET_DRAFT', data)
        }

        return state.draft
        i
    },
    async fetchDrafts({ commit, state }) {
        if (!state.draft) {
            let { data } = await axios.post('/api/posts/all-drafts')
            commit('SET_ALL_DRAFTS', data.data)
            commit('SET_DRAFTS_COUNT', data.drafts_count)
            commit('post/SET_POSTS_COUNT', data.posts_count, { root: true })
        }

    },
    async deleteDraft({ commit }, { index, link }) {
        await axios.delete(`/api/drafts/${link}`)
        commit('DELETE_DRAFT', index)
    }

}