import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://toko.ox-sys.com'
})

httpClient.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response) {
      const {status} = err.response
      if (status === 401) {
        window.location.replace('/login')
      }
    }
    return Promise.reject(err)
  }
)

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  const cfg = {...config}
  
  if (token) {
    cfg.headers['Authorization'] = `Bearer ${token}`
  } else {
    delete cfg.headers['Authorization']
  }
  
  return config
})

export const httpGet = params =>
  httpClient({
    method: 'get',
    ...params
  })

export const httpPost = params =>
  httpClient({
    method: 'post',
    ...params
  })

export const httpPut = params =>
  httpClient({
    method: 'put',
    ...params
  })

export const httpPatch = params =>
  httpClient({
    method: 'patch',
    ...params
  })

export const httpDelete = params =>
  httpClient({
    method: 'delete',
    ...params
  })

export default httpClient