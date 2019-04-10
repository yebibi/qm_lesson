import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MenberContainer from './components/tabbar/MenberContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer,},
    {path:'/menber',component:MenberContainer},
    {path:'/shopcart',component:ShopcartContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newlist',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo}
  ],
  linkActiveClass:'mui-active'
})
export default router