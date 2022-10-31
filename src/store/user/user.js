import {
    reqLogin,
    reqRegisterCode,
    reqUserRegister
} from "@/api"

const state = {
    code: '',
    token: ''
}
const mutations = {
    GETREGISTERCODE(state, data) {
        state.code = data
    },
    USERLOGIN(state, data) {
        state.token = data
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
            commit('USERLOGIN', result.data.token)
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