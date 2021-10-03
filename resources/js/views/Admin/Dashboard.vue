<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5">کد تخفیف</v-toolbar-title>
                    <v-breadcrumbs
                        :items="breadcrumbs"
                        large
                    ></v-breadcrumbs>
                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data: () => ({
        breadcrumbs: [
            {
                text: 'داشبورد',
                disabled: false,
                href: '/dashboard',
            },
            {
                text: 'کد تخفیف',
                disabled: true,
            }
        ],
    })
}
</script>

<style scoped>

</style>
