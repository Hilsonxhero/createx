<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <div>
                    <v-toolbar-title class="text-h5 font-weight-bold mt-5">داشبورد</v-toolbar-title>
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

        ],
    })
}
</script>

<style scoped>

</style>
