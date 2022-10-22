import VueRouter from 'vue-router'
import routes from './routes'

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

export default router