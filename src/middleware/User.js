import Api from '@/middleware/ApiVGI'

export default {

  login (credentials) {
    return Api().get('/api/auth/login',
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-type': 'application/json',
          'Accept': 'application/json; charset=UTF-8'
        }
      })
  },

  loginGoogle (code) {
    return Api().get('/api/auth/google/'+code)
  },

  getUser(query){
    return Api().get('/api/user/?'+query)
  },

  register(user){
    return Api().post('/api/user/create', user)
  },

  getUserByToken(token) {
    return Api().get('/api/user_by_token/',
    {
      headers: {
        'Authorization': token,
        'Content-type': 'application/json',
        'Accept': 'application/json; charset=UTF-8'
      }
    })
  }
}
