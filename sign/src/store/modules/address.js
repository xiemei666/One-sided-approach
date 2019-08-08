import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';
// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});
const state = {
  data: [],
  address:""
}
const actions = {
  // getSuggestion({ commit }, payload) {
  //   qqMapSdk.getSuggestion({
  //     keyword: payload,
  //     success: res => {
  //       console.log('res...222', res);
  //       commit('updata', res)
  //     }
  //   })
  // }
}
const mutations = {
  searchVal(state, { e }) {
    // 调用接口
    qqMapSdk.search({
      keyword: e.mp.detail.value, //搜索关键词
      // region:"北京",
      // location: `${latitude},${longitude}`, //设置周边搜索中心点
      success: function (res) {
        state.data = res.data
      }
    });
  },
  add(state,payload){
    console.log("111111",payload)
    state.address = payload;
    wx.navigateTo({ url: "../../pages/addInterview/main" });
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}