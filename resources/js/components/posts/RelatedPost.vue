<template>
    <v-img
        :src="data.img"
        max-height="320" min-height="320" class="d-flex align-end white--text">

        <v-card-title>{{ data.title }}</v-card-title>
        <v-card-actions>
            <v-avatar>
                <v-img
                    :src="data.user.avatar"></v-img>
            </v-avatar>
            <div class="mr-3">
                <div>{{ data.user.name }}</div>
                <div class="">{{ data.created_at }}</div>
            </div>
        </v-card-actions>
    </v-img>
</template>

<script>
export default {
    name: "RelatedPost",
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
