<template>
  <div class=" form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label for="">日期</label>
        <input type="date" v-model="date" placeholder="请输入日期" class="form-control">
      </div>
      <div class="col-sm-6">
        <label for="">时间</label>
        <input type="number" v-model="totalTime" class="form-cantrol" placeholder="hours">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label for="">备注</label>
        <input type="text" class="form-control" v-model="comment" placeholder="备注">
        <button class="btn btn-primary" @click="save()">保存</button>
        <router-link to="time-entries" class="btn btn-danger">取消</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      date:'',
      totalTime:'',
      comment:''
    }
  },
  methods:{
    save(){
      const plan = {
        name:'叶斌',
        iamge:'',
        date:this.date,
        totalTime:this.totalTime,
        comment:this.comment
      };
      this.$store.dispatch('savePlan',plan);
       this.$store.dispatch('addTotalTime',plan);
       this.$router.go(-1);
    }
  }
}
</script>
<style>

</style>
