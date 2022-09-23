import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import TypeNav from './pages/Home/TypeNav/TypeNav.vue'
Vue.component('TypeNav', TypeNav)

Vue.use(VueRouter)
Vue.config.productionTip = false

import { reqCategoryList } from './api'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
