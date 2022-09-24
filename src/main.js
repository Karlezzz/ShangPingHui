import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import TypeNav from './components/TypeNav/TypeNav.vue'
import store from './store'

Vue.component('TypeNav', TypeNav)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')