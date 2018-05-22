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
    return Api().put('/api/user/create', user)
  }

}