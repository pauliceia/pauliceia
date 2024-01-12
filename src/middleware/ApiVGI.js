import axios from 'axios'
import store from '@/store'

export default () => {  
  return store.state.auth.token ? 
    axios.create({
      baseURL: process.env.urlVGI,
      headers: {
        'Authorization': store.state.auth.token
      }
    }) :
    axios.create({
      baseURL: process.env.urlVGI
    })
}