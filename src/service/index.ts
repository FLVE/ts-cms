import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: Number(process.env.VUE_APP_TIME_OUT),
  interceptors: {
    requestInterceptor(config) {
      const token = ''
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch(error) {
      console.log('请求失败拦截')
      return error
    },
    responseInterceptor(result) {
      console.log('响应成功拦截')
      return result
    },
    responseInterceptorCatch(error) {
      console.log('响应失败拦截')
      return error
    }
  }
})

export default hyRequest
