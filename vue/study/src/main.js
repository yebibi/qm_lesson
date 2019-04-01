import Vue from '../node_modules/vue/dist/vue.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from  './router.js'
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
