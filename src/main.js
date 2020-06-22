import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/store/index'
import 'swiper/css/swiper.min.css'
import './assets/font_rylbfwaawtq/iconfont.css'
import './static/iconfont/iconfont.css'
import 'lib-flexible'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
