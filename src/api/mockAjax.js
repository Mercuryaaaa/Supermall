// 对于axios进行二次封装
import axios from "axios";
// 引入nprogress进度条
import nprogress from "nprogress";
// console.log(nprogress);  //start 进度条开始  done 进度条结束
// 引入进度条样式
import "nprogress/nprogress.css"

// 利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径，发送请求的时候，路径当中会出现api
  baseURL:"/mock",
  // 请求超时的时间
  timeout: 5000,
})

// 请求拦截器：可以在发请求之前处理一些业务
requests.interceptors.request.use((config)=>{
  // config：配置对象，对象里面有一个属性（headers请求头）很重要
  // 进度条开始动
  nprogress.start()
  return config
})

// 响应拦截器：可以在服务器返回数据后处理一些事情
requests.interceptors.response.use((res)=>{
  // 请求成功的回调函数
  // 进度条结束
  nprogress.done()
  return res.data
},(error)=>{
  // 请求失败的回调函数
  return Promise.reject(new Error('file!'))
})



export default requests;