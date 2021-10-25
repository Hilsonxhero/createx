<template>
    <v-container v-if="posts">
        <v-row class="justify-center">
            <v-col cols="8">
                <div>
                    <h1 class="my-15">پست‌های مورد علاقه</h1>
                    <liked-posts v-for="(post,index) in posts.data" :key="index" :data="post"></liked-posts>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {ref} from '@vue/composition-api'
import LikedPosts from "../../components/posts/LikedPosts";

export default {
    name: "UserLikedPost",
    components: {LikedPosts},
    setup() {
        const posts = ref(null)
        const user = ref(null)

        // created hook
        axios.get(`/api/liked-posts`)
            .then(({data}) => {
                posts.value = data.posts
                user.value = data.user
            })

        return {
            posts,
            user
        }
    }
}
</script>

<style scoped>

</style>
