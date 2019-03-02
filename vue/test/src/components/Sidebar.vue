<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>
    <div class="panel-center">
      <h1 class="text-center">{{time}}小时</h1>
    </div>
    </div> 
</template>
<script>
export default {
  name:'Sidebar',
  data(){
    return{

    };
  },
  computed:{
    time(){
      return this.$store.state.totalTime;
    }
  }
}
</script>
<style>

</style>
