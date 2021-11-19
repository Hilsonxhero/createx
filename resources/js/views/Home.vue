<template>
    <div>
        <v-main>
            <v-container>
                <v-row>
                    <v-col
                        :cols="index === 0 || index === 3 ? 8 : 4"
                        v-for="(featurePost, index) in featurePosts"
                        :key="featurePost.post.slug"
                    >
                        <related-post :data="featurePost.post"></related-post>
                    </v-col>
                </v-row>
            </v-container>

            <category-slider></category-slider>

            <v-container>
                <v-row class="mt-5">
                    <v-col cols="12" md="9">
                        <v-row>
                            <new-post
                                v-for="(post, index) in posts.data"
                                :key="index"
                                :data="post"
                            ></new-post>
                        </v-row>
                    </v-col>
                    <v-col cols="3" class="hidden-sm-and-down">
                        <v-banner sticky>
                            <following-posts></following-posts>
                            <popular-posts></popular-posts>
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
import { ref } from "@vue/composition-api";
import FollowingPosts from "../components/posts/FollowingPosts";
import CategorySlider from "../components/CategorySlider.vue";

export default {
    name: "Home",
    components: {
        FollowingPosts,
        PopularPosts,
        NewPost,
        RelatedPost,
        CategorySlider
    },
    setup() {
        const drawer = ref(false);
        const posts = ref({});
        const featurePosts = ref([]);

        // created hook

        axios.get("/api/feature-posts").then(({ data }) => {
            featurePosts.value = data.data;
        });

        axios.get("/api/home").then(({ data }) => {
            posts.value = data.posts;
        });

        return {
            drawer,
            posts,
            featurePosts
        };
    }
};
</script>
