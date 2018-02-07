import Api from '@/middleware/Api'

export default {
  update (infoUser) {
    return Api().put('/user/update', infoUser)
  },
  register (infoUser) {
    return Api().post('/user/register', infoUser)
  },
  delete (id) {
    return Api().delete('/user/delete/'+id)
  },
  search (id) {
    return id != null ? Api().get('/user/'+id) : Api().get('/user/')
  },
}