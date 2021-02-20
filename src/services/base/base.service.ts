import axios, { AxiosInstance } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: ''
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    'JsonStub-User-Key': '1d9c4d38-2b77-4e69-80a3-2154b8df58b2',
    'JsonStub-Project-Key': '8ec15eff-dd88-4929-ba44-68245aac508a'
  }
  return config
})
