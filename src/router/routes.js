export default [{
        name: 'login',
        path: '/login',
        component: ()=>import('@/pages/Login/Login.vue'),
        meta: {
            isShow: false
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: ()=>import('@/pages/Search/Search.vue'),
        meta: {
            isShow: true
        }
    },
    {
        name: 'home',
        path: '/home',
        component: ()=>import('@/pages/Home/Home.vue'),
        meta: {
            isShow: true
        }
    },
    {
        name: 'register',
        path: '/register',
        component: ()=>import('@/pages/Register/Register.vue'),
        meta: {
            isShow: true
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
        component: ()=>import('@/pages/Detail/Detail.vue'),
        meta: {
            isShow: false
        }
    },
    {
        name: 'addCartSuccess',
        path: '/addCartSuccess',
        component: ()=>import('@/pages/AddCartSuccess/AddCartSuccess.vue'),
        meta: {
            isShow: true
        }
    },
    {
        name: 'shopCart',
        path: '/shopCart',
        component: ()=>import('@/pages/ShopCart/ShopCart.vue'),
        meta: {
            isShow: true
        }
    },
    {
        name: 'tarde',
        path: '/trade',
        component: ()=>import('@/pages/Trade/Trade'),
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
        component: ()=>import('@/pages/Pay/Pay.vue'),
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
        component: ()=>import('@/pages/PaySuccess/PaySuccess.vue'),
        meta: {
            isShow: true
        },
    },
    {
        name: 'center',
        path: '/center',
        component: ()=>import('@/pages/Center/Center.vue'),
        meta: {
            isShow: true
        },
        children: [{
                path: 'myOrder',
                component: ()=>import('@/pages/Center/myOrder/MyOrder.vue')
            },
            {
                path: 'groupOrder',
                component: ()=>import('@/pages/Center/groupOrder/GroupOrder')
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            }
        ]
    },
]