import 'babel-polyfill'
import 'es6-promise/auto'

import Vue from 'vue'

import ElementUI from 'element-ui'
import VueMaterial from 'vue-material'
import Sortable from 'sortablejs'

import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import 'openlayers/dist/ol.css'
import 'openlayers/dist/ol-debug.js'

import { sync } from 'vuex-router-sync'
import router from '@/router'
import store from '@/store'
import i18n from '@/views/language'

import App from '@/App'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueMaterial)
sync(store, router)

Vue.directive('sortable', {
  inserted: function (el, binding) {
    var sortable = new Sortable(el, binding.value || {});
  }
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})