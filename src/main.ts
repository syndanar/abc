import Vue from 'vue'
import App from './App.vue'
import './scss/app.scss'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/components/global'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
