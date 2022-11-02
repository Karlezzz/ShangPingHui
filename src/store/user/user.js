import {
    reqLogin,
    reqLogout,
    reqRegisterCode,
    reqUserInfo,
    reqUserRegister
} from "@/api"
import {
    getToken,
    removeToken,
    setToken
} from "@/utils/token"

const state = {
    code: '',
    token: getToken() || '',
    userData: {}
}
const mutations = {
    GETREGISTERCODE(state, data) {
        state.code = data
    },
    GETUSERINFO(state, data) {
        state.userData = data
    },
    USERLOGOUT(state) {
        state.code = ''
        state.token = ''
        state.userData = {}
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
            setToken(result.data.token)
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
    },
    async userLogOut({
        commit
    }) {
        let result = await reqLogout()
        if (result.code === 200) {
            removeToken()
            commit("USERLOGOUT")
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