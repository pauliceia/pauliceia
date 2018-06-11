import axios from 'axios'
import store from '@/store'

export default () => {
  let baseURL = 'http://localhost:8888/'
  if(NODE_ENV == "production") baseURL = 'x'
  
  return store.state.auth.token ? 
    axios.create({
      baseURL,
      headers: {
        'Authorization': store.state.auth.token
      }
    }) :
    axios.create({
      baseURL
    })
}