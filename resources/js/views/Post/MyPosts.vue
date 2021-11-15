<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex flex-row">
                        <span class="title font-weight-bold"
                            >نوشته های شما</span
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            outlined
                            router
                            :to="{ name: 'post-create' }"
                            >نوشتن پست جدید</v-btn
                        >
                    </div>

                    <v-tabs class="mt-7" v-model="menu">
                        <v-tab href="#drafts" @click="fetchAllDrafts">
                            پیش نویس ها
                            <template v-if="drafts_count">
                                ({{ drafts_count }})
                            </template>
                        </v-tab>
                        <v-tab href="#posts" @click="fetchAllPosts">
                            مطالب منتشر شده
                            <template v-if="posts_count">
                                ({{ posts_count }})
                            </template>
                        </v-tab>
                    </v-tabs>
                    <v-divider></v-divider>
                    <v-tabs-items v-model="menu">
                        <v-tab-item
                            value="drafts"
                            v-for="(draft, index) in drafts"
                            :key="index"
                        >
                            <div>
                                <h2 class="mt-4 mb-2">
                                    <router-link
                                        :to="{
                                            name: 'update-draft',
                                            params: { link: draft.link }
                                        }"
                                        >{{
                                            draft.title || "بدون عنوان"
                                        }}</router-link
                                    >
                                </h2>
                                <div class="d-flex flex-row">
                                    <p class="body-2 grey--text">
                                        آخرین ویرایش : {{ draft.updated_at }}
                                    </p>
                                    <v-spacer></v-spacer>
                                    <v-btn icon color="info" class="ml-3">
                                        <router-link
                                            :to="{
                                                name: 'update-draft',
                                                params: { link: draft.link }
                                            }"
                                            ><v-icon
                                                >mdi-file-document-edit</v-icon
                                            ></router-link
                                        >
                                    </v-btn>
                                    <v-btn
                                        icon
                                        color="error"
                                        @click="
                                            openDeleteDraftDialog(
                                                index,
                                                draft.link
                                            )
                                        "
                                    >
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                                <v-divider class="mt-5"></v-divider>
                            </div>
                        </v-tab-item>

                        <v-tab-item value="posts">
                            <v-tab-item
                                value="posts"
                                v-for="(post, index) in posts"
                                :key="index"
                            >
                                <div>
                                    <h2 class="mt-4 mb-2">
                                        <router-link
                                            :to="{
                                                name: 'post-show',
                                                params: { slug: post.slug }
                                            }"
                                            >{{
                                                post.title || "بدون عنوان"
                                            }}</router-link
                                        >
                                    </h2>
                                    <div class="d-flex flex-row">
                                        <p class="body-2 grey--text">
                                            آخرین ویرایش : {{ post.updated_at }}
                                        </p>
                                        <v-spacer></v-spacer>
                                        <v-btn icon color="info" class="ml-3">
                                            <router-link
                                                :to="{
                                                    name: 'edit-post',
                                                    params: { slug: post.slug }
                                                }"
                                                ><v-icon
                                                    >mdi-file-document-edit</v-icon
                                                ></router-link
                                            >
                                        </v-btn>
                                        <v-btn
                                            icon
                                            color="error"
                                            @click="
                                                openDeletePostDialog(
                                                    index,
                                                    post.slug
                                                )
                                            "
                                        >
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </div>
                                    <v-divider class="mt-5"></v-divider>
                                </div>
                            </v-tab-item>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>

        <v-dialog v-model="deleteDialogDraft" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h6">
                    آیا از حذف این نوشته اطمینان دارید ؟
                </v-card-title>
                <v-card-text></v-card-text>
                <v-card-actions>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="cancelDeleteDraft"
                    >
                        بستن
                    </v-btn>
                    <v-btn color="green darken-1" text @click="deleteDraft()">
                        تایید
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="deleteDialogPost" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h6">
                    آیا از حذف این نوشته اطمینان دارید ؟
                </v-card-title>
                <v-card-text></v-card-text>
                <v-card-actions>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="cancelDeletePost"
                    >
                        بستن
                    </v-btn>
                    <v-btn color="green darken-1" text @click="deletePost()">
                        تایید
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
</template>

<script>
import { onMounted } from "@vue/composition-api";
import DraftModule from "@/modules/post/DraftModule";
import PostModule from "@/modules/post/PostModule";
export default {
    name: "MyPosts",
    setup(props, { root }) {
        const menu = "drafts";

        const { fetchAllDrafts } = DraftModule();

        onMounted(() => {
            fetchAllDrafts();
        });

        return {
            menu,
            ...DraftModule(),
            ...PostModule()
        };
    }
};
</script>
