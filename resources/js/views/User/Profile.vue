<template>
    <v-container v-if="user">
        <v-row class="d-flex flex-row flex-column justify-center align-center">
            <v-col cols="12" md="8">
                <div class="d-flex align-center flex-row justify-between">
                    <div class="d-flex flex-row align-center">
                        <v-avatar @click="$refs.profile.click()">
                            <v-img :src="user.profile_src || '/images/5.jpg'"
                                   size="80px"></v-img>
                            <input type="file" class="d-none" ref="profile" @change="updateProfile">
                        </v-avatar>
                        <div>
                            <div class="mr-4 caption">{{ user.name }}</div>
                            <div class="mr-4 caption">{{ user.email }}</div>
                        </div>

                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-row flex-column mr-10">
                        <v-btn outlined rounded color="grey" router :to="{name : 'profile-setting'}">تنطیمات حساب
                            کاربری
                        </v-btn>
                    </div>
                </div>

                <div class="mt-15">
                    <span>توسط 0 نفر دنبال می شود</span>
                    <span class="mr-5">0 نفر را دنبال می کند</span>
                </div>

                <div class="d-flex flex-row align-center justify-center mt-15">
                    <div class="title">. . .</div>
                </div>
                <div class="mt-15">شما هنوز پستی در ویرگول ننوشته‌اید. همین حالا اقدام به نوشتن اولین پست خود کنید.
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
import {ref, reactive, onMounted} from '@vue/composition-api'
import uploadBase64 from "../../modules/file/uploadBase64";

export default {
    name: "Profile",

    setup() {
        const user = ref(null)

        const updateProfile = (event) => {
            user.value.profile = uploadBase64(event)

        }

        onMounted(() => {
            axios.get('/api/me')
                .then(({data}) => {
                    user.value = data
                })
        })
        return {
            user,
            updateProfile
        }
    },

}
</script>

<style scoped>

</style>
