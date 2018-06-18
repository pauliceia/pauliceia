import ApiGeocoding from '@/middleware/ApiGeocoding'
import ApiVGI from '@/middleware/ApiVGI'

export default {
  geolocationOne (address) {
    return ApiGeocoding().get(`/geolocation/${address}/json`)
  },

  getLayers(query) {
    if(query != null) return ApiVGI().get(`/api/layer/?`+query)
    else return ApiVGI().get(`/api/layer/`)
  },

  getKeyword() {
    return ApiVGI().get(`/api/keyword/`)
  },

  getAuthors() {
    return ApiVGI().get(`/api/user/`)
  },

  getAuthorsLayers() {
    return ApiVGI().get(`/api/user_layer/`)
  }
}