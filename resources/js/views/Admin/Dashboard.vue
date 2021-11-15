<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >داشبورد</v-toolbar-title
                    >
                    <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
                </div>
            </v-col>
        </v-row>
        <v-row class="mb-15">
            <v-col cols="12" md="4" lg="3">
                <v-card
                    class="bg-gradient-info d-flex flex-row justify-between pa-7"
                >
                    <div class="">
                        <v-icon color="white">mdi-account-group-outline</v-icon>
                    </div>
                    <div class="w-100 ww">
                        <h3 class="white--text text-left">تعداد کاربران</h3>
                        <div
                            class="white--text text-left mt-6 font-weight-bold"
                        >
                            {{ users_count }}
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="3">
                <v-card
                    class="bg-gradient-primary d-flex flex-row justify-between pa-7"
                >
                    <div class="">
                        <v-icon color="white">mdi-shape-outline</v-icon>
                    </div>
                    <div class="w-100 ww">
                        <h3 class="white--text text-left">
                            تعداد دسته بندی ها
                        </h3>
                        <div
                            class="white--text text-left mt-6 font-weight-bold"
                        >
                            {{ categories_count }}
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="3">
                <v-card
                    class="bg-gradient-danger d-flex flex-row justify-between pa-7"
                >
                    <div class="">
                        <v-icon color="white">mdi-file-multiple-outline</v-icon>
                    </div>
                    <div class="w-100 ww">
                        <h3 class="white--text text-left">تعداد پست ها</h3>
                        <div
                            class="white--text text-left mt-6 font-weight-bold"
                        >
                            {{ posts_count }}
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="3">
                <v-card
                    class="bg-gradient-warning d-flex flex-row justify-between pa-7"
                >
                    <div class="">
                        <v-icon color="white"
                            >mdi-comment-text-multiple-outline</v-icon
                        >
                    </div>
                    <div class="w-100 ww">
                        <h3 class="white--text text-left">تعداد نظرات</h3>
                        <div
                            class="white--text text-left mt-6 font-weight-bold"
                        >
                            {{ comments_count }}
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-autocomplete
                    v-model="value"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="white"
                    hide-no-data
                    hide-selected
                    item-text="title"
                    item-value="slug"
                    label="پست های ویژه"
                    placeholder="جستجو"
                    return-object
                    outlined
                    rounded
                    @change="sendPost"
                    class="d-block"
                ></v-autocomplete>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-right">
                                    تصویر نوشته
                                </th>
                                <th class="text-right">
                                    عنوان نوشته
                                </th>
                                <th class="text-right">
                                    نویسنده
                                </th>

                                <th class="text-right">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="featurePost in posts"
                                :key="featurePost.post.slug"
                            >
                                <td>
                                    <v-img
                                        max-width="110"
                                        class="my-3"
                                        :src="featurePost.post.banner_src"
                                    ></v-img>
                                </td>
                                <td>{{ featurePost.post.title }}</td>
                                <td>{{ featurePost.post.user.name }}</td>
                                <td>
                                    <v-btn
                                        icon
                                        @click="
                                            deleteFeaturePost(
                                                featurePost.post.slug
                                            )
                                        "
                                    >
                                        <v-icon class="red--text"
                                            >mdi-delete</v-icon
                                        >
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Dashboard",
    watch: {
        search(value) {
            if (value.length <= 0) return;

            if (this.isLoading) return;

            this.isLoading = true;

            axios
                .get(`/api/admin/feature-posts-search?q=${value}`)
                .then(({ data }) => {
                    this.items = data.data;
                })
                .finally(() => (this.isLoading = false));
        }
    },

    data: () => ({
        items: [],
        values: ["foo", "bar"],
        value: null,
        isLoading: false,
        search: null,
        breadcrumbs: [
            {
                text: "داشبورد",
                disabled: false,
                href: "/dashboard"
            }
        ],
        posts: [],
        users_count: null,
        categories_count: null,
        posts_count: null,
        comments_count: null
    }),
    methods: {
        sendPost(event) {
            console.log(event);
            axios.post(`/api/admin/feature-post/${event.slug}`).then(() => {
                this.fetchFeaturePosts();
                this.value = null;
                this.search = null;
            });
        },
        fetchFeaturePosts() {
            axios.get(`/api/admin/feature-post`).then(({ data }) => {
                this.posts = data.posts;
            });
        },
        deleteFeaturePost(slug) {
            axios.delete(`/api/admin/feature-post/${slug}`).then(({}) => {
                this.fetchFeaturePosts();
                // this.posts = this.posts.filter(
                //     user => user.id != item.id
                // );
            });
        }
    },

    created() {
        axios.get(`/api/admin/dashboard`).then(({ data }) => {
            this.users_count = data.users_count;
            this.categories_count = data.categories_count;
            this.posts_count = data.posts_count;
            this.comments_count = data.comments_count;
        });
        this.fetchFeaturePosts();
    }
};
</script>
