<template>
    <v-main>
        <v-container v-if="post.user">
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <v-list-item>
                        <v-list-item-avatar size="75">
                            <v-avatar size="75">
                                <v-img :src="post.user.profile_src"></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                <span>{{ post.user.name }}</span>
                                <v-btn
                                    class="mr-4"
                                    :color="
                                        post.user.is_follow ? 'info' : 'grey'
                                    "
                                    rounded
                                    dark
                                    small
                                    @click="followUser"
                                    v-if="
                                        $store.state.user.isLoggedIn &&
                                            post.user.id !=
                                                $store.state.user.user.id
                                    "
                                >
                                    {{
                                        post.user.is_follow
                                            ? "دنبال می کنید"
                                            : "دنبال کنید"
                                    }}
                                </v-btn>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ post.user.bio }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="caption mt-2">
                                {{ post.created_at }} / خواندن
                                {{ post.min_read }} دقیقه
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <div class="mb-4">
                        <h2 class="my-4">{{ post.title }}</h2>
                        <v-img :src="post.banner_src"></v-img>
                        <div
                            class="post-module_content"
                            v-html="post.content"
                        ></div>

                        <div class="post-module_tags mt-4">
                            <v-chip
                                class="ml-2"
                                :ripple="false"
                                v-for="category in post.categories"
                                :key="category.title"
                            >
                                {{ category.title }}
                            </v-chip>
                        </div>

                        <div class="d-flex flex-row mt-9">
                            <span class="mx-2">
                                <v-btn icon @click="likePost">
                                    <v-icon
                                        :class="{ 'red--text': post.is_liked }"
                                    >
                                        {{
                                            post.is_liked
                                                ? " mdi-heart"
                                                : " mdi-heart-outline"
                                        }}
                                    </v-icon>
                                </v-btn>

                                <span class="grey--text">{{
                                    post.likes_count
                                }}</span>
                            </span>
                            <span class="mx-2">
                                <v-btn icon @click="bookmarkPost(post)">
                                    <v-icon>
                                        {{
                                            post.is_bookmarked
                                                ? "mdi-bookmark"
                                                : "mdi-bookmark-outline"
                                        }}
                                    </v-icon>
                                </v-btn>
                            </span>
                            <span class="mx-2">
                                <v-btn icon>
                                    <v-icon>mdi-comment-outline</v-icon>
                                </v-btn>
                                <span class="grey--text">{{
                                    post.comments_count
                                }}</span>
                            </span>
                            <v-spacer></v-spacer>
                            <v-icon>mdi-telegram</v-icon>

                            <v-btn
                                outlined
                                rounded
                                color="blue-grey"
                                class="ma-2 white--text"
                                v-clipboard:copy="short_link"
                            >
                                {{ short_link }}
                                <v-icon right dark>
                                    mdi-content-copy
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="mt-12">
                        <p class="body-2 font-weight-bold">
                            شاید از این نوشته‌ها هم خوشتان بیاید
                        </p>
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                    md="4"
                                    v-for="(related_post,
                                    index) in related_posts"
                                    :key="index"
                                >
                                    <v-card>
                                        <v-img
                                            height="160"
                                            max-height="160"
                                            :src="related_post.banner_src"
                                        >
                                        </v-img>
                                        <router-link
                                            :to="{
                                                name: 'post-show',
                                                params: {
                                                    slug: related_post.slug
                                                }
                                            }"
                                        >
                                            <v-card-title
                                                class="title body-1 card-title-ui"
                                            >
                                                {{ related_post.title }}
                                            </v-card-title>
                                        </router-link>

                                        <v-card-actions>
                                            <div class="d-flex flex-row">
                                                <v-avatar size="45">
                                                    <v-img
                                                        :src="
                                                            related_post.user
                                                                .profile_src
                                                        "
                                                    ></v-img>
                                                </v-avatar>
                                                <div class="mr-2">
                                                    <router-link
                                                        :to="{
                                                            name: 'user-posts',
                                                            params: {
                                                                username:
                                                                    related_post
                                                                        .user
                                                                        .username
                                                            }
                                                        }"
                                                    >
                                                        <span class="body-2">{{
                                                            related_post.user
                                                                .name
                                                        }}</span>
                                                    </router-link>

                                                    <div class="caption">
                                                        خواندن
                                                        {{
                                                            related_post.min_read
                                                        }}
                                                        دقیقه
                                                    </div>
                                                </div>
                                            </div>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                icon
                                                @click="
                                                    bookmarkPost(related_post)
                                                "
                                            >
                                                <v-icon>
                                                    {{
                                                        related_post.is_bookmarked
                                                            ? "mdi-bookmark"
                                                            : "mdi-bookmark-outline"
                                                    }}
                                                </v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                    <div class="mt-12">
                        <p>پاسخ ها</p>
                        <div>
                            <v-textarea
                                outlined
                                label="نظر خود را بنویسید"
                                v-model="comment.content"
                            ></v-textarea>
                            <div class="d-flex justify-end">
                                <v-btn
                                    rounded
                                    color="primary"
                                    large
                                    @click="saveComment"
                                    :disabled="!disableBtn"
                                    >ارسال دیدگاه
                                </v-btn>
                            </div>
                        </div>
                        <post-comments
                            v-for="(comment, index) in post.parent_comments"
                            :key="index"
                            :data="comment"
                        ></post-comments>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import { ref, watch, onMounted } from "@vue/composition-api";
