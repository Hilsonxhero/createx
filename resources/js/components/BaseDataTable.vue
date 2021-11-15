<template>
    <v-row>
        <v-col cols="12">
            <v-card>
                <v-card-title>
                    <div>
                        <template v-if="Create">
                            <v-btn
                                color="primary"
                                outlined
                                rounded
                                router
                                :to="{ name: Create.route }"
                                v-html="Create.text"
                            ></v-btn>
                        </template>
                    </div>
                    <v-spacer></v-spacer>

                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="جستجو"
                        single-line
                        hide-details
                        @keyup="searchItems"
                    ></v-text-field>
                </v-card-title>

                <v-data-table
                    v-model="selected"
                    :headers="Headers"
                    :items="items.data"
                    no-data-text="نتیجه ای یافت نشد"
                    :server-items-length="total"
                    @update:options="updateOptions"
                    :loading="loading"
                    loading-text="دریافت اطلاعات..."
                    :footer-props="footerProps"
                    :options.sync="options"
                    :single-select="singleSelect"
                    item-key="id"
                    show-select
                    class="elevation-1"
                >
                    <template v-slot:item.banner_src="{ item }">
                        <v-img
                            max-width="100"
                            class="my-3"
                            :src="item.banner_src"
                        ></v-img>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-btn
                            icon
                            color="info"
                            router
                            :to="{
                                name: RouteEdit,
                                params: { id: item.id }
                            }"
                        >
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
</template>
<script>
import { debounce } from "lodash";
export default {
    name: "BaseDataTable",

    props: {
        fetchUrl: {
            type: String,
            required: true
        },
        DeleteUrl: {
            type: String,
            required: true
        },
        RouteName: {
            type: String,
            required: true
        },
        RouteEdit: {
            type: String,
            required: true
        },
        Headers: {
            type: Array,
            required: true
        },
        Create: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            singleSelect: false,
            selected: [],

            items: [],
            total: null,
            loading: false,
            search: this.$route.query.search,
            footerProps: {
                "items-per-page-options": [5, 10, 25, 50],
                "items-per-page-text": "تعداد رکورد در هر صفحه",
                "page-text": ""
            },
            options: {
                page: this.$route.query.page ?? 1,
                itemsPerPage: this.$route.query.per_page ?? 10,
                sortBy: this.$route.query.sort_by
                    ? [this.$route.query.sort_by]
                    : ["id"],
                sortDesc:
                    this.$route.query.sort_type === "desc" ? [true] : [false],
                groupBy: [],
                groupDesc: [],
                multiSort: false,
                musSort: false
            }
        };
    },

    created() {
        this.fetchItems();
    },

    methods: {
        updateOptions(options) {
            const params = this.createQuery(options);

            this.$router.push(
                {
                    name: this.RouteName,
                    query: params
                },
                () => {}
            );
        },

        fetchItems() {
            const params = this.createQuery(this.options);
            this.loading = true;
            axios
                .get(this.fetchUrl, {
                    params
                })
                .then(({ data }) => {
                    // this.headers = data.headers;
                    this.items = data.items;
                    this.total = data.items.total;
                    this.options.page = data.items.current_page;
                    this.options.itemsPerPage = Number(data.items.per_page);
                    this.footerProps[
                        "page-text"
                    ] = `${this.items.from}-${this.items.to} از ${this.items.total}`;
                })
                .finally(() => (this.loading = false));
        },

        searchItems: debounce(function() {
            this.options.page = 1;
            this.fetchItems(this.options);
        }, 500),

        createQuery(options) {
            return {
                page: options.page,
                per_page: options.itemsPerPage,
                sort_by: options.sortBy[0],
                sort_type: options.sortDesc[0] === true ? "desc" : "asc",
                search: this.search
            };
        },
        deleteItem(item) {
            axios.post(this.DeleteUrl, { id: item.id }).then(({}) => {
                this.items.data = this.items.data.filter(
                    user => user.id != item.id
                );
            });
        }
    }
};
</script>
