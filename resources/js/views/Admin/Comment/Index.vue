<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >مدیریت نظرات
                    </v-toolbar-title>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                </div>
            </v-col>
        </v-row>

        <base-data-table
            fetch-url="/api/admin/comments"
            delete-url="/api/admin/comments/destroy"
            route-name="admin-comments-index"
            route-edit="admin-comments-edit"
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
                    text: "مدیریت نظرات ",
                    disable: true
                }
            ],
            headers: [
                {
                    text: "متن",
                    value: "content"
                },

                {
                    text: "کاربر",
                    value: "user.name"
                },

                {
                    text: "نوشته",
                    value: "post.title"
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
