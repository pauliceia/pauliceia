import Api from '@/middleware/ApiVGI'

export default {

  login (token) {
    return Api().get('/auth/login',
      { 
        headers: { 
          'Authorization': `Basic ${token}`
        } 
      })
  },

  getUser(query){
    return Api().get('/api/user/?'+query)
  }

}