import PostComments from "@/components/posts/PostComments";

export default {
    name: "Index",
    components: {
        PostComments
    },
    metaInfo() {
        return {
            title: this.post.title,

            titleTemplate: ""
        };
    },

    setup(props, { root }) {
        const post = ref({});
        const related_posts = ref({});
        const short_link = ref(null);
        const comment = ref({
            content: "",
            post_id: null
        });
        const disableBtn = ref(false);

        const saveComment = () => {
            axios
                .post(`/api/comments/${post.value.slug}`, comment.value)
                .then(data => {
                    comment.value.content = null;
                });
        };

        const bookmarkPost = post => {
            post.is_bookmarked = !post.is_bookmarked;
            let reqType = post.is_bookmarked ? "post" : "delete";
            axios[reqType](`/api/bookmarks/${post.slug}`).then(data => {});
        };

        const likePost = () => {
            post.value.is_liked = !post.value.is_liked;
            let reqType = post.value.is_liked ? "post" : "delete";
            axios[reqType](`/api/likes/${post.value.slug}`).then(() => {
                post.value.is_liked
                    ? post.value.likes_count++
                    : post.value.likes_count--;
            });
        };

        const followUser = () => {
            axios.post(`/api/follow/${post.value.user.username}`).then(() => {
                post.value.user.is_follow = !post.value.user.is_follow;
            });
        };

        watch(
            () => comment.value.content,
            value => {
                if (comment.value.content && value.length > 5) {
                    disableBtn.value = true;
                } else {
                    disableBtn.value = false;
                }
            }
        );

        // created hook

        axios.get(`/api/posts/${root.$route.params.slug}`).then(({ data }) => {
            post.value = data.post;
            related_posts.value = data.related_posts;
            short_link.value = `http://virgool.local/link/${data.post.short_link}`;
            comment.value.post_id = data.post.id;

            Echo.channel(`virgool_comment_${data.post.id}`).listen(
                ".comment.created",
                ({ comment }) => {
                    console.log(comment);
                    post.value.parent_comments.push(comment);
                }
            );

            Echo.channel(`virgool_comment_${data.post.id}`).listen(
                "CommentDeletedEvent",
                ({ comment }) => {
                    post.value.parent_comments = post.value.parent_comments.filter(
                        c => c.id !== comment.id
                    );
                }
            );
        });

        return {
            post,
            related_posts,
            short_link,
            comment,
            disableBtn,
            saveComment,
            bookmarkPost,
            likePost,
            followUser
        };
    }
};
</script>
