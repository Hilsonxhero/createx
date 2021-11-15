<template>
    <v-img
        :src="data.banner_src"
        max-height="320"
        min-height="320"
        class="d-flex align-end white--text card-overlay-bottom card-bg-scale"
        gradient="to bottom,rgba(0,0,0,.1), rgba(0,0,0,.8)"
    >
        <router-link :to="{ name: 'post-show', params: { slug: data.slug } }">
            <v-card-title class="white--text">{{ data.title }}</v-card-title>
        </router-link>

        <v-card-actions>
            <v-avatar>
                <v-img :src="data.user.profile_src"></v-img>
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
};
</script>
