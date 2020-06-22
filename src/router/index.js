import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes
})
let user = JSON.parse(localStorage.getItem('user-keys')) 


export default router;