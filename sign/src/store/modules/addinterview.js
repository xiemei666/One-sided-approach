const state = {
}
const actions = {
  getdata({commit}, payload){
    qqMapSdk.getSuggestion({
      keyword: payload,
      success: res=>{
        console.log('res...', res);
      }
    })
  }
}
const mutations = {

}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}