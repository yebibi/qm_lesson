<template>
  <div id="app">
    <mt-button type="primary " plain @click="show">primary</mt-button>
   <h1>这是App组件</h1>
   <router-link to="/account">account</router-link>
  <router-link to="/goodlist">goodlist</router-link>
   <router-view></router-view>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
  name: 'app',
  data(){},
  methods:{
    show(){
      Toast({
        message:'温馨提示',
        duration:1000,
        position:'bottom'
      })
    }
  }
}
</script>

<style>

</style>
