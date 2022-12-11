import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service/index'

import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'get',
    showLoading: false
  })
  .then((res) => {
    console.log('request')
    console.log(res.data)
  })

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log('GET')
    console.log(res.data)
  })

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'get',
//   isShowLoading: true,
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独拦截config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('响应单独拦截')
//       return res
//     }
//   }
// })
