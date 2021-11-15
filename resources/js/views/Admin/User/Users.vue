<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >کاربران</v-toolbar-title
                    >
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                </div>
            </v-col>
        </v-row>

        <base-data-table
            fetch-url="/api/admin/users"
            delete-url="/api/admin/users/destroy"
            route-name="admin-users-index"
            route-edit="admin-users-edit"
            :create="{
                text: ' کاربر جدید',
                route: 'admin-users-create'
            }"
            :headers="headers"
        ></base-data-table>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "@vue/composition-api";

import BaseDataTable from "@/components/BaseDataTable.vue";

export default {
    components: { BaseDataTable },
    name: "Users",
    data() {
        return {
            breadcrumbs: [
                {
                    text: "داشبورد",
                    disable: false,
                    href: "/dashboard"
                },
                {
                    text: "مدیریت کاربران",
                    disable: true
                }
            ],
            headers: [
                {
                    text: "نام",
                    value: "name"
                },
                {
                    text: "ایمیل",
                    value: "email"
                },
                {
                    text: "نام کاربری",
                    value: "username"
                },
                {
                    text: "تاریخ عضویت",
                    value: "created_at"
                },
                {
                    text: "Actions",
                    value: "actions",
                    sortable: false
                }
            ]
        };
    }
};
</script>
