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

Vue.component(Pagination.name,Pagination)
Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name, TypeNav)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')