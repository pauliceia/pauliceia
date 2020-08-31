import ApiVGI from '@/middleware/ApiVGI'

export default {
    createChangeset(infos) {
        return ApiVGI().post('/api/changeset/create', infos)
    },
    closeChangeset(id) {
        return ApiVGI().post(`/api/changeset/close/?changeset_id=${id}`)
    },
    deleteFeature(table, featId, changesetId) {
        return ApiVGI().delete(`/api/feature/?f_table_name=${table}&feature_id=${featId}&changeset_id=${changesetId}`)
    },
    addFeature(infosFeature) {
        return ApiVGI().post('/api/feature/create', infosFeature)
    }
}
