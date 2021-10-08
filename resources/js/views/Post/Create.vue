<template>
<v-container>
    <v-row  class="mt-10 justify-center">
        <v-col cols="12" md="10">
           <tiptap v-model="content" :content="content" />
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import Tiptap from '../../components/Tiptap.vue'
export default {
    name : 'Create',
    data : ()=>({
    counter : 11,
    content: '<p>www</p>',
    }),
  components: { Tiptap },
    
}
</script>
<style lang="">
    
</style>