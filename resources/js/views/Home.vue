<template>
    <div>
        <v-main>
            <v-container>
                <v-row>
                    <v-col :cols="post.col" v-for="(post,index) in posts2" :key="index">
                        <related-post :data="post"></related-post>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row class="mt-5">
                    <v-col cols="12" md="8">
                        <new-post v-for="(post,index) in posts.data" :key="index" :data="post"></new-post>
                    </v-col>
                    <v-col cols="4" class="hidden-sm-and-down">
                        <v-banner sticky>
                            <v-list>
                                <v-subheader class="subtitle font-weight-bold">محبوب ترین ها</v-subheader>
                                <v-list-item-group>
                                    <popular-posts v-for="item in 5" :key="item"></popular-posts>
                                </v-list-item-group>
                            </v-list>
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>

import RelatedPost from "@/components/posts/RelatedPost";
import NewPost from "@/components/posts/NewPost";
import PopularPosts from "@/components/posts/PopularPosts";
import {ref} from '@vue/composition-api'

export default {
    name: "Home",
    components: {PopularPosts, NewPost, RelatedPost},
    setup() {
        const drawer = ref(false)
        const posts = ref({})
        const posts2 = ref([
            {
                col: 8,
                title: 'چگونه یک VC را هک* کنیم؟',
                img: 'https://files.virgool.io/upload/users/14/posts/yfbjecf42pmt/3kjsjjkozttm.jpeg?x-img=v1/resize,w_700/optimize,q_100',
                user: {
                    username: 'امیر',
                    avatar: 'https://files.virgool.io/upload/users/14/avatar/avatar.png?x-img=v1/resize,h_120,w_120/optimize,q_100'
                },
                created_at: " روز پیش"
            },
            {
                col: 4,
                title: 'چگونه یک VC را هک* کنیم؟',
                img: 'https://files.virgool.io/upload/users/4227/posts/finsbhznp9bq/y970ad2dusw9.jpeg?x-img=v1/resize,w_700/optimize,q_100',
                user: {
                    username: 'امیر',
                    avatar: 'https://files.virgool.io/upload/users/14/avatar/avatar.png?x-img=v1/resize,h_120,w_120/optimize,q_100'
                },
                created_at: " روز پیش"
            },
            {
                col: 4,
                title: 'چگونه یک VC را هک* کنیم؟',
                img: 'https://files.virgool.io/upload/users/7316/posts/ukvkrbod5b7m/ao6qhcekiojh.jpeg?x-img=v1/resize,w_700/optimize,q_100',
                user: {
                    username: 'امیر',
                    avatar: 'https://files.virgool.io/upload/users/14/avatar/avatar.png?x-img=v1/resize,h_120,w_120/optimize,q_100'
                },
                created_at: " روز پیش"
            },
            {
                col: 8,
                title: 'چگونه یک VC را هک* کنیم؟',
                img: 'https://files.virgool.io/upload/users/66869/posts/nmahvslnq6uw/8pso7fhsvxv1.jpeg?x-img=v1/resize,w_700/optimize,q_100',
                user: {
                    username: 'امیر',
                    avatar: 'https://files.virgool.io/upload/users/14/avatar/avatar.png?x-img=v1/resize,h_120,w_120/optimize,q_100'
                },
                created_at: " روز پیش"
            }
        ])

        // created hook

        axios.get('/api/home')
        .then(({data})=>{
            posts.value = data.posts
        })

        return {
            drawer,
            posts,
            posts2
        }
    },


}
</script>

<style>

</style>
