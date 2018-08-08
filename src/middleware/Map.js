import ApiGeocoding from '@/middleware/ApiGeocoding'
import ApiVGI from '@/middleware/ApiVGI'

export default {
  geolocationOne (address) {
    return ApiGeocoding().get(`/geolocation/${address}/json`)
  },

  geolocationMultiple (address) {
    return ApiGeocoding().get(`/multiplegeolocation/${address}/json`)
  },

  getLayers(query) {
    if(query != null) return ApiVGI().get(`/api/layer/?`+query)
    else return ApiVGI().get(`/api/layer/`)
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
    if(query != null) return ApiVGI().get(`/api/user_layer/?${query}`)
    else return ApiVGI().get('/api/user_layer/')
  },

  getPlacesList() {
    return ApiGeocoding().get('/placeslist')
  }
}