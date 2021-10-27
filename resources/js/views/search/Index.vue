<template>
<v-container>
    <v-row class="">
        <v-col cols="8">
            <div class="my-15">
                <v-text-field v-model="search" placeholder="متن جستجو .." @keyup="handleSearch"></v-text-field>
                <v-divider></v-divider>
                <v-tabs class="mt-10 grey darken-3" v-model="activeTab">
                    <v-tab href="#posts" @click.stop="goTo('posts')">پست ها</v-tab>
                    <v-tab href="#users" @click.stop="goTo('users')">کاربران</v-tab>
                    <v-tab href="#categories" @click.stop="goTo('categories')">دسته بندی ها</v-tab>
                </v-tabs>
                <v-tabs-items v-model="activeTab" class="mt-7">
                    <v-tab-item value="posts" v-if="activeTab === 'posts' && items.data">
                        <new-post v-for="(post,index) in items.data" :key="index" :data="post">
                        </new-post>
                        <div class="d-flex justify-center mt-15">
                            <v-btn color="primary" outlined @click="fetchNextItems" v-if="!!items.next_page_url">
                                بیشتر
                            </v-btn>
                        </div>
                        <div class="d-flex justify-center mt-10">
                            <div v-if="!items.data.length">نتیجه ای برای جستجوی شما یافت نشد</div>
                        </div>
                    </v-tab-item>
                    <v-tab-item value="users" v-if="activeTab === 'users' && items.data">
                        <template v-for="(user,index) in items.data">
                            <div class="d-flex flex-row my-6" :key="index">
                                <div class="d-flex flex-row">
                                    <router-link :to="{name : 'user-posts',params :{username : user.username}}">
                                        <v-avatar>
                                            <v-img :src="user.profile_src"></v-img>
                                        </v-avatar>
                                    </router-link>
                                    <div class="mr-6">
                                        <router-link :to="{name : 'user-posts',params :{username : user.username}}">
                                            <div>{{ user.name }}</div>
                                        </router-link>

                                        <div class="caption">{{ user.bio }}</div>
                                    </div>
                                </div>
                                <v-spacer></v-spacer>
                                <div>
                                    <v-btn color="primary" :outlined="!user.is_follow" @click="followUser(index,user.username)" v-if="$store.state.user.isLoggedIn && user.id != $store.state.user.user.id">
                                        {{ user.is_follow ? 'دنبال می کنید' : 'دنبال کنید' }}
                                    </v-btn>
                                </div>
                            </div>
                            <v-divider class="mt-3"></v-divider>
                        </template>
                        <div class="d-flex justify-center mt-15">
                            <v-btn color="primary" outlined @click="fetchNextItems" v-if="!!items.next_page_url">
                                بیشتر
                            </v-btn>
                        </div>
                        <div class="d-flex justify-center mt-10">
                            <div v-if="!items.data.length">نتیجه ای برای جستجوی شما یافت نشد</div>
                        </div>
                    </v-tab-item>
                    <v-tab-item value="categories" v-if="activeTab === 'categories' && items.data">
                        <v-chip router :to="{name : 'post-category',params : {slug : category.slug}}" v-for="(category,index) in items.data" :key="index" class="ma-2">
                            {{ category.title }}
                        </v-chip>

                        <div class="d-flex justify-center mt-10">
                            <div v-if="!items.data.length">نتیجه ای برای جستجوی شما یافت نشد</div>
                        </div>
                    </v-tab-item>

                </v-tabs-items>
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {
    ref
} from '@vue/composition-api'
import NewPost from "@/components/posts/NewPost"
import {
    debounce
} from "lodash"

export default {
    name: "Index",
    metaInfo(){
   return  {
       title  : 'جستجوی' + this.$route.query.q
   }
    },
    components: {
        NewPost
    },
    setup(props, {
        emit,
        root
    }) {
        const search = ref(
            root.$route.query.q
        )
        const pageType = root.$route.params.type
        const activeTab = ref(root.$route.params.type)
        const items = ref({})

        const goTo = (type) => {
            root.$router.push({
                name: 'search',
                params: {
                    type: type
                },
                query: {
                    q: search.value
                }
            })
        }

        const fetchNextItems = () => {
            axios.get(items.value.next_page_url)
                .then(({
                    data
                }) => {
                    items.value.data.push(...data[pageType].data)
                    items.value.next_page_url = data[pageType].next_page_url
                })
        }

        const fetchItems = () => {
            if (search.value !== '') {
                axios.get(`/api/search/${pageType}?q=${search.value}`)
                    .then(({
                        data
                    }) => {
                        items.value = data[pageType]
                    })
            }

        }

        const handleSearch = debounce(function () {
            console.log("wwwwwww")
            fetchItems()
        }, 500)

        const followUser = (index, username) => {

            axios.post(`/api/follow/${username}`)
                .then(() => {
                    items.value.data[index].is_follow = !items.value.data[index].is_follow
                })
        }

        fetchItems()

        return {
            search,
            activeTab,
            items,
            pageType,
            goTo,
            fetchNextItems,
            handleSearch,
            fetchItems,
            followUser
        }
    }
}
</script>

<style>
.v-tab {
    letter-spacing: 0 !important;
}
</style>
