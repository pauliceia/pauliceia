import Api from '@/middleware/ApiVGI'

export default {

  register(user){
    return Api().put('/api/user/create', user)
  }

}