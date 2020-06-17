import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'swiper/css/swiper.min.css'
import './assets/font_rylbfwaawtq/iconfont.css'
Vue.config.productionTip = false
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
