import VueRouter from 'vue-router'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Home from '../pages/Home/Home.vue'
import Register from '../pages/Register/Register.vue'


const router = new VueRouter({
    routes: [
        {
            name: 'Login',
            path: '/login',
            component: Login,
            meta: {
                isShow: false
            }
        },
        {
            name: 'Search',
            path: '/search',
            component: Search,
            meta: {
                isShow: true
            }
        },
        {
            name: 'Home',
            path: '/home',
            component: Home,
            meta: {
                isShow: true
            }
        },
        {
            name: 'Register',
            path: '/register',
            component: Register,
            meta: {
                isShow: false
            }
        },
        {
            path: '/',
            redirect: '/home',
            meta: {
                isShow: true
            }
        }

    ]
})

export default router