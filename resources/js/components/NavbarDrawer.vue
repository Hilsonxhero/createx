<template>
    <v-navigation-drawer
        app
        temporary
        right
        :value="value"
         @input="changeDrawer"
        :close-on-content-click="false"

    >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                active-class="deep-purple--text text--accent-4"
            >
                <v-list-item v-for="(category,index) in $store.state.category.categories" :key="index">
                    <router-link :to="{name : 'post-category',params : {slug : category.slug}}" class="grey--text">{{ category.title }}
                    </router-link>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "NavbarDrawer",
    props : ['value'],
    data : ()=>({
        items: [
            {
                text: 'جدیدترین پست‌ها',
                class: 'white--text'
            },
            {
                text: 'پست‌های دوستان',
                class: 'white--text'
            },
            {
                text: 'استارتاپ',
                class: 'blue--text text--lighten-4'
            },
            {
                text: 'دلنوشته',
                class: 'blue--text  text--lighten-4'
            },
            {
                text: 'زندگی',
                class: 'blue--text  text--lighten-4'
            },
            {
                text: 'کتاب',
                class: 'blue--text  text--lighten-4'
            },
            {
                text: 'برنامه نویسی',
                class: 'blue--text  text--lighten-4'
            },
            {
                text: 'روانشناسی',
                class: 'blue--text  text--lighten-4'
            },
            {
                text: 'حال خوبتو',
                class: 'blue--text  text--lighten-4'
            },
            {
                text: 'با من تقسیم کن',
                class: 'blue--text  text--lighten-4'
            },
        ]
    }),
    methods :{
     changeDrawer(event){
      this.$emit('input',event)
     }
    },

    created() {
        this.$store.dispatch('category/getNavbarCategories')
    }

}
</script>

<style scoped>

</style>
