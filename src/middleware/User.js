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

  getUser(query){
    return Api().get('/api/user/?'+query)
  },

  register(user){
    return Api().post('/api/user/create', user)
  },

  validEmail(token) {
    return Api().get('/api/validate_email/'+token)
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
  },

  send_verification_code(user_email){
    return Api().put('/api/auth/password_forgot',
    {
      headers: {
        'Content-type': '`application`/json',
        'Accept': 'application/json; charset=UTF-8'
      },
      data: {
        'user_email': user_email
      }
    })
  },

  change_forgotten_password_by_user_id(user_id, new_password, verification_code){
    return Api().put('/api/auth/change_password_with_user_id',
    {
      headers: {
        'Content-type': '`application`/json',
        'Accept': 'application/json; charset=UTF-8'
      },
      data: {
        'user_id': user_id,
        'new_password': new_password,
        'verification_code': verification_code
      }
    })
  }
}
