import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD935kBhDiuZUxdHweUVHQhstKpaGmnbL8',
    libraries: 'places,drawing,geometry',
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
