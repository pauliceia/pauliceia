import Vue from 'vue'
import App from '@/App'

import { sync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'
import i18n from '@/views/language'

import vueResource from 'vue-resource'
import vueCookies from 'vue-cookies'
import VueMaterial from 'vue-material'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'bootstrap-tree-view/js/core.js'
import 'bootstrap-tree-view/js/tree.js'

import 'openlayers/dist/ol.css'
import 'openlayers/dist/ol-debug.js'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueCookies)
Vue.use(VueMaterial)
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
