<template>
    <v-container v-if="user">
        <v-row class="d-flex flex-row flex-column justify-center align-center">
            <v-col cols="12" md="8">
                <div class="d-flex align-center flex-row justify-between">
                    <div class="d-flex flex-row align-center">
                        <v-avatar @click="$refs.profile.click()">
                            <v-img :src="user.profile_src || '/images/5.jpg'"
                                   size="80px"></v-img>
                            <input type="file" class="d-none">
                        </v-avatar>
                        <div>
                            <div class="mr-4 caption">{{ user.name }}</div>
                            <div class="mr-4 caption">{{ user.email }}</div>
                        </div>

                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-row flex-column mr-10">
                                                <v-btn class="mr-4" :color="user.is_follow ? 'info' : 'grey'"
                                                       rounded
                                                       dark
                                                       small
                                                       @click="followUser"
                                                       v-if="$store.state.user.isLoggedIn && user.id != $store.state.user.user.id"
                                                >

                                                    {{ user.is_follow ? 'دنبال می کنید' : 'دنبال کنید' }}
                                                </v-btn>
                    </div>
                </div>

                <div class="mt-15">
                    <span>توسط {{ user.followers_count }} نفر دنبال می شود</span>
                    <span class="mr-5">{{ user.follows_count }} نفر را دنبال می کند</span>
                </div>

                <div class="my-15">
                    <new-post v-for="(post,index) in posts.data" :key="index" :data="post"></new-post>
                </div>

                <div class="d-none flex-row align-center justify-center mt-15">
                    <div class="title">. . .</div>
                </div>
                <div class="mt-15 d-none">شما هنوز پستی در ویرگول ننوشته‌اید. همین حالا اقدام به نوشتن اولین پست خود
                    کنید.
                </div>

                <div class="mt-10">
                    <v-btn rounded large color="primary" class="darken-1">
                        نوشتن اولین پست
                        <v-icon class="mr-1">mdi-chevron-left</v-icon>
                    </v-btn>
                </div>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {ref} from '@vue/composition-api'
import NewPost from "@/components/posts/NewPost";

export default {
    name: "UserPosts",
    components: {NewPost},
    setup(props, {emit, root}) {
        const posts = ref({})
        const user = ref({})

        const followUser = () => {

            axios.post(`/api/follow/${user.value.username}`)
                .then(() => {
                     user.value.is_follow = !user.value.is_follow
                })
        }

        // created hook
        axios.get(`/api/user-posts/${root.$route.params.username}`)
            .then(({data}) => {
                posts.value = data.posts
                user.value = data.user
            })
        return {
            posts,
            user,
            followUser
        }
    }
}
</script>

<style scoped>

</style>
