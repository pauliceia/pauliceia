import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import 'bootstrap'

import App from '../components/App.vue'
import router from '../pages'
import locale from '../locale'

Vue.use(VueAxios, axios)
Vue.use(VueI18n)

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  i18n: new VueI18n({
    locale: 'pt-BR',
    //locale: 'en',
    messages: locale
  }),
  template: '<App/>',
  components: {
    App
  }
})
