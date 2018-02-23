import Api from '@/middleware/ApiGeocoding'

export default {
  geolocationOne (address) {
    return Api().get(`/geolocation/${address}/json`)
  }
}