<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >مدیریت پست ها</v-toolbar-title
                    >
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                </div>
            </v-col>
        </v-row>

        <base-data-table
            fetch-url="/api/admin/posts"
            delete-url="/api/admin/posts/destroy"
            route-name="admin-posts-index"
            route-edit="admin-posts-edit"
            :headers="headers"
        ></base-data-table>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";

import BaseDataTable from "@/components/BaseDataTable.vue";

export default {
    components: { BaseDataTable },
    name: "Index",
    data() {
        return {
            breadcrumbs: [
                {
                    text: "داشبورد",
                    disable: false,
                    href: "/dashboard"
                },
                {
                    text: "مدیریت پست ها",
                    disable: true
                }
            ],
            headers: [
                {
                    text: "تصویر",
                    value: "banner_src"
                },
                {
                    text: "عنوان",
                    value: "title"
                },

                {
                    text: "تعداد کامنت ها",
                    value: "comments_count"
                },

                {
                    text: "نویسنده",
                    value: "user.name",
                    sortable: false
                },

                {
                    text: "عملیات",
                    value: "actions",
                    sortable: false
                }
            ]
        };
    }
};
</script>
