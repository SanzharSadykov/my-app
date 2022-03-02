import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import store from './store'
import './assets/tailwind.less'
import './assets/jq.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
