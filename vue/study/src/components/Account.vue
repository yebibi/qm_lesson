<template>
  <div>
    <h3>account</h3>
    <router-link to="/account/login" class="yb">登录</router-link>
     <router-link to="/account/register">注册</router-link>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped> 
  .router-link-active{
    color:red;
    font-size:100px;
    font-style:initial;
    text-decoration: none;
  }
 
  
</style>
