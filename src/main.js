import Vue from 'vue'
import router from '@/router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
