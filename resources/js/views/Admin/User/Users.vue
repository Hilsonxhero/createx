<template>
<div>
    <v-row>
        <v-col class="d-flex justify-space-between align-center">
            <div>
                <v-toolbar-title class="text-h5 font-weight-bold mt-5">کاربران</v-toolbar-title>
                <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
            </div>
        </v-col>

    </v-row>

    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    <div>
                        <v-btn color="primary" outlined rounded router :to="{name : 'admin-users-create'}">کاربر جدید</v-btn>
                    </div>
                    <v-spacer></v-spacer>

                    <v-text-field v-model="search" append-icon="mdi-magnify" label="جستجو" single-line hide-details @keyup="searchItems"></v-text-field>

                    <v-btn color="error" class="d-none" icon>
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>

                </v-card-title>

                <v-data-table v-model="selected" :headers="headers" :items="users.data" no-data-text="نتیجه ای یافت نشد" :server-items-length="total" @update:options="fetchUsers" :loading="loading" loading-text="دریافت اطلاعات..." :footer-props="footerProps" :options.sync="options" :single-select="singleSelect" item-key="name" show-select class="elevation-1">
                    <template v-slot:item.actions="{ item }">
                        <v-btn icon color="info">
                            <v-icon small>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                        <v-btn icon color="error" @click="deleteItem(item)">
                            <v-icon small>
                                mdi-delete
                            </v-icon>
                        </v-btn>

                    </template>
                </v-data-table>

            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    ref,
    reactive,
    onMounted
} from '@vue/composition-api'
import {
    debounce
} from 'lodash'

export default {
    name: "Users",
    data() {
        return {
            breadcrumbs: [{
                    text: 'داشبورد',
                    disable: false,
                    href: '/dashboard',
                },
                {
                    text: 'مدیریت کاربران',
                    disable: true,
                },
            ],
            singleSelect: false,
            selected: [],
            headers: [{
                    text: 'نام',
                    value: 'name'
                },
                {
                    text: 'ایمیل',
                    value: 'email'
                },
                {
                    text: 'نام کاربری',
                    value: 'username'
                },
                {
                    text: 'تاریخ عضویت',
                    value: 'created_at'
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false
                },
            ],
            users: [],
            total: null,
            loading: false,
            search: this.$route.query.search,
            footerProps: {
                'items-per-page-options': [5, 10, 25, 50],
                'items-per-page-text': "تعداد رکورد در هر صفحه",
                'page-text': ''
            },
            options: {
                page: this.$route.query.page ?? 1,
                itemsPerPage: this.$route.query.per_page ?? 10,
                sortBy: this.$route.query.sort_by ? [this.$route.query.sort_by] : ['id'],
                sortDesc: this.$route.query.sort_type === 'desc' ? [true] : [false],
                groupBy: [],
                groupDesc: [],
                multiSort: false,
                musSort: false
            }
        }
    },

    created() {
        this.fetchItems();
    },

    methods: {
        fetchUsers(options) {
            const params = this.createQuery(options)

            this.$router.push({
                name: 'admin-users-index',
                query: params
            }, () => {});

        },

        fetchItems() {
            const params = this.createQuery(this.options)
            this.loading = true;
            axios.get('/api/admin/users', {
                    params
                })
                .then(({
                    data
                }) => {
                    // this.headers = data.headers;
                    this.users = data.users;
                    this.total = data.users.total;
                    this.options.page = data.users.current_page;
                    this.options.itemsPerPage = Number(data.users.per_page);
                    this.footerProps['page-text'] = `${this.users.from}-${this.users.to} از ${this.users.total}`
                }).finally(() => this.loading = false);
        },

        searchItems: debounce(function () {
            this.options.page = 1
            this.fetchUsers(this.options);
        }, 500),

        createQuery(options) {
            return {
                page: options.page,
                per_page: options.itemsPerPage,
                sort_by: options.sortBy[0],
                sort_type: options.sortDesc[0] === true ? 'desc' : 'asc',
                search: this.search
            }
        },
        deleteItem(item) {
            axios.post(`/api/admin/users/destroy`,{user : item.id})
            .then(({}) => {
               this.users.data =  this.users.data.filter(user => user.id != item.id)
            })

        }


    }

}
</script>

<style scoped>

</style>
