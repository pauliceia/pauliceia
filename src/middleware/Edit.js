import ApiVGI from '@/middleware/ApiVGI'

export default {
    createChangeset(infos) {
        return ApiVGI().post(`/api/changeset/create`, infos)
    },
    deleteFeature(table, featId, changetId) {
        return ApiVGI().delete(`/api/feature/?f_table_name=${table}&feature_id=${featId}&changeset_id=${changetId}`)
    }
}