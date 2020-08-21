// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import App from './App'
import 'normalize.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(Datetime)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
