import { ref, reactive, computed, toRefs } from '@vue/composition-api'
import store from '@/store'

export default function DraftModule() {
    const data = reactive({
        deleteDialogPost: false,
        deletablePost: {}

    })

    const openDeletePostDialog = (index, slug) => {
        data.deleteDialogPost = true
        data.deletablePost = { index, slug }
    }



    const deletePost = () => {
        store.dispatch('post/deletePost', data.deletablePost)
            .then(() => {
                cancelDeletePost()
            })

    }


    const cancelDeletePost = () => {
        data.deleteDialogPost = false
        data.deletablePost = {}
    }

    const fetchAllPosts = () => {
        store.dispatch('post/fetchPosts')
    }



    return {
        posts: computed(() => store.state.post.posts),
        posts_count: computed(() => store.state.post.posts_count),
        ...toRefs(data),
        openDeletePostDialog,
        deletePost,
        cancelDeletePost,
        fetchAllPosts
    }
}