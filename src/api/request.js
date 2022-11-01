import axios from 'axios';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
import store from '../store/index.js'

const requests = axios.create({
    baseURL: '/api',
    timeout: 10000,
})

requests.interceptors.request.use((config) => {
    if(store.state.detail.nanoid_token){
        config.headers.userTempId = store.state.detail.nanoid_token
    }
    if(sessionStorage.getItem('TOKEN')){
        config.headers.token = sessionStorage.getItem('TOKEN')
    }
    nProgress.start()
    return config
})

requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

export default requests