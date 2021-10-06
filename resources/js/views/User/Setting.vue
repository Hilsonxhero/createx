<template>
    <v-container v-if="user">
        <v-row class="mt-5">
            <v-col cols="12" md="3">
                <v-banner sticky>
                    <h3 class="">تنطیمات کاربری</h3>
                    <div>
                        <div>
                            <div class="my-5 subtitle grey--text">
                                درباره شما
                            </div>
                            <div class="my-5 subtitle grey--text">
                                حساب کاربری
                            </div>
                            <div class="my-5 subtitle grey--text">
                                اطلاعات شخصی
                            </div>
                            <div class="my-5 subtitle grey--text">
                                ایمیل نوتیفیکیشن
                            </div>
                            <div class="my-5 subtitle grey--text">
                                تنطیمات حالت شب
                            </div>
                            <div class="my-5 subtitle grey--text">
                                تنظیمات پیشرفته
                            </div>
                        </div>
                    </div>
                </v-banner>
            </v-col>
            <v-col cols="12" md="8">
                <aside class="mt-4">
                    <h3 class="mb-3">درباره شما</h3>
                    <div class="my-10">
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
                    </div>
                    <div class="mt-8">
                        <div class="body-1 mb-3">نام</div>
                        <v-text-field label="" :value="user.name" v-model="user.name"></v-text-field>
                    </div>

                    <div class="mt-8">
                        <div class="body-1 mb-3">توضیحات پروفایل</div>
                        <v-textarea label="" :value="user.bio" v-model="user.bio"></v-textarea>
                    </div>
                </aside>
                <aside class="mt-8">
                    <h3 class="mb-3">حساب کاربری</h3>
                    <div class="d-flex flex-row my-10">
                        <span>نام کاربری</span>
                        <v-spacer></v-spacer>
                        <div class="w-50">
                            <div class="d-flex justify-end mb-4">
                                <v-btn outlined rounded sm color="grey" @click="editing.username = !editing.username">
                                    ویرایش
                                </v-btn>
                            </div>
                            <v-text-field :prefix="url" v-model="user.username" class="ltr"
                                          :disabled="!editing.username"></v-text-field>
                        </div>
                    </div>
                    <div class="d-flex flex-row my-10">
                        <span>ایمیل</span>
                        <v-spacer></v-spacer>
                        <div class="w-50">
                            <div class="d-flex justify-end mb-4">
                                <v-btn outlined rounded sm color="grey" @click="editing.email = !editing.email">ویرایش
                                </v-btn>
                            </div>
                            <v-text-field v-model="user.email" class="ltr" :disabled="!editing.email"></v-text-field>
                            <!--                            <div>{{ user.email }}</div>-->
                        </div>
                    </div>
                    <div class="d-flex flex-row my-10">
                        <span>شماره همراه</span>
                        <v-spacer></v-spacer>
                        <div>
                            <div class="d-flex justify-end mb-4">
                                <v-btn outlined rounded sm color="grey">ویرایش</v-btn>
                            </div>

                            <div>{{ user.phone }}</div>
                        </div>
                    </div>
                    <div class="d-flex flex-row my-10">
                        <span>رمز عبور</span>
                        <v-spacer></v-spacer>
                        <div>
                            <div class="d-flex justify-end mb-4">
                                <v-btn outlined rounded sm color="grey">ویرایش</v-btn>
                            </div>
                        </div>
                    </div>
                </aside>
                <aside class="mt-8">
                    <h3 class="mb-3">ایمیل نوتیفیکیشن</h3>
                    <div class="d-flex align-center flex-row my-10">
                        <span>وقتی که یک نفر شما را دنبال میکند</span>
                        <v-spacer></v-spacer>
                        <div>
                            <div class="d-flex justify-end">
                                <v-switch inset v-model="user.email_on_follow"></v-switch>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-center flex-row my-10">
                        <span>وقتی بر روی نوشته شما پاسخی ارسال کنند</span>
                        <v-spacer></v-spacer>
                        <div>
                            <div class="d-flex justify-end">
                                <v-switch v-model="user.email_on_reply" inset></v-switch>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-center flex-row my-10">
                        <span>وقتی نوشته شما را لایک می‌کنند</span>
                        <v-spacer></v-spacer>
                        <div>
                            <div class="d-flex justify-end">
                                <v-switch v-model="user.email_on_like" inset></v-switch>
                            </div>
                        </div>
                    </div>
                </aside>

                <div class="d-flex justify-end">
                    <v-btn outlined rounded color="primary" @click="update">ذخیره تغییرات</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import {ref, reactive, onMounted} from '@vue/composition-api'
import uploadBase64 from "../../modules/file/uploadBase64";

export default {
    name: "Setting",

    setup() {
        const user = ref(null)
        const url = ref(process.env.MIX_APP_URL)
        const editing = ref({
            username: false,
            email: false,
        })
        const errors = ref({
        email: null,
        password: null,
    })

        const updateProfile = (event) => {
            user.value.profile_name = event.target.files[0].name
            user.value.profile_src = user.value.profile = uploadBase64(event)

        }

        const update = () => {
            axios.patch('/api/profile', user.value)
        }

        onMounted(() => {
            axios.get('/api/me')
                .then(({data}) => {
                    user.value = data
                })
        })

        return {
            user,
            url,
            editing,
            update,
            errors,
            updateProfile
        }
    },
}
</script>

<style>
.ltr {
    direction: ltr;
}

.w-100 {
    width: 100% !important;
}

.w-50 {
    width: 50% !important;
}
</style>
