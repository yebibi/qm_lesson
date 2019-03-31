import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Account from './components/Account.vue'
import GoodList from './components/GoodList.vue'
import login from './components/login.vue'
import register from './components/register.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false
var router = new VueRouter({
  routes:[
    {
      path:"/account",
      component:Account,
      children:[
        {path:'login',component:login},
        {path:'register',component:register}
      ]
    },
    {
      path:"/goodlist",
      component:GoodList,
    }
  ]
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
