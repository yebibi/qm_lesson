<template>
  <div id="app">
    <p>message:"{{message}}"</p>
    <p>Computed reversed message= "{{reversedmessage}}"</p>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{
      message:'hello'
    }
   
  },
  computed:{
    resvesedmessage:function(){
       return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>
