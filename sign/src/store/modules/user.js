import {Updatephone} from '../../service'
// 模块所有的状态
const state = {
  openid:'',
  info:{}
}
// 模块内的同步改变
const mutations = {

}
// 模块内的异步改变
const actions = {
  async Updatephone({commit},payload){
 let data=await Updatephone(payload);
 console.log('phonedata...',data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}