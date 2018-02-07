import Api from '@/middleware/Api'

export default {
  getMap (mapName) {
    return Api().get('/maps/geojson/'+mapName)
  }
}