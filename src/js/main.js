import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '../components/App.vue'
import router from '../pages'

Vue.use(VueAxios, axios)

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})
