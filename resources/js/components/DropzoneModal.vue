<template>
    <v-dialog
      v-model="imageModal"
      width="700"
    >
       <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          اپلود تصویر
        </v-card-title>

        <v-card-text>
               <vue-dropzone id="dropzone" ref="dropzone" :options="dropzoneOptions" @vdropzone-success="upload"></vue-dropzone>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="imageModal = false"
          >
            بستن
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import VueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { ref } from "@vue/composition-api";
export default {
    name : 'DropzoneModal',
      components : {
        VueDropzone
    },
    setup(props,{emit}){
       const dropzone = ref(null)
       const imageModal = ref(false)
       const editor = ref(null)
        
      const dropzoneOptions = ref({
        url :'/api/upload-post-img',
        maxFiles : 1,
        dictDefaultMessage: 'آپلود تصویر',
        headers : {
          'X-CSRF-TOKEN' : window.csrf_token
        }
      })

      const upload = (file,response) => {
        const data  = {
            attrs : {
              src: response.data
            }
        }
        emit('image',data)
        imageModal.value = false
        dropzone.value.removeFile(file)
      }

      const openModal =() =>{
        imageModal.value = true
      }

       return {
         imageModal,
         editor,
         dropzoneOptions,
         upload,
         openModal,
         dropzone
       }
    },
}
</script>