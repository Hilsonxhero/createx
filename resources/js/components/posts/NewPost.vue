<template>
    <v-card flat class="mt-5">
        <div class="d-flex flex-row align-center p-3">
            <v-list-item class="pr-0">
                <router-link
                    :to="{
                        name: 'user-posts',
                        params: { username: data.user.username }
                    }"
                >
                    <v-list-item-avatar>
                        <v-img :src="data.user.profile_src"></v-img>
                    </v-list-item-avatar>
                </router-link>
                <v-list-item-content>
                    <v-list-item-title
                        class=""
                        v-html="data.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                        v-html="data.created_at"
                    ></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-spacer></v-spacer>
            <div class="gray--text body-2">ورزشی</div>
        </div>
        <router-link :to="{ name: 'post-show', params: { slug: data.slug } }">
            <v-img max-height="300" :src="data.banner_src"></v-img>
        </router-link>

        <v-card-text v-html="data.dec"> </v-card-text>
        <v-card-actions class="mt-3">
            <div class="d-flex align-center">
                <v-btn icon @click="likePost">
                    <v-icon :class="{ 'red--text': data.is_liked }">
                        {{
                            data.is_liked ? " mdi-heart" : " mdi-heart-outline"
                        }}
                    </v-icon>
                </v-btn>
                <div class="mr-1">{{ data.likes_count }}</div>
            </div>

            <v-spacer></v-spacer>
            <v-btn icon @click="bookmarkPost(data)">
                <v-icon>
                    {{
                        data.is_bookmarked
                            ? "mdi-bookmark"
                            : "mdi-bookmark-outline"
                    }}
                </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
    name: "NewPost",
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    setup(props, { emit, root }) {
        const bookmarkPost = post => {
            post.is_bookmarked = !post.is_bookmarked;
            let reqType = post.is_bookmarked ? "post" : "delete";
            axios[reqType](`/api/bookmarks/${post.slug}`).then(data => {});
        };

        const likePost = () => {
            props.data.is_liked = !props.data.is_liked;
            let reqType = props.data.is_liked ? "post" : "delete";
            axios[reqType](`/api/likes/${props.data.slug}`).then(() => {
                props.data.is_liked
                    ? props.data.likes_count++
                    : props.data.likes_count--;
            });
        };

        return {
            bookmarkPost,
            likePost
        };
    }
};
</script>
