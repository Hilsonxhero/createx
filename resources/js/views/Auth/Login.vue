<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="8" class="auth-bg-hui d-flex flex-column align-center justify-center"
                   :class="$vuetify.breakpoint.mdAndUp ? 'min-h-100vh' : 'min-h-00vh'"
            >
                <div>
                    <Logo/>
                </div>


                <span class="white--text" :class="$vuetify.breakpoint.mdAndUp ? 'display-1 mt-4' : 'title'">اینجا هر کسی می‌تونه بنویسه!</span>
                <span class="mt-7 font-weight-bold hidden-sm-and-down">همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.</span>
            </v-col>
            <v-col cols="12" md="4" class="d-flex align-end">

                <div class="w-100 mx-5">
                    <span class="blue--text font-weight-bold ">ورود به حساب کاربری</span>
                    <v-form
                        ref="form"
                        lazy-validation
                    >

                        <v-text-field
                            v-model="form.login"
                            label="آدری ایمیل یا شماره تلفن"
                            type="email"
                            outlined
                            rounded
                            class="mt-9"
                            :error-messages="errors.email"
                            :rules="[required]"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            label="رمز عبور"
                            type="password"
                            outlined
                            rounded
                            :error-messages="errors.password"
                            :rules="[required,lessThan(3,'رمز عبور')]"
                        ></v-text-field>
                        <div class="d-flex justify-end">
                            <router-link :to="{name : 'reset-email-password'}" class="grey--text bod-2">فراموشی رمز عبور</router-link>
                            <v-spacer></v-spacer>
                            <v-btn color="info" rounded @click="login" :loading="loading">
                                ایجاد حساب کاربری
                                <v-icon class="mr-1">mdi-chevron-left</v-icon>
                            </v-btn>
                        </div>

                    </v-form>

                    <div class="d-flex flex-column mt-9 gray--text text-center justify-center body-2">
                        <span class="my-2">ورود با اکانت <router-link class="my-2 error--text" :to="{name : 'login'}">گوگل</router-link></span>
                        <span class="my-2">ثبت نام به منزله موافقت با قوانین است</span>
                        <router-link class="my-2" :to="{name : 'register'}">رفتن به صفحه ثبت نام</router-link>
                    </div>
                </div>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Logo from "@/components/Logo/";

export default {
    name: "Login",
    data: () => ({
        form: {
            login: '',
            password: '',
            remember : true
        },
        errors: {
            email: null,
            password: null,
        },
        loading : false
    }),
    methods: {
        login() {
            if (this.$refs.form.validate()){
                this.loading = true
                this.$store.dispatch('user/login', this.form)
                    .then(() => {
                        this.$router.push({name: 'home'})
                    })
                    .catch(error => {
                        this.errors.email = error.response.data.errors.email[0]
                        this.errors.password = error.response.data.errors.password[0]
                    })
                .finally(()=>{
                    this.loading = false
                })
            }
        },
        required(value) {
            return !!value || 'این فیلد الزامی است'
        },
        lessThan(length, field) {
            return value => (value ? value.length >= length : false) || `فیلد ${field} نباید کمتر از ${length} کارکتر باشد`
        },
        moreThan(length, field) {
            return value => (value ? value.length <= length : false) || `فیلد ${field} نباید بیشتر از ${length} کارکتر باشد`
        },
        checkEMail(value) {
            return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) || 'فرمت ایمیل نا معتبر'
        }
    },
    components: {Logo}
}
</script>

<style>
.w-100 {
    width: 100%;
}
</style>
