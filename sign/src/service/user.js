import fly from '@/utils/request';

// 登陆接口
export let login = code=>{
  return fly.post('/user/code2session', {code});
}
// 解密
export let decrypt = params=>{
  console.log(params)
  return fly.post('/user/decrypt', params);
}

// 更新手机号
export let updateTel = params=>{
  console.log(params)
  return fly.post('/user/updatePhone', params);
}