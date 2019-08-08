import { getList, updateData, getDetailData } from '../../service/interviewList'
import { format } from '../../utils/date'
//原始数据
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
        let data = await getList({ status, page: state.page, pageSize: state.pageSize })
        //数据少于十条改变状态
        if (data.data.length < 10) {
            await commit("updateDataFalg", false)
        }
        if (state.page > 1) {
            data.data = state.data.concat(data.data)
        }
        //时间戳转时间
        data = data.data.map(item => {
            item.create_time = format(new Date(item.create_time * 1), 'yy-MM-dd hh:mm:ss')
            return item
        });
        //改变所有数据和下标
        commit("updateData", { index, data })
    },
    //tab切换
    async tabs({ commit, dispatch }, { index, status }) {
        //始终从第一页开始
        await commit("pageUpdate", 1)
        await commit("updateDataFalg", true)
        await dispatch("getData", { index, status })
    },
    //上拉
    async load({ dispatch, commit, state }) {
        if (!state.getDataFalg) {
            wx.showToast({
                title: "数据加载完毕",
                icon: "none",
                duration: 2000
            });
        } else {
            // 下一页
            await commit("pageUpdate", state.page + 1),
                await dispatch("getData")
        }
    },
    //下拉
    async down({ dispatch, commit }) {
        await commit("pageUpdate", 1)
        await commit("updateDataFalg", true)
        await dispatch("getData")
    },
    //取消提醒按钮
    // async switchChange({ commit }, {id,checked}) {
    //     let data=await updateData({ id, remind: checked ? 1 : -1 })
    //     return data
    // },
    //获取详情列表
    async getDetail({ commit }, id) {
        //点击进入详情
        let data = await getDetailData(id)
        data.data.create_time = format(new Date(data.data.create_time * 1), 'yy-MM-dd hh:mm:ss')
        commit("goToDetail", data.data)

    },
    //放弃面试
    // async giveUp({commit,state},id){
    //     let data= await updateData({
    //         id,
    //         status:1
    //     })
    //    commit("updateGive",1)
    // },
    //打卡
    // async clock({commit,state},id){
    //     let data= await updateData({
    //         id,
    //         status:0,
    //         sign_time:+new Date()
    //     })
    //    commit("updateClock",0)
    // }
}
const mutations = {
    //改变所有数据和下标
    updateData(state, { index, data }) {
        state.ind = index;
        state.data = data;
    },
    //去详情页
    goToDetail(state, item) {
        state.item = item;
        wx.navigateTo({ url: "../../pages/interviewDetails/main" })
    },
    //改变初始页数
    pageUpdate(state, payload) {
        state.page = payload;
    },
    //改变数据是否还有状态
    updateDataFalg(state, payload) {
        state.getDataFalg = payload
    },
    // updateGive(state,payload){
    //     state.item.status=payload
    // },
    // updateClock(state,payload){
    //     state.item.status=payload
    // }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}