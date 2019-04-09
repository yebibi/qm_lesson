<template>
  <div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
      <img :src="item.img" alt="">
    </mt-swipe-item>
 
  </mt-swipe>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
           <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
           <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>

  </ul> 
</div>
</template>

<script>
import Toast from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          global.console.log(result.body);
          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
          } else {
            Toast("加载失败");
          }
        });
    }
  }
};
</script>

<style  scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-child(1) {
  background-color: red;
}
img {
  width: 100%;
  height: 100%;
}
.mint-swipe-item:nth-child(2) {
  background-color: blue;
}
.mint-swipe-item:nth-child(3) {
  background-color: green;
}
.mui-grid-view.mui-grid-9{
  background-color: white !important;
  border:none; 
}
.mui-grid-view.mui-grid-9 img{
  height: 60px;
  width: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none ;
}
.mui-media-body{
  font-size: 13px;
}
</style>
