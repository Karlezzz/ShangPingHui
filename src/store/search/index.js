import { reqGetSearchInfo } from "@/api"
const state = {
    searchList: {}
}
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        console.log(result.data);
        if (result.code == 200) {
            commit("SEARCHLIST", result.data)
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}