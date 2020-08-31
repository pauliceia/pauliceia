import ApiVGI from '@/middleware/ApiVGI'


// create a simple cache just to avoid to request the same feature table again
// key: feature table name, value: response
let cacheFeatureTables = {}


export default {
    createLayer(infosLayer) {
      return ApiVGI().post(`/api/layer/create`, infosLayer)
    },

    createUserLayer(infosUserLayer) {
      return ApiVGI().post(`/api/user_layer/create`, infosUserLayer)
    },

    createFeatureTable(infosFeatureTable) {
      return ApiVGI().post(`/api/feature_table/create/`, infosFeatureTable)
    },

    deleteLayer(id) {
      return ApiVGI().delete(`/api/layer/${id}`)
    },

    async getFeatureTable(fTableName) {
      // check if the feature table has already been requested
      // if true, then I returned the cached response, [...]
      if (fTableName in cacheFeatureTables) {
        return cacheFeatureTables[fTableName]
      }

      // [...] else I request the feature table for the first time
      let response = await ApiVGI().get(`/api/feature_table/?f_table_name=${fTableName}`)

      // if response status has been OK, then I store it
      if (response.status === 200) {
        cacheFeatureTables[fTableName] = response
      }

      return response
    }
}
