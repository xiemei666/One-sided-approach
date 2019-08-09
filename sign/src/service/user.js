import fly from '@/utils/request';
// 登陆接口
export function login(code) {
  return fly.post('/user/code2session', { code });
}
//更新面试信息
export function Updatainterview(params) {
  return fly.put('/sign/7', params);
}
//获取面试列表
export function getListData(payload){
    console.log("payload",payload)
    if(payload.status===null){
        delete payload.status
    }
    return request.get("/sign",payload)
}
//更新手机号
export function Updatephone(params) {
  return fly.post('/user/updatePhone', params);
}
//解密数据
export function Decryptdata(params) {
  return fly.post('/user/decrypt', params);
}
//生物认证
export function Things(params) {
  return fly.post('/user/fingerPrint', params);
}