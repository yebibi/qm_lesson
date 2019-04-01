import VueRouter from 'vue-router'
import Account from './components/Account.vue'
import GoodList from './components/GoodList.vue'
import login from './components/login.vue'
import register from './components/register.vue'
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
export default router