<template>
    <v-list>
        <v-subheader class="subtitle font-weight-bold">محبوب ترین ها</v-subheader>
        <v-list-item-group>
            <v-list-item v-for="(post,index) in posts" :key="index">
                <v-list-item-icon>
                    <v-avatar>
                        <v-img
                            :src="post.user_profile_src"></v-img>
                    </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                    <router-link :to="{name : 'post-show',params : {slug : post.slug}}"
                                 class="body-2 d-inline-block text-truncate"
                                 style="max-width: 240px">{{ post.title }}
                    </router-link>
                    <div class="caption">{{ post.user_name }}</div>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
import {ref} from '@vue/composition-api'

export default {
    name: "PopularPosts",
    setup() {
        const posts = ref({})
        // created hook

        axios.get('/api/trending-posts')
            .then(({data}) => {
                posts.value = data.posts
            })
        return {
            posts
        }
    }
}
</script>

<style scoped>

</style>
