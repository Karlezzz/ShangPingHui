import requests from "./request";
import mockRequests from "./request_mock"

export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqGetFloorList = () => mockRequests.get('/floor')

///api/list post
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

export const reqGoodsInfo = (skuId) => requests({
    method: 'get',
    url: `/item/${skuId}`,
})

export const reqAddOrUpdateShopCar = (skuId, skuNum) => requests({
    method: 'post',
    url: `/cart/addToCart/${skuId}/${skuNum}`
})

export const reqCartList = () => requests({
    url: "/cart/cartList",
    method: "get"
})

export const reqDeletCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'DELETE'
})

export const reqUpdateCheckedById = (skuID, isChecked) => requests({
    url: `/cart/checkCart/${skuID}/${isChecked}`,
    method: 'GET'
})

export const reqRegisterCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

export const reqUserRegister = (data)=>requests({
    url:'/user/passport/register',
    method:'post',
    data
})

export const reqLogin = (data) =>requests({
    url:'/user/passport/login',
    method:'post',
    data
})

export const reqUserInfo = () => requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
})

export const reqLogout=()=>requests({
    url:'/user/passport/logout',
    method:'get'
})

export const reqUserAddress= ()=>requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})

export const reqOrderInfo= ()=>requests({
    url:'/order/auth/trade',
    method:'get'
})