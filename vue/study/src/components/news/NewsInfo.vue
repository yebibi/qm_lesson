<template>
  <div class="newsinfo-container">
    <h1 class="title">{{newsinfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time | dataFormat}}</span>
      <span>点击次数:{{newsinfo.click}}</span>
    </p>
    <hr>
       <div class="content" v-html="newsinfo.content"></div>
         <comment :id = 'this.id'></comment>
  </div>

</template>

<script>
import comment from '../subcomponents/comment.vue'
import Toast from 'mint-ui'
export default {
  data(){
    return{
     id:this.$route.params.id,
     newsinfo:{}
    }
  },
  created(){
    this.getNewsInfo()
  },
  components:{
    comment
  },
  methods:{
    getNewsInfo(){
      this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
        if(result.body.status===0){
          this.newsinfo = result.body.message[0]
        }else{
          Toast('获取新闻详情失败')
        }
      })
    }
  }
}
</script>

<style>

.newsinfo-container {
  padding: 0 4px;

}
.title{
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.subtitle{
  font-size: 13px;
  color:blue;
  display: flex;
  justify-content: space-between;
} 
.content img{
  width: 100%;
}
</style>
