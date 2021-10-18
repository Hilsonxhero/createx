<template>
<v-container>
    <v-row class="mt-10 justify-center">
        <v-col cols="12" md="5">
            <h4 class="blue--text">پیش نمایش پست</h4>
            <div class="body-1 grey--text my-4">
                می‌توانید از این بخش نحوه نمایش پست خود را در صفحات مختلف مانند صفحه اصلی ویرگول یا پروفایلتان تغییر دهید.

            </div>
            <v-sheet
             color="grey"
             height="250"
             max-height="250"
             width="100%"

             class="d-flex flex-column align-center justify-center lighten-4 font-weight-light c-pointer"
             @click="$refs.preview.click()"
           >
           <v-img v-if="form.banner" :src="form.banner" height="250" width="100%"></v-img>
           <div v-if="!form.banner">شما هنوز تصویری آپلود نکردید</div>
           <input type="file" class="d-none" ref="preview" @change="updateProfile">
           </v-sheet>

        <div class="my-4">
            <v-text-field
            placeholder="عوان پست"
            value=""
            hint=""
            v-model="form.title"
          ></v-text-field>
        </div>
        <div>
            <v-text-field
            placeholder="توضیحات پست"
            value=""
            hint=""
            counter
            maxlength="200"
             v-model="form.dec"
          ></v-text-field>
        </div>
        </v-col>
        <v-col cols="12" md="5">
            <h4 class="blue--text">پست خود را ساده‌تر به دست خوانندگان برسانید</h4>
            <div class="body-1 grey--text my-4">
                حداکثر ۵ تگ به پست خود اضافه کنید تا خوانندگان راحت‌تر بفهمند مطلبتان در چه مورد است.
            </div>
            <v-combobox
                v-model="form.categories"
                hide-selected
                hint="حداکثر 5 دسته بندی"
                label="دسته بندی ها"
                multiple
                persistent-hint
                small-chips
            >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              تگها را با  <kbd>Enter</kbd> از هم جدا کنید.
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-combobox>

    <div class="d-flex justify-end mt-15">
        <v-btn color="primary" outlined @click="savePost" >انتشار پست</v-btn>
    </div>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import {ref,watch} from '@vue/composition-api'
import uploadBase64 from "@/modules/file/uploadBase64";
import Input from '../../../../vendor/laravel/breeze/stubs/inertia-vue/resources/js/Components/Input.vue';
export default {
  components: { Input },
     name : 'SavePost',
     setup(props,{emit,root}){

           const form = ref({
            banner: null,
            banner_name : null,
            title : null,
            content : null,
            dec : null,
            categories : [] 
          })

          root.$store.dispatch('draft/getDraft',root.$route.params.link)
          .then((data)=>{
              form.value.title= data.title
              form.value.content= data.content
          })

        const updateProfile = (event) => {
            form.value.banner_name = event.target.files[0].name
            form.value.banner  = uploadBase64(event)

        }

        const savePost = ()=>{
          root.$store.dispatch('post/savePost',form.value)
          
           .then(({data})=>{
               root.$router.push({name : 'post-show',params : {slug : data.data.slug}})
           })
        }

          watch(
              () => form.value.categories,
               (value)=>{
                  if(value.length > 5){
                      form.value.categories.pop()
                  }
              }
          )

          return {
              form,
              updateProfile,
              savePost
          }
     }, 
}
</script>
<style>

    .c-pointer{
        cursor: pointer;
    }
</style>