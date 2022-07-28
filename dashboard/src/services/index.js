import router from '../router'
import axios from 'axios'
import AuthService from './auth'
import UsersService from './users'
import { setGlobalLoading } from '@/store/global'
import FeedbacksService from './feedbacks'

const API_ENVS = {
  production: 'https://backend-treinamento-vue3-sage.vercel.app/',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] ?? API_ENVS.local
})

httpClient.interceptors.request.use(config => {
  setGlobalLoading(true)
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

httpClient.interceptors.response.use((response) => {
  setGlobalLoading(false)
  return response
}, (error) => {
  const canThorowAnError = error.request.status === 0 ||
  error.request.status === 500

  if (canThorowAnError) {
    setGlobalLoading(false)
    throw new Error(error.message)
  }
  if (error.request.status === 401) {
    router.push({ name: 'Home' })
  }
  setGlobalLoading(false)
  return error
})

export default {
  auth: AuthService(httpClient),
  users: UsersService(httpClient),
  feedbacks: FeedbacksService(httpClient)
}
