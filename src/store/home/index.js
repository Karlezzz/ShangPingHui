import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNER(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOOR(state, floorList) {
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    },

    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit("BANNER", result.data)
        }
    },

    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit("FLOOR", result.data)
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