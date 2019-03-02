import * as types from './mutation-types';
export default {
  addTotalTime({commit},time){
    //提交
    commit(types.ADD_TOTAL_TIME,time)
  },
  decTotalTime({commit},time){
    commit(types.DEC_TOTAL_TIME,time)
  },
  deletePlan({commit},plan){
    commit(types.DELETE_PLAN,plan)
  },
  savePlan({commit},plan){
    commit(types.SAVE_PLAN,plan)
  }
}