import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Home from '../pages/Home/Home.vue'
import Register from '../pages/Register/Register.vue'
import Detail from '../pages/Detail/Detail.vue'
import AddCartSuccess from '../pages/AddCartSuccess/AddCartSuccess.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Trade from '../pages/Trade/Trade.vue'
import Pay from '../pages/Pay/Pay.vue'
import PaySuccess from '../pages/PaySuccess/PaySuccess.vue';
import Center from '../pages/Center/Center.vue';
import MyOrder from '../pages/Center/myOrder/MyOrder.vue'
import GroupOrder from '../pages/Center/groupOrder/GroupOrder.vue'

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
    },
    {
        name: 'addCartSuccess',
        path: '/addCartSuccess',
        component: AddCartSuccess,
        meta: {
            isShow: true
        }
    },
    {
        name: 'shopCart',
        path: '/shopCart',
        component: ShopCart,
        meta: {
            isShow: true
        }
    },
    {
        name: 'tarde',
        path: '/trade',
        component: Trade,
        meta: {
            isShow: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopCart'||from.path=='/'){
                next()
            }
            else console.log(2);
        }
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        meta: {
            isShow: true
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'||from.path=='/')next()
            else next(false)
        }
    },
    {
        name: 'paySuccess',
        path: '/paySuccess',
        component: PaySuccess,
        meta: {
            isShow: true
        },
    },
    {
        name: 'center',
        path: '/center',
        component: Center,
        meta: {
            isShow: true
        },
        children: [{
                path: 'myOrder',
                component: MyOrder
            },
            {
                path: 'groupOrder',
                component: GroupOrder
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            }
        ]
    },
]