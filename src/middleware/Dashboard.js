import ApiVGI from '@/middleware/ApiVGI'

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

    getFeatureTable(tableName) {
        return ApiVGI().get(`/api/feature_table/?f_table_name=${tableName}`)
    }
}