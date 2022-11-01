import {
    reqLogin,
    reqRegisterCode,
    reqUserInfo,
    reqUserRegister
} from "@/api"

const state = {
    code: '',
    token: sessionStorage.getItem('TOKEN') || '',
    userData: {}
}
const mutations = {
    GETREGISTERCODE(state, data) {
        state.code = data
    },
    GETUSERINFO(state, data) {
        state.userData = data
    }
}
const actions = {
    async getRegisterCode({
        commit
    }, phone) {
        let result = await reqRegisterCode(phone)
        if (result.code === 200) {
            commit("GETREGISTERCODE", result.data)
        }
    },
    async userRegister({
        commit
    }, data) {
        let result = await reqUserRegister(data)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    },
    async userLogin({
        commit
    }, data) {
        let result = await reqLogin(data)
        if (result.code === 200) {
            sessionStorage.setItem("TOKEN", result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    },
    async getUserInfo({
        commit
    }) {
        let result = await reqUserInfo()
        if (result.code === 200) {
            commit('GETUSERINFO', result.data)
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