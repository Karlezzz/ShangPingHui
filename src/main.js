import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import TypeNav from './components/TypeNav/TypeNav.vue'
import store from './store'
import './mock/mockServer'
import 'swiper/css/swiper.css'
import Carousel from '@/components/Carousel/Carousel.vue'


Vue.component(Carousel.name, Carousel)
Vue.component(TypeNav.name, TypeNav)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')