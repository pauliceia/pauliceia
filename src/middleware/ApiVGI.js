import axios from 'axios'
import store from '@/store'

export default () => {
  return store.state.auth.token ? 
    axios.create({
      baseURL: `http://localhost:8888/`,
      headers: {
        Authorization: `Bearer ${store.state.auth.token}`
      }
    }) :
    axios.create({
      baseURL: `http://localhost:8888/`
    })
}