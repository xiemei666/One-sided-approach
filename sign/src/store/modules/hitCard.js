import { decrypt, updateTel } from '@/service';
// 模块所有的状态
const state = {
  longitude: "113.324520",
  latitude: "23.099994",
  openId: '',
  tel: ''
}

// 模块内的同步改变
const mutations = {
  //更新定位信息
  updateLocation(state, payload) {
    state.longitude = payload.longitude;
    state.latitude = payload.latitude;
  },
  //存储openID
  updateOpenId(state, payload) {
    console.log("payload",payload)
    state.openId = payload
  },
  //更新电话
  updateTel(state, payload) {
    state.tel = payload
  }
}

// 模块内的异步改变
const actions = {
  //获取定位
  getLocation({ commit }, payload) {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        commit('updateLocation', res);
      }
    })
  },
  //解密用户手机号
  async getPhoneNumber({ commit }, payload) {
    let data = await decrypt(payload)
    console.log(data, "11")
    if (data.code === 0) {
      //更新电话
      let update = await updateTel({ phone: data.data.phoneNumber * 1 })
      console.log(update, 'update')
      if (update.code === 0) {
        commit('updateTel', data.data.phoneNumber)
        wx.showModal({
          title: '授权成功',
          content: '授权成功',
          showCancel: false,
          confirmColor: '#197DBF',
        })
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}