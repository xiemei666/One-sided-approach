<template>
  <div class="mainWarp">
    <header class="header">面试信息</header>
    <div class="interviewList">
      <p class="listItem">
        <span>公司名称</span>
        <label>
          <input placeholder="请输入公司名称">
        </label>
      </p>
      <p class="listItem">
        <span>公司电话</span>
        <label>
          <input placeholder="请输入面试联系人电话">
        </label>
      </p>
      <p class="listItem">
        <span>面试时间</span>
        <label>
          <input placeholder>
        </label>
      </p>
      <p class="listItem">
        <span>面试地址</span>
        <label>
          <input placeholder="请选择面试地址">
        </label>
      </p>
    </div>
    <h4 class="remarkTitle">备注信息</h4>
    <div class="remarkContent">
      <div>
        <textarea></textarea>
      </div>
    </div>
    <div class="sumbitBtn">确定</div>
  </div>
</template>

<script>
// Use Vuex
// import store from "./store";

export default {
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.mainWarp {
  width: 100%;
  .header {
    width: 100%;
    height: 80rpx;
    background: #f6f6f6;
    line-height: 80rpx;
    font-size: 32rpx;
    padding: 0 30rpx;
    border-bottom: 1px solid #efefef;
  }
  .interviewList {
    padding-left: 30rpx;
    .listItem {
      width: 100%;
      height: 80rpx;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      align-items: center;
      font-size: 28rpx;
      > span {
        width: 160rpx;
      }
    }
  }
  .remarkTitle {
    width: 100%;
    height: 80rpx;
    background: #f6f6f6;
    line-height: 80rpx;
    padding-left: 32rpx;
    font-size: 32rpx;
  }
  .remarkContent {
    padding: 15rpx 15rpx 25rpx;
    > div {
      width: 100%;
      height: 200rpx;
      border: 1px solid #c6c6c6;
      border-radius: 2px;
    }
  }
  .sumbitBtn {
    width: 100%;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    background: #999999;
    color: #fff;
    font-size: 32rpx;
  }
}
</style>
