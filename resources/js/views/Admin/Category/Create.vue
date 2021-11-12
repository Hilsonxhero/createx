<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5"
                        >ایجاد دسته بندی جدید</v-toolbar-title
                    >
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
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

                                <v-col cols="12 mt-5">
                                    <v-btn
                                        outlined
                                        color="primary"
                                        @click="save"
                                        >ثبت</v-btn
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
    name: "Create",
    data() {
        return {
            breadcrumbs: [
                {
                    text: "داشبورد",
                    disable: false,
                    href: "/dashboard"
                },
                {
                    text: "دسته بندی ها",
                    href: "/dashboard/categories"
                },
                {
                    text: "دسته بندی جدید",
                    disable: true
                }
            ],
            form: {
                title: "",
                slug: ""
            },
            errors: {
                title: "",
                slug: ""
            },
            required,
            verifyEmail
        };
    },
    methods: {
        save() {
            if (this.$refs.createUser.validate()) {
                axios
                    .post("/api/admin/categories", this.form)
                    .then(({ data }) => {
                        this.$router.push({
                            name: "admin-categories-index"
                        });
                    })
                    .catch(({ response }) => {
                        if (response.data.errors.title.length) {
                            this.errors.title = response.data.errors.title[0];
                        }
                        if (response.data.errors.slug.length) {
                            this.errors.slug = response.data.errors.slug[0];
                        }
                    });
            }
        }
    }
};
</script>
