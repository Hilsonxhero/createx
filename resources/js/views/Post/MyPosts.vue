<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex flex-row">
                        <span class="title font-weight-bold">نوشته های شما</span>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" outlined>نوشتن پست جدید</v-btn>
                    </div>

                    <v-tabs class="mt-7" v-model="menu">
                        <v-tab href="#drafts">پیش نویس ها</v-tab>
                        <v-tab href="#posts">مطالب منتشر شده</v-tab>
                    </v-tabs>
                    <v-divider></v-divider>
                    <v-tabs-items v-model="menu">
                        <v-tab-item value="drafts" v-for="item in 5" :key="item">
                            <div>
                                <h2 class="mt-4 mb-2">بدون عنوان</h2>
                                <div class="d-flex flex-row">
                                 <p class="body-2 grey--text">آخرین ویرایش :  2 هفته پیش</p>
                                    <v-spacer></v-spacer>
                                    <v-btn icon color="info" class="ml-3">
                                        <v-icon>mdi-file-document-edit</v-icon>
                                    </v-btn>
                                    <v-btn icon color="error">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>

                                </div>
                                <v-divider class="mt-5"></v-divider>
                            </div>
                        </v-tab-item>
                        <v-tab-item value="posts">
                            posts
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
export default {
    name: "MyPosts",
    data: () => ({
        menu: 'drafts'
    })
}
</script>

<style scoped>

</style>
