import fly from '@/utils/request';

//添加面试
export function getList(payload){
    if(payload.status===null){
        delete payload.status
    }
    return fly.get("/sign",payload)
}
//更改数据
// export function updateData(payload){
//     return request.put(`/sign/${payload.id}`,{
//         remind:payload.remind,
//         status:payload.status,
//         sign_time:payload.sign_time
//     })
// }
// //获取详情数据 
// export function getDetailData(id){
//     return request.get(`/sign/${id}`)
// }