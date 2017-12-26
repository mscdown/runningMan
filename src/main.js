// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.jpg')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
