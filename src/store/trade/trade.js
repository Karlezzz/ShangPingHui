import {
    reqUserAddress,
    reqOrderInfo
} from '@/api/index'
const state = {
    userAddress: [],
    tradeInfo : {}
}
const mutations = {
    GETUSERADRESS(state, data) {
        state.userAddress = data
    },
    GETORDERINFO(state,data){
        state.tradeInfo = data
    }
}
const actions = {
    async getUserAdress({
        commit
    }) {
        let result = await reqUserAddress()
        if (result.code === 200) {
            commit("GETUSERADRESS", result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(data.message))
        }
    },
    async getOrderInfo({
        commit
    }) {
        let result = await reqOrderInfo()
        if (result.code === 200) {
            commit("GETORDERINFO", result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}