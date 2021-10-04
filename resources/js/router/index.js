import Vue from 'vue'
import VueRouter from "vue-router";
import routes from "./routes";
import store from '@/store/'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: routes

});

router.beforeEach((to, from, next) => {
    if (to.meta.guest && store.state.user.isLoggedIn) {
        next('/')
    }
    next()
})
export default router
