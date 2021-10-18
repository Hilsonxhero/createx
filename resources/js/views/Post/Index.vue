<template>
    <v-main>
        <v-container v-if="post.user">
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <v-list-item>
                        <v-list-item-avatar size="75">
                            <v-avatar size="75">
                                <v-img
                                    :src="post.user.profile_src"></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ post.user.name }}
                                <v-btn color="grey darken-2" rounded dark small>دنبال کنید</v-btn>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ post.user.bio }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="caption mt-2">
                                {{ post.created_at }} / خواندن {{ post.min_read }} دقیقه
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <div class="mb-4">
                        <h2 class="my-4">{{ post.title }}</h2>
                        <v-img :src="post.banner_src"></v-img>
                        <div class="post-module_content" v-html="post.content">

                        </div>

                        <div class="post-module_tags mt-4">
                            <v-chip class="ml-2" :ripple="false" v-for="category in post.categories"
                                    :key="category.title">
                                {{ category.title }}
                            </v-chip>
                        </div>

                        <div class="d-flex flex-row mt-9">
                            <span class="mx-2">
                                <v-icon>mdi-heart-outline</v-icon>
                                0
                            </span>
                            <span class="mx-2">
                                <v-icon>mdi-bookmark-outline</v-icon>
                            </span>
                            <span class="mx-2">
                                <v-icon>mdi-comment-outline</v-icon>
                                0
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
                                <v-icon
                                    right
                                    dark
                                >
                                    mdi-content-copy
                                </v-icon>
                            </v-btn>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="mt-12">
                        <p class="body-2 font-weight-bold">شاید از این نوشته‌ها هم خوشتان بیاید</p>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="4" v-for="(post,index) in related_posts" :key="index">
                                    <router-link :to="{name : 'post-show',params : {slug : post.slug}}">
                                        <v-card>
                                            <v-img height="160" max-height="160"
                                                   :src="post.banner_src">
                                            </v-img>
                                            <v-card-title class="title body-1 card-title-ui">{{ post.title }}
                                            </v-card-title>
                                            <v-card-actions>
                                                <div class="d-flex flex-row">
                                                    <v-avatar size="45">
                                                        <v-img
                                                            :src="post.user.profile_src"></v-img>
                                                    </v-avatar>
                                                    <div class="mr-2">
                                                        <span class="body-2">{{ post.user.name }}</span>
                                                        <div class="caption">خواندن {{ post.min_read }} دقیقه</div>
                                                    </div>

                                                </div>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    icon
                                                    color="grey"
                                                >
                                                    <v-icon>mdi-bookmark-outline</v-icon>
                                                </v-btn>

                                            </v-card-actions>
                                        </v-card>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                    <div class="mt-12">
                        <p>پاسخ ها</p>
                        <div>
                            <v-textarea outlined label="نظر خود را بنویسید" v-model="comment.content"></v-textarea>
                            <div class="d-flex justify-end">
                                <v-btn rounded color="primary" large @click="saveComment" :disabled="!disableBtn">ارسال
                                    دیدگاه
                                </v-btn>
                            </div>
                        </div>
                        <post-comments v-for="(comment,index) in post.parent_comments" :key="index"
                                       :data="comment"></post-comments>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import {ref, watch} from '@vue/composition-api'
import PostComments from "@/components/posts/PostComments";

export default {
    name: "Index",
    components: {
        PostComments
    },
    metaInfo() {

        return {
            title: this.post.title,

            titleTemplate: ''
        }
    },
    setup(props, {root}) {

        const post = ref({})
        const related_posts = ref({})
        const short_link = ref(null)
        const comment = ref({
            content: '',
            post_id: null
        })
        const disableBtn = ref(false)

        const saveComment = () => {
            axios.post(`/api/comments/${post.value.slug}`, comment.value)
                .then((data) => {
                    comment.value.content = null
                })
        }

        watch(
            () => comment.value.content,
            (value) => {
                if (value.length > 5) {
                    disableBtn.value = true
                } else {
                    disableBtn.value = false
                }
            }
        )

        // created hook

        axios.get(`/api/posts/${root.$route.params.slug}`)
            .then(({data}) => {
                post.value = data.post
                related_posts.value = data.related_posts
                short_link.value = `http://virgool.local/link/${data.post.short_link}`
                comment.value.post_id = data.post.id

            })


        return {
            post,
            related_posts,
            short_link,
            comment,
            disableBtn,
            saveComment
        }
    }

}
</script>

<style>
.post-module_content {
    line-height: 2.2;
}

.post-module_content p {
    text-align: justify;
}

.post-module_content img {
    width: 100%;

}

.card-title-ui {
    text-align: right;
    margin-top: 14px;
    overflow: hidden;
    /* max-width: 90%; */
    min-height: 127px;
    line-height: 25px;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0 15px 20px rgba(0, 0, 0, .10);
}
</style>
