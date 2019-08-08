// import { getListData, updateData,getDetailData } from "../../servers"
// // import { format } from "../../utils/date"
// // 原始数据
// const state = {
//     ind: 0,
//     list: [
//         {
//             title: "未开始",
//             status: -1,
//             remind: 2
//         },
//         {
//             title: "已打卡",
//             status: 0,
//             remind: 2
//         },
//         {
//             title: "已放弃",
//             status: 1,
//             remind: 2
//         },
//         {
//             title: "全部",
//             remind: 2,
//             status: null,
//         }
//     ],
//     data: [],
//     item: {},
    
//     status: {
//         "-1": "未开始",
//         "0": "已打卡",
//         "1": "已放弃"
//     },
//     page: 1,
//     getDataFalg:true,
//     pageSize:10
// }

// //派生数据
// const getters = {

// }
// //异步改变
// const actions = {
//     async getData({ commit, state },payload) {
//         if(!state.getDataFalg) return
//         let index = payload ? payload.index : state.ind
//         let status = payload ? payload.status : state.list[state.ind].status
//         let data = await getListData({ status, page: state.page, pageSize: state.pageSize})
//          if(data.data.length<10){
//             await commit("updateDataFalg",false)
//          }    
//         if(state.page>1){
//             data.data=state.data.concat(data.data)
//         }
//         //时间戳转时间
//         data = data.data.map(item => {
//             item.create_time = format(new Date(item.create_time * 1), 'yy-MM-dd hh:mm:ss')
//             return item
//         });
//         commit("updateData", { index, data })
//     },
//     //tab切换
//     async tabs({commit,dispatch},{index,status}){
//         await commit("pageUpdate",1)
//         await commit("updateDataFalg",true)
//         await dispatch("getData",{index,status})    
//     },
//     //获取详情列表
//     async getDetail({commit},id){
//         let data= await getDetailData(id)
//         data.data.create_time = format(new Date(data.data.create_time * 1), 'yy-MM-dd hh:mm:ss')
//         commit("goToDetail",data.data)
//     },
// }
// //同步改变
// const mutations = {
//     updateData(state, { index, data }) {
//         state.ind = index;
//         state.data = data;   
//     },
//     goToDetail(state, item) {
//         state.item = item;
//         wx.navigateTo({ url: "/pages/detail/main" })
//     },
 
// }
// export default {
//     namespaced: true,
//     state,
//     getters,
//     actions,
//     mutations
// }