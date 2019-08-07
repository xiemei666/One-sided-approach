<template>
  <div class="faceList">
      <p class="list">
    <i class="iconfont icon-fanhui"></i>
    <span>看看</span>
      </p>
     <div>
     <span>面试地址:</span>
     <span>不大会的爸爸计算机安监部</span>
     </div>
     <div>
      <span>面试时间:</span>
      <span>2019-08-08 21:00</span>
     </div>
     <div>
       <span>联系方式:</span>
       <span>212444444</span>
     </div>
     <div>
      <span>是否提醒:</span>
       <span>未提醒</span>
     </div>
      <div>
      <span>面试状态:</span>
       <span>未放弃</span>
     </div>
      <div>
      <span>取消提醒:</span>
       <span></span>
     </div>
     <p class="buttons">
     <button class="card">去打卡</button>
     <button class="giveup">放弃面试</button>
     </p>
  </div>
</template>
<script>

<style lang="scss" scoped>
@import '../../font/iconfont.css';
.list{
  width:100%;
  height:100rpx;
  display:flex;
  line-height:100rpx;
  border-bottom:solid 2rpx #ccc;
}
.list span{
  padding-left:20rpx;
}
.faceList{
  width:100%;
  height:100%;
}
.faceList div{
  width:100%;
  height:130rpx;
  border-bottom:solid 2rpx #ccc;
  display:flex;
  line-height:130rpx;
}
.faceList div span{
  display:flex;
  justify-content:space-around;
  font-size:33rpx;
}
.buttons{
  width:100%;
  height:100rpx;
  display:flex;
  justify-content:space-between;
}
.card{
  background:blue;
  color:white;
}
.giveup{
  background:red;
  color:white;
 }
</style>
