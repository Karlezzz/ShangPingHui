import {
    getToken
} from '@/utils/token'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            y: 0,
            behavior: 'smooth',
        }
    },

})
router.beforeEach((to, from, next) => {
    let token = getToken()
    let userName = store.state.user.name
    if (token) {
        if (to.path == '/login')
            next(from)
        else{
            if(userName)
                next()
            else{
                store.dispatch('getUserInfo')
                .then(next())
                .catch((error)=>{
                    store.dispatch('userLogOut')
                    .then(next('/login'))
                })
            }
        }
            
    } else {
        next()
    }
})

export default router