<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="8">
                <div class="d-flex">
                    <div>
                        <h4 class="grey--text mb-3">پست‌های مرتبط با</h4>
                        <h2>{{ category.title }}</h2>
                    </div>
                    <v-spacer></v-spacer>
                    <h3 class="font-weight-light">تعداد کل پست‌ها: {{ category.posts_count }}</h3>
                </div>
                <div class="mt-15">
                    <new-post v-for="(item,index) in posts.data" :key="index" :data="item"></new-post>
                </div>

                <v-btn class="mt-10" @click="fetchNextPosts" v-if="!! posts.next_page_url">
                    مشاهده بیشتر
                </v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {ref} from '@vue/composition-api'
import NewPost from "../../components/posts/NewPost";

export default {
    name: "PostCategory",
    components: {NewPost},
    setup(porps, {emit, root}) {
        const posts = ref({})
        const category = ref({})

        // created hook
        axios.get(`/api/posts/category/${root.$route.params.slug}`)
            .then(({data}) => {
                posts.value = data.posts
                category.value = data.category
            })

        const fetchNextPosts = () => {
            axios.get(posts.value.next_page_url)
                .then(({data}) => {
                    posts.value.data.push(...data.posts.data)
                    posts.value.next_page_url = data.posts.next_page_url
                })
        }

        return {
            posts,
            category,
            fetchNextPosts
        }
    }
}
</script>

<style scoped>

</style>
