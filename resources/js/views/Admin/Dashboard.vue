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
            @change="sendPost"
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

                        <th class="text-right"></th>
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
                                    deleteFeaturePost(featurePost.post.slug)
                                "
                            >
                                <v-icon class="red--text">mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
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
        posts: []
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
        this.fetchFeaturePosts();
    }
};
</script>

<style scoped></style>
