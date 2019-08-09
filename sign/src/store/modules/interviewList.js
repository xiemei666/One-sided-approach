import { getSignList, getSignDetail, updateSignDetail, getDetailData } from '../../service/interviewList';
import { format } from '../../utils/date'

const state = {
    active: 1, //表示当前面试类型，0表示全部，1表示未开始，1表示已打卡，2表示已放弃
    list: [], //面试列表
    info: {}, //面试详情数据
    hasMore: true,  //是否有更多数据
    page: 1, //当前页码
    pageSize: 10 //每页数据
}
const mutations = {
    updateState(state, payload) {
        // 判断是否还有更多页码
        if (payload.list) {
            if (payload.list.length === state.pageSize * state.page) {
                state.hasMore = true
            } else {
                state.hasMore = false
            }
        }
        for (let key in payload) {
            state[key] = payload[key]
        }
    },
    goToDetail(state, item) {
        item.data.start_time = format(new Date(item.data.start_time * 1), 'yy-MM-dd hh:mm:ss')
        state.info = item.data;
        wx.navigateTo({ url: "../../pages/interviewDetails/main" })
    },
}
const actions = {
    // 获取面试列表
    getList({ commit, state }, payload) {
        return new Promise(async (resolve, reject) => {
            let params = {};
            // 修正面试状态
            if (state.active) {
                params.status = state.active - 2;
            }
            // 拼接面试页码和每页数量
            params.page = state.page;
            params.pageSize = state.pageSize;
            let result = await getSignList(params);
            //时间戳转时间和地址
            result.data.map(item => {
                item.start_time = format(new Date(item.start_time * 1), 'yy-MM-dd hh:mm:ss')
                // if(!JSON.parse(item.address)){
                //     item.address = item.address
                // }else{
                //     item.address = JSON.parse(item.address)
                // }
                return item
            });
            // 判断是替换还是追加
            if (state.page === 1) {
                commit('updateState', { list: result.data })
            } else {
                commit('updateState', { list: [...state.list, ...result.data] })
            }
            // 调用resolve通知前端
            resolve();
        })
    },
    // 获取面试详情
    async getDetail({ commit }, id) {
        let data = await getDetailData(id)
        commit("goToDetail", data)
    },
    // 更新面试状态
    updateDetail({ commit, dispatch }, payload) {
        return new Promise(async (resolve, reject) => {
            let data = await updateSignDetail(payload.id, payload.params);
            if (data.code == 0) {
                // 重新获取详情
                dispatch('getDetail', payload.id);
            }
            resolve(data);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
