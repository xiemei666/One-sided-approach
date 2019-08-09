const state = {
}
const actions = {
  async formSubmit({ state }, { e, time }) {
    let data = await addView({
      company: e.mp.detail.value.text,
      phone: e.mp.detail.value.tel,
      longitude: state.address.location.lng,
      latitude: state.address.location.lat,
      form_id: e.mp.detail.formId,
      address: JSON.stringify(state.address),
      description: e.mp.detail.value.textarea,
      start_time: e.map.detail.value.start_time
    })
    return data
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