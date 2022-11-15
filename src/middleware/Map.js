import axios from 'axios'
import store from '@/store'

import ApiGeocoding from '@/middleware/ApiGeocoding'
import ApiVGI from '@/middleware/ApiVGI'

const TEMP_VGI_LOCAL_URL = "http://127.0.0.1:8000/vgi";

function VgiTemp() {
  return store.state.auth.token ?
    axios.create({
      baseURL: TEMP_VGI_LOCAL_URL,
      headers: {
        'Authorization': store.state.auth.token
      }
    }) :
    axios.create({
      baseURL: TEMP_VGI_LOCAL_URL
    })
}



export default {
  geolocationOne(street, number, year) {
    return ApiGeocoding().get(`/geolocation`, {
      params: { street, number, year }
    })
  },

  geolocationMultiple(address) {
    return ApiGeocoding().get(`/multiplegeolocation/${address}/json`)
  },

  getLayers(query) {
    if (query != null) return VgiTemp().get("/layers?" + query)
    else return VgiTemp().get("/layers")
  },

  getAttrLayer(query) {
    return ApiVGI().get(`/api/feature_table/?${query}`)
  },

  getKeywords() {
    return ApiVGI().get(`/api/keyword/`)
  },

  getReferences() {
    return ApiVGI().get(`/api/reference/`)
  },

  getAuthors() {
    return ApiVGI().get(`/api/user/`)
  },

  getAuthorsLayers(query) {
    if (query != null) return ApiVGI().get(`/api/user_layer/?${query}`)
    else return ApiVGI().get('/api/user_layer/')
  },

  getAddresses() {
    return ApiGeocoding().get('/addresses')
  }
}