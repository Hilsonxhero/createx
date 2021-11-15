<template>
    <div class="d-flex mb-10" v-if="post.user">
        <div class="w-100">
            <h3 v-html="post.title"></h3>
            <p class="body-2 grey--text my-4" v-html="post.dec"></p>
            <div class="d-flex flex-row align-center">
                <div>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img :src="post.user.profile_src"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="body-2 dark--text font-weight-bold">
                                {{ post.user.name }}
                            </div>
                            <div class="caption grey--text">
                                {{ post.created_at }}
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <v-spacer></v-spacer>
                <v-btn icon @click="likePost">
                    <v-icon :class="{ 'red--text': post.is_liked }">
                        {{
                            post.is_liked ? " mdi-heart" : " mdi-heart-outline"
                        }}
                    </v-icon>
                </v-btn>
            </div>
        </div>
        <div class="mr-7">
            <v-avatar class="profile" color="grey" size="144" tile>
                <v-img :src="post.banner_src"></v-img>
            </v-avatar>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
    name: "likedPosts",
    props: ["data"],
    setup(props, { emit, root }) {
        const post = ref({});

        const likePost = () => {
            // props.data.is_liked = !props.data.is_liked
            // let reqType = props.data.is_liked ? 'post' : 'delete'
            // axios[reqType](`/api/likes/${props.data.slug}`)
            //     .then(() => {
            //         props.data.is_liked ? props.data.likes_count++ : props.data.likes_count--
            //     })
        };

        post.value = props.data;

        return {
            likePost,
            post
        };
    }
};
</script>
