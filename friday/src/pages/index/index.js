// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueValidator from 'vue-validator'
import '../../../static/js/validate.js'
import $ from 'jquery'
import Distpicker from 'v-distpicker'

Vue.component('v-distpicker', Distpicker)

Vue.use(VueValidator)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
