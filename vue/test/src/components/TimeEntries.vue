<template>
  <div>
    <router-link to="/time-entries/log-time" class="btn btn-primary"
    v-if="$route.path !=='/time-entries/log-time' ">创建</router-link>
    <div v-if="$route.path=== '/time-entries/log-time'" >

     <h3><strong>创建</strong></h3>
    </div>
    <hr>
    <router-view></router-view>
    <!-- <Sidebar></Sidebar> -->
    <div class="time-entries">
      <p v-if="!plans.length">
        <strong>没有任何计划</strong>
      </p>
    </div>
    <!-- <div class="list-group">
      <a  class="list-group-item">
        <div class="row">
          <div class="col-sm-2 user-details">
            <img :src="plan.image" alt="" class="avatar">
            <p class="text-center">
              <strong>{{plan.name}}</strong>
            </p>
          </div>
            <div class="col-sm-2 text-center time block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{plan.totalTime}}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{plan.date}}
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{plan.comment}}</p>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">删除</button>
            </div>
        </div>
      </a>
    </div> -->
  </div>
</template>
<script>
// import Sidebar from  './Sidebar'
export default {
  // components:{Sidebar}
 'name':'TimeEntries',
 computed:{
   plans(){
     return this.$store.state.list
   }
 },
 methods:{
   deletePlan(idx){

   }
 }
}
</script>
<style>
  .avatar{
    margin: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details{
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block{
    padding: 10px;
  }
  .comment-section{
    padding: 20px;
  }
</style>
