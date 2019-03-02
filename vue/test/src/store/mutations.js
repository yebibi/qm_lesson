import *  as types from './mutation-types'
export default{
  [types.ADD_TOTAL_TIME](state,time){
    state.totalTime = totalTime+time;
  },
  [types.DEC_TOTAL_TIME](state,time){
    state.totalTime = totalTime-time;
  },
  [types.SAVE_PLAN](state,plan){
    state.list.push(plan);
  },
  [types.DELETE_PLAN](state,idx){
   state.list.splice(idx,1);
  }
}