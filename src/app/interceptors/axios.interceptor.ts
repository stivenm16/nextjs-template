import axios, { InternalAxiosRequestConfig } from 'axios'
import { getValidationError } from '../utils/get-validation-error'
const updateHeader = (request: InternalAxiosRequestConfig<any>) => {
  request.headers['Content-Type'] = 'application/json'
  return request
}
const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

axiosInstance.interceptors.request.use((request) => {
  return updateHeader(request)
})

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('response', response)

    return response
  },
  (error) => {
    console.log(getValidationError(error.code))
    return Promise.reject(error)
  },
)

export default axiosInstance
