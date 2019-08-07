import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state = {
}
const actions = {
  getSuggestion({commit}, payload){
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