import Vue from "vue"
import VueOpenLayers from "vue-openlayers"
import App from "../components/App.vue"

Vue.use(VueOpenLayers)

new Vue({
  el: "#app",
  render: h => h(App),
})
