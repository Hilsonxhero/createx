<template>
<v-container>
    <v-row  class="mt-10 justify-center">
        <v-col cols="12" md="10" class="d-flex flex-row align-center">
           <v-text-field class="draft-text-field pr-4" field="عنوان متن" placeholder="عنوان متن" v-model="title" @input="updatePost"></v-text-field>
           <v-spacer></v-spacer>
           <v-btn color="primary" class="mt-5" v-if="showSavingPost" @click="savePost">ویرایش نوشته</v-btn>
        </v-col>
        <v-col cols="12" md="10">
           <tiptap v-model="content" :content="content"  @input="updatePost" ref="tiptap" />

           
        </v-col>

      <v-snackbar
      v-model="snackbar.saved.status"
      :timeout="1500"
      color="success"
    >
      {{ snackbar.saved.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar.saved.status = false"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>


      <v-snackbar
      v-model="snackbar.error.status"
      :timeout="1500"
       color="error"
    >
      {{ snackbar.error.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar.error.status = false"
        >
          بستن
        </v-btn>
      </template>
    </v-snackbar>
    </v-row>
</v-container>
</template>
<script>
import {debounce} from 'lodash'
import Tiptap from '@/components/Tiptap.vue'
import {ref,computed} from '@vue/composition-api'
export default {
    name : 'Create',
    components: { Tiptap },
    setup(props,{emit,root}){
    const snackbar = ref(
      {
        saved : {text : 'ویرایش نوشته موفقیت آمیز بود',status : false},
        error : {text : 'ویرایش نوشته موفقیت آمیز نبود',status : false},
      }
    )
     const tiptap = ref(null)
     const title = ref('')
     const content= ref('')

     const showSavingPost = computed(()=>{
        return title.value && content.value
     })

      const updatePost = debounce(function(){
         updatePostStore()

        .then(({data})=>{
          snackbar.value.saved.status = true
        })
        .catch(({response}) =>{
           snackbar.value.error.status = true
        })
       },2000)
        
        const savePost = () =>{
         updatePost.cancel()
         updatePostStore()
         .then(({data})=>{
         root.$router.push(`/post/${root.$route.params.slug}/update`)
         })
        }

        const updatePostStore = () =>{
         return root.$store.dispatch('post/updatePost',{
           title : title.value,
           content : content.value,
           slug : root.$route.params.slug
         })
         }


          axios.get(`/api/post/${root.$route.params.slug}/edit`)
          .then(({data})=>{
               title.value = data.title,
               content.value = data.content 
               tiptap.value.editor.commands.setContent(data.content)
          })
       
     return {
      updatePost,
      savePost,
      updatePostStore,
      showSavingPost,
      snackbar,
      title,
      content,
      tiptap
     }
    },
  
}
</script>
<style>

    .v-text-field.draft-text-field>.v-input__control>.v-input__slot:after, .v-text-field>.v-input__control>.v-input__slot:before {

    width: unset !important;
}
</style>