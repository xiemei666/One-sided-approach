import { getList } from '../../service/interviewList'
import {format} from '../../utils/date'
const state = {
    ind: 0,
    list: [
        {
            title: "未开始",
            status: -1,
            remind: 2
        },
        {
            title: "已打卡",
            status: 0,
            remind: 2
        },
        {
            title: "已放弃",
            status: 1,
            remind: 2
        },
        {
            title: "全部",
            remind: 2,
            status: null,
        }
    ],
    //所有数据
    data: [],
    item: {},
    status: {
        "-1": "未开始",
        "0": "已打卡",
        "1": "已放弃"
    },
    page: 1,
    //是否还有数据
    getDataFalg: true,
    //每页几条
    pageSize: 10
}
const getters = {
}
const actions = {
    async getData({ commit, state }, payload) {
        //没有数据就停止
        if (!state.getDataFalg) return
        let index = payload ? payload.index : state.ind
        let status = payload ? payload.status : state.list[state.ind].status
        // console.log("status11111",status)
        let data = await getList({ status, page: state.page, pageSize: state.pageSize })
        state.data = data.data
        // if(data.data.length<10){
        //     await commit("updateDataFalg",false)
        //  }    
        // if(state.page>1){
        //     data.data=state.data.concat(data.data)
        // }
        //时间戳转时间
        console.log("11111", state.data)
        data = data.data.map(item => {
            item.create_time = format(new Date(item.create_time * 1), 'yy-MM-dd hh:mm:ss')
            return item
        });
        // commit("updateData", { index, data })
        // console.log("11111111111111",await getList())
    },
    //tab切换
    async tabs({ commit, dispatch }, { index, status }) {
        // await commit("pageUpdate",1)
        // await commit("updateDataFalg",true)
        // await dispatch("getData",{index,status})    
    },
}
const mutations = {
    // updateDataFalg(state,payload){
    //     state.getDataFalg=payload
    // },
    updateData(state, { index, data }) {
        state.ind = index;
        state.data = data;
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}