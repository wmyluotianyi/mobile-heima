// import axios from 'axios'
// import JSONBIGINT from 'json-bigint'

// // 后台接口基础地址
// const BASE_URL = 'http://ttapi.research.itcast.cn/app/v1_0/'
// // 创建axios实例
// const MyAxios = axios.create({
//   baseURL: BASE_URL,
//   transformResponse: [function (data) {
//     // Do whatever you want to transform the data
//     // data =>后台返回的JSON字符串
//     try {
//       // 处理JSON.parse/stringify精度丢失
//       return JSONBIGINT.parse(data)
//     } catch (e) {
//       return data
//     }
//   }]

// })

// // Add a request interceptor
// MyAxios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   // 处理接口版本问题
//   if (config.url === 'articles') {
//     config.baseURL = config.baseURL.replace('v1_0', 'v1_1')
//   }
//   return config
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error)
// })

// export default MyAxios
