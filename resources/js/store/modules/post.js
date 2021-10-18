import axios from "axios"

export const namespaced = true

export const state = () => ({
    post: null,
    posts: null,
    posts_count: null
})

export const getters = {

}

export const mutations = {
    SET_POST(state, data) {
        state.post = data
    },
    SET_ALL_POSTS(state, data) {
        state.posts = data
    },
    SET_POSTS_COUNT(state, data) {
        state.posts_count = data
    },
    DELETE_POST(state, index) {
        state.posts.splice(index, 1)
        state.posts_count--
    }
}

export const actions = {


    async savePost({ commit }, payload) {
        let response = await axios.post('/api/posts', payload)

        commit('SET_POST', response.data.data)

        return response

    },

    async editPost({ commit }, payload) {
        let response = await axios.patch(`/api/post/${payload.slug}`, payload)

        commit('SET_POST', response.data.data)

        return response

    },
    async fetchPosts({ commit, state }) {
        if (!state.posts) {
            let { data } = await axios.post('/api/posts/all-posts')
            commit('SET_ALL_POSTS', data.data)
        }

    },

    updatePost({ commit }, { title, content, slug }) {

        const data = { title, content };

        commit('SET_POST', data)

        return axios.patch(`/api/post/${slug}/edit`, data);
    },
    async deletePost({ commit }, { index, slug }) {
        await axios.delete(`/api/posts/${slug}`)
        commit('DELETE_POST', index)
    }


}