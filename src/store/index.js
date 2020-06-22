import Vue from 'vue';
import Vuex from 'vuex';
import Home from './modules/home'
import Cate from './modules/cart'
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        Home,
        Cate
    }
})