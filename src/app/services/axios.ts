import axiosInstance from '../interceptors/axios.interceptor'

const getUser = async () => {
  return await axiosInstance.get(`l/character/2`)
}

export default getUser
