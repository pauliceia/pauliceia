import Api from '@/middleware/Api'

export default {
  login (credentials) {
    return Api().post('/auth/login', credentials)
  }
}