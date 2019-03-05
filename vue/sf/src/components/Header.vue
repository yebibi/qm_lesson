<template>
  <div class="header-container">
    <router-link to="/search" class="m-topSearchIpt ipt">
        <i class="icon"></i>
        <span class="placeholder" >
            <span >告诉我你想搜的内容</span>
          </span>
    </router-link>
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .header-container{
  background-color: #fff;
}

.line .logo {
    width: 1.84rem;
    height: .53333rem;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
    display: inline-block;
    margin-right: .26667rem;
    background-size: cover;
    background-position: center;
}
.ipt {
    width: 85%;
}
.m-topSearchIpt {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    /* justify-content: center; */
   
    height: 1.94667rem;
    font-size: .77333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    text-decoration: none;
}
.m-topSearchIpt .icon {
    vertical-align: middle;
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: .13333rem;
}
.m-topSearchIpt .icon {
    display: inline-block;
    width: .87333rem;
    height: .87333rem;
}
.m-topSearchIpt .placeholder {
    color: #666;
    text-decoration: none;
}
</style>

