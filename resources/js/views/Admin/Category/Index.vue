<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >مدیریت دسته بندی ها</v-toolbar-title
                    >
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                </div>
            </v-col>
        </v-row>

        <base-data-table
            fetch-url="/api/admin/categories"
            delete-url="/api/admin/categories/destroy"
            route-name="admin-categories-index"
            route-edit="admin-categories-edit"
            :create="{ text: 'دسته بندی جدید', route : 'admin-categories-create' }"
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
                    text: "مدیریت دسته بندی ها",
                    disable: true
                }
            ],
            headers: [
                {
                    text: "عنوان",
                    value: "title"
                },

                {
                    text: "نام اتین",
                    value: "slug"
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

<style scoped></style>
