import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Home from '../pages/Home/Home.vue'
import Register from '../pages/Register/Register.vue'
import Detail from '../pages/Detail/Detail.vue'
export default [{
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            isShow: false
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: {
            isShow: true
        }
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
            isShow: true
        }
    },
    {
        name: 'register',
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
    },
    {
        path: '/detail/:skuid',
        name: 'detail',
        component: Detail,
        meta: {
            isShow: false
        }
    }

]

