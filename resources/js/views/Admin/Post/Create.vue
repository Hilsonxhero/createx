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
        <v-col cols="8">
            <v-card>
                <v-form ref="createUser">
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="form.name" counter="25" :error-messages="errors.name" :rules="[required('فیلد نام الزامی است')]" hint="This field uses counter prop" label="نام"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="form.username" :error-messages="errors.username" :rules="[required('فیلد نام کاربری الزامی است')]" counter="25" hint="This field uses counter prop" label="نام کاربری"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="form.email" :error-messages="errors.email" :rules="[required('فیلد ایمیل الزامی است'),verifyEmail()]" counter="25" hint="This field uses counter prop" label="ایمیل"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="form.password" :error-messages="errors.password" :rules="[required('فیلد رمز عبور الزامی است')]" counter="25" hint="This field uses counter prop" label="رمز عبور"></v-text-field>
                            </v-col>
                            <v-col cols="12 mt-5">
                                <v-btn outlined color="primary" @click="save">ثبت</v-btn>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-form>
            </v-card>

        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    required,
    verifyEmail,
    lessThan,
    moreThan,
    verifyUsername
} from "@/rules";
export default {
    name: "Create",
    data() {
        return {
            breadcrumbs: [{
                    text: 'داشبورد',
                    disable: false,
                    href: '/dashboard',
                },
                {
                    text: 'کاربران',
                    href: '/dashboard/users',
                },
                {
                    text: 'کاربر جدید',
                    disable: true,
                },
            ],
            form: {
                name: '',
                username: '',
                email: '',
                password: '',
            },
            errors: {
                name: '',
                username: '',
                email: '',
                password: '',
            },
            required,
            verifyEmail
        }
    },
    methods: {
        save() {
            if (this.$refs.createUser.validate()) {
                axios.post('/api/admin/users', this.form)
                    .then(({
                        data
                    }) => {
                        this.$router.push({
                            name: 'admin-users-index'
                        })
                    })
                    .catch(({
                        response
                    }) => {
                        if (response.data.errors.username.length) {
                            this.errors.username = response.data.errors.username[0]
                        }
                        if (response.data.errors.email.length) {
                           this.errors.email = response.data.errors.email[0]
                        }
                        if (response.data.errors.name.length) {
                           this.errors.name = response.data.errors.name[0]
                        }
                        if (response.data.errors.password.length) {
                            this.errors.password = response.data.errors.password[0]
                        }




                    })
            }

        }
    }
}
</script>
