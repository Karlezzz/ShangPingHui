import requests from "./request";
import mockRequests from "./request_mock"

export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqGetFloorList = () => mockRequests.get('/floor')