import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import VueResource from 'vue-resource'
import store from './store/index'
import LogTime from './components/LogTime'
import 'bootstrap/dist/css/bootstrap.css' 

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
const routes = [{
  path:'/',
  component:Home
},{
  path:'/home',
  component:Home
},{
  path:'/time-entries',
  component:TimeEntries,
  children:[{
    path:'log-time',
    component:LogTime
  }]
}

]
const router = new VueRouter({
  routes
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
