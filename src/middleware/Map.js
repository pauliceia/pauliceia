import ApiGeocoding from '@/middleware/ApiGeocoding'
import ApiVGI from '@/middleware/ApiVGI'

export default {
  geolocationOne (street, number, year) {
    return ApiGeocoding().get(`/geolocation`,{
      params: {street, number, year}
    })
  },

  geolocationMultiple (address) {
    return ApiGeocoding().get(`/multiplegeolocation/${address}/json`)
  },

  getLayers(query) {
    if(query != null) return ApiVGI().get(`/api/layer/?`+query)
    else return ApiVGI().get(`/api/layer/`)
  },

  getLayers(query) {
    if(query != null) return ApiVGI().get(`/api/layer/?`+query)
    else return ApiVGI().get(`/api/layer/`)
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
    if(query != null) return ApiVGI().get(`/api/user_layer/?${query}`)
    else return ApiVGI().get('/api/user_layer/')
  },

  getAddresses() {
    return ApiGeocoding().get('/addresses')
  }
}