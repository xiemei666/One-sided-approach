import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';
import {addView} from '../../service/index'
// 实例化一下
const qqMapSdk = new QQMapWX({
  key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});

const state = {
  data: [],
  map:'',
  initialData:{
    text:'',
    tel:"",
    address: "",
  }
}

const actions = {
  async submit({ state }, { e, time }) {
    let data = await addView({
      company: e.mp.detail.value.text,
      phone: e.mp.detail.value.tel,
      form_id: e.mp.detail.formId,
      address: JSON.stringify(state.initialData.address),
      latitude: state.map.location.lat,
      longitude: state.map.location.lng,
      start_time: new Date(time).getTime(),
      description: e.mp.detail.value.textarea
    })
    return data
  }
}

const mutations = {
  searchVal(state, { e }) {
    // 调用接口
    qqMapSdk.search({
      keyword: e.mp.detail.value, //搜索关键词
      // region:"北京",
      // location: `${latitude},${longitude}`, //设置周边搜索中心点
      success: function (res) {
        // console.log(res)
        state.data = res.data
      }
    });
  },
  add(state, payload) {
    console.log("090909",payload)
    state.initialData.address = payload.address;
    state.map = payload
    wx.navigateTo({ url: "../../pages/addInterview/main" });
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}