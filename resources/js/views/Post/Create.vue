<template>
<v-container>
    <v-row  class="mt-10 justify-center">
        <v-col cols="12" md="10">
           <v-text-field class="draft-text-field pr-4" field="عنوان متن" placeholder="عنوان متن" v-model="title" @input="updateDraft"></v-text-field>
        </v-col>
        <v-col cols="12" md="10">
           <tiptap v-model="content" :content="content"  @input="updateDraft" ref="tiptap" />
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
export default {
    name : 'Create',
     components: { Tiptap },
    data : ()=>({
     snackbar : {
        saved : {text : 'ذخیره پیش نویس موفقیت آمیز بود',status : false},
        error : {text : 'ذخیره پیش نویس موفقیت آمیز نبود',status : false},
    },
    title : '',
    content: '',
    requestType : 'post',
    requestUrl : '/api/posts/create'
    }),
    methods : {
     updateDraft : debounce(function(){
       
        axios[this.requestType](this.requestUrl,{
             title : this.title,
             content : this.content
        })
        .then(({data})=>{
          if(this.requestType === 'post'){
              history.replaceState({},'',data.link)
              this.requestUrl = `/api${data.link}`
          }
          this.requestType = 'patch'
          this.snackbar.saved.status = true
        })
        .catch(({response}) =>{
           this.snackbar.error.status = true
        })
     },2000)
         
     
    }, 

    created(){
       const link = this.$route.params.link
       if(link){
          this.requestType = 'patch',
          this.requestUrl = '/api/drafts/' + link
          axios.get(`/api/drafts/${link}`)
          .then(({data})=>{
               this.title = data.title,
               this.content = this.$refs.tiptap.editor.commands.setContent(data.content)
          })
          .catch(({response})=>{
             if(response.status === 404){
                this.$router.push({name : 'not-found'})
             }
                if(response.status === 403){
                this.$router.push({name : 'not-found'})
             }
          })
       }
    }
 
    
}
</script>
<style>

    .v-text-field.draft-text-field>.v-input__control>.v-input__slot:after, .v-text-field>.v-input__control>.v-input__slot:before {

    width: unset !important;
}
</style>