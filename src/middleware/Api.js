import axios from 'axios'
import store from '@/store'

export default () => {
  return store.state.auth.token ? 
    axios.create({
      baseURL: `http://localhost:4000/`,
      headers: {
        Authorization: `Bearer ${store.state.auth.token}`
      }
    }) :
    axios.create({
      baseURL: `http://localhost:4000/`
    })
}