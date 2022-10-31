import {
    reqCartList,
    reqDeletCartById,
    reqUpdateCheckedById
} from "@/api"

const state = {
    cartList: []
}
const actions = {
    async getCartList({
        commit
    }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    async deleteCartListBySkuId({
        commit
    }, skuId) {
        let result = await reqDeletCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            Promise.reject(new Error('faile'))
        }
    },
    async updateCheckBySkuId({
        commit
    }, {
        skuId,
        isChecked
    }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    deletAllCheckedCart({
        dispatch,
        getters
    }) {
        let promiseAll = []
        getters.cartInfo.cartInfoList.forEach(item => {
            let promise =  item.isChecked === 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    },
    checkedAll({dispatch,getters},event){
        let promiseAll = []
        getters.cartInfo.cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckBySkuId',{
                skuId:item.skuId,
                isChecked: event.target.checked === true ? '1' : '0'
            })
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const getters = {
    cartInfo(state) {
        return state.cartList[0] || {}
    },
}
export default {
    state,
    actions,
    mutations,
    getters
}