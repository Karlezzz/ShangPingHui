import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
import search from './search'
import login from './login'
import register from './register'
import detail from './detail'

export default new Vuex.Store({
    modules: {
        home,
        search,
        login,
        register,
        detail
    }
})