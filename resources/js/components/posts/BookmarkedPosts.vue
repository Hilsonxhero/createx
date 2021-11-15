<template>
    <div class="d-flex mb-10">
        <div class="w-100">
            <h3 v-html="data.title"></h3>
            <p class="body-2 grey--text my-4" v-html="data.dec"></p>
            <div class="d-flex flex-row align-center">
                <div>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img :src="data.user.profile_src"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="body-2 dark--text font-weight-bold">
                                {{ data.user.name }}
                            </div>
                            <div class="caption grey--text">
                                {{ data.created_at }}
                            </div>
                        </v-list-item-content>
                    </v-list-item>
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
            </div>
        </div>
        <div class="mr-7">
            <v-avatar class="profile" color="grey" size="144" tile>
                <v-img :src="data.banner_src"></v-img>
            </v-avatar>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
    name: "BookmarkedPosts",
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

        return {
            bookmarkPost
        };
    }
};
</script>
