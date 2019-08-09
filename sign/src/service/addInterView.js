import fly from '@/utils/request';

//添加面试
export function addView(payload){
    // console.log("payload",payload)
    return fly.post("/sign",payload)
}