import Vue from '../node_modules/vue/dist/vue.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from  './router.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../src/css/dist/css/mui.css'
import '../src/css/dist/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.filter('dataFormat',function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
