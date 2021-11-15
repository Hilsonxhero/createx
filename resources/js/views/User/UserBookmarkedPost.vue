<template>
    <v-container v-if="posts">
        <v-row class="justify-center">
            <v-col cols="8">
                <div>
                    <h1 class="my-15">پست‌های ذخیره شده</h1>
                    <bookmarked-posts
                        v-for="(post, index) in posts.data"
                        :key="index"
                        :data="post"
                    ></bookmarked-posts>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref } from "@vue/composition-api";
import BookmarkedPosts from "@/components/posts/BookmarkedPosts";

export default {
    name: "UserBookmarkedPost",
    components: { BookmarkedPosts },
    setup() {
        const posts = ref(null);
        const user = ref(null);

        // created hook
        axios.get(`/api/bookmarked-posts`).then(({ data }) => {
            posts.value = data.posts;
            user.value = data.user;
        });

        return {
            posts,
            user
        };
    }
};
</script>
