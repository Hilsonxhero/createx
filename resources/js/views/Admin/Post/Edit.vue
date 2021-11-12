<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >ویرایش کاربر</v-toolbar-title
                    >
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
                                    <v-text-field
                                        v-model="form.title"
                                        :error-messages="errors.title"
                                        :rules="[
                                            required('فیلد عنوان الزامی است')
                                        ]"
                                        label="عنوان"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field
                                        v-model="form.slug"
                                        :error-messages="errors.slug"
                                        :rules="[
                                            required(
                                                'فیلد نام لاتین کاربری الزامی است'
                                            )
                                        ]"
                                        label="نام لاتین"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12 mt-5">
                                    <v-btn
                                        outlined
                                        color="primary"
                                        @click="update"
                                        >ویرایش</v-btn
                                    >
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
    name: "Edit",
    data() {
        return {
            breadcrumbs: [
                {
                    text: "داشبورد",
                    disable: false,
                    href: "/dashboard"
                },
                {
                    text: "کاربران",
                    href: "/dashboard/users"
                },
                {
                    text: "ویرایش پست ",
                    disable: true
                }
            ],
            form: {
                title: "",
                slug: ""
            },
            errors: {
                id: null,
                title: "",
                slug: ""
            },
            required,
            verifyEmail
        };
    },

    created() {
        axios
            .get(`/api/admin/posts/${this.$route.params.id}`)
            .then(({ data }) => {
                this.form.title = data.title;
                this.form.slug = data.slug;
            });
    },
    methods: {
        update() {
            if (this.$refs.createUser.validate()) {
                axios
                    .patch(
                        `/api/admin/[users]/${this.$route.params.id}`,
                        this.form
                    )
                    .then(({ data }) => {
                        this.$router.push({
                            name: "admin-users-index"
                        });
                    })
                    .catch(({ response }) => {
                        if (response.data.errors.username.length) {
                            this.errors.username =
                                response.data.errors.username[0];
                        }
                        if (response.data.errors.email.length) {
                            this.errors.email = response.data.errors.email[0];
                        }
                        if (response.data.errors.name.length) {
                            this.errors.name = response.data.errors.name[0];
                        }
                        if (response.data.errors.password.length) {
                            this.errors.password =
                                response.data.errors.password[0];
                        }
                    });
            }
        }
    }
};
</script>
