import Api from '@/middleware/ApiVGI'

export default {
  login (credentials) {
    return Api().post('/auth/login', credentials)
  }
}