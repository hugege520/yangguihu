import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// 1. 生成Axios的伪实例, 能够使用Axios实例的属性，但不是Axios的实例
const server = axios.create({
    // baseURL: '/api', // H5
    baseUrl: 'mock',
    timeout: 10000, // 设置超时时间
})

// 2. 添加请求拦截器：1. 批量修改请求参数， 2. 批量添加请求参数
server.interceptors.request.use(config => {
    NProgress.start() 
    // post请求参数默认为json对象形式： {a:xxx,b:yyy}, 但当前服务器识别urlcoding形式： a=xxx&b=yyy
    if (config.method.toUpperCase() === 'POST' && (config.data instanceof Object)) {
        config.data = qs.stringify(config.data)
    }
    return config;
})

// 3. 设置响应拦截器

server.interceptors.response.use(
    response =>{
        NProgress.done()
        return response.data;
        
    },
    error => {
        NProgress.done()
        return new Promise(() => {}) // 手动返回状态pending的promise实例，避免在错误情况下进入下一个成功的回调
    }
)


export default server