import Api from '@/middleware/ApiVGI'

export default {

  login (token) {
    return Api().get('/auth/login',
      { 
        headers: { 
          'Authorization': `Basic ${token}`,
          'Content-type': 'application/json', 
          'Accept': 'application/json; charset=UTF-8'
        } 
      })
  },

  logout (token) {
    return Api().get('/auth/logout/',
    { 
      headers: {
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