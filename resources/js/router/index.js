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
        next({name: 'home'})
    }
    if (to.meta.auth && !store.state.user.isLoggedIn) {
        next({name: 'login'})
    }
    next()
})
export default router
