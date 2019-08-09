import fly from '@/utils/request';

// 获取面试列表
export let getSignList = params => {
  return fly.get('/sign', params);
}

// 获取面试详情
export let getSignDetail = id => {
  return fly.get('/sign/' + id);
}

// 更新面试状态
export let updateSignDetail = (id, params) => {
  return fly.put('/sign/' + id, params);
}
//获取详情数据 
export function getDetailData(id){
  return fly.get(`/sign/${id}`)
}