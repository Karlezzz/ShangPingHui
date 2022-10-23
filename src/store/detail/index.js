import {
    reqAddOrUpdateShopCar,
    reqGoodsInfo
} from "@/api"
const state = {
    goodInfo: {}
}
const actions = {
    async getGoodsInfo({
        commit
    }, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code === 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
    async addOrUpdateShopCar({commit},{skuid,skuNum}){
        let result = await reqAddOrUpdateShopCar(skuid,skuNum)
        if(result.code===200){
            return '成功'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    
}
const mutations = {
    GETGOODSINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList || []
    }
  
}
export default {
    state,
    actions,
    mutations,
    getters
}