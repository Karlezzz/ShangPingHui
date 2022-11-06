import Vue from 'vue'
import App from './App.vue'
import TypeNav from './components/TypeNav/TypeNav.vue'
import Pagination from './components/Pagination/Pagination.vue'
import Carousel from './components/Carousel/Carousel.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import store from './store'
import './mock/mockServer'
import 'swiper/css/swiper.css'
import * as API from './api/index'
import 'element-ui/lib/theme-chalk/index.css';
import { MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import '@/plugins/validate'

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

Vue.component(Pagination.name, Pagination)
Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name, TypeNav)
Vue.use(VueRouter)

Vue.use(VueLazyload,{
  
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API
  }
}).$mount('#app')