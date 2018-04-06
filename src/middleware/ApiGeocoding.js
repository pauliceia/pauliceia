import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
      baseURL: `http://pauliceia.dpi.inpe.br/api/geocoding`
    })
}