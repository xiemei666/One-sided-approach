<template>
  <div class="faceList">
    <p class="list">
    <i class="iconfont icon-fanhui"></i>
    <span>个人中心</span>
    </p>
    <ul class="tab">
    <li @click="changeTab(1)"  :class="{'selected':tab === 1,'testTitle':true}">未开始</li>
    <li @click="changeTab(2)"  :class="{'selected':tab === 2,'testTitle':true}">已打卡</li>
    <li @click="changeTab(3)"  :class="{'selected':tab === 3,'testTitle':true}">已放弃</li>
    <li @click="changeTab(4)"  :class="{'selected':tab === 4,'testTitle':true}">全部</li>
    </ul>
    <div class="tabList">
     <div v-if="tab===1">111</div>
        <div v-else-if="tab===2">2222</div>
        <div v-else-if="tab===3">3333</div>
        <div v-else-if="tab===4">444</div>
    </div>
  </div>
</template>
<script>
// Use Vuex
// import store from "./store";

export default {
  data(){
    return{
      tab:1
    }
  },
  computed: {
    // count() {
    //   return store.state.count;
    // }
  },
  methods: {
    changTab(index) {
      this.tab = index;
    }
  }
};
</script>

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
.tab{
  width:100%;
  height:100rpx;
  display:flex;
  justify-content:space-around;
  line-height:100rpx;
  font-size:35rpx;
}
.tabList{
  text-align:center;
  font-size:35rpx;
}
  .testTitle {
            flex: 1;
            text-align: center;
        }
        .selected {
            color: #87caee;
            border-bottom: 1px solid #87caee;
        }

</style>
