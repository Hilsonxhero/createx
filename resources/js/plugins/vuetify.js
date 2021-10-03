import Vue from 'vue'
import Vuetify from 'vuetify'
import "@mdi/font/css/materialdesignicons.min.css"

Vue.use(Vuetify,{

});


const vuetify = new Vuetify({
    rtl: true,
    theme: {
        dark: false
    }
});

export default vuetify
