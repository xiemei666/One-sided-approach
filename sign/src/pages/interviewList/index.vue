<template>
  <div class="mainWarp">
    <div class="nav">
      <span
        v-for="(item,index) in list"
        :key="index"
        :class="ind === index ? 'active' : ''"
        @click="tabs({index,status:item.status})"
      >{{item.title}}</span>
    </div>
    <div class="main">
      <div class="_p" v-if="!data.length">
        <p>当前分类还没有面试!</p>
      </div>
      <template v-if="data.length">
      <div 
      class="li"
      @click="goToDetail(item.id)"
      v-for="item in data"
      :key="item.id" 
  
      >
        <div class="_top">
           <label class="_span">{{item.company}}</label>
           <label class="_spans" :class="item.status===-1?'first':(item.status===0?'status':'first')">{{status[item.status]}}</label>
        </div>
        <div class="_conter">{{item.address}}</div>
        <div class="_buttom">
          <label>面试时间：{{item.start_time}}</label>
          <label class="_span" :class="item.status===-1?'last':(item.status===0?'status':'')">未提醒</label>
        </div>
      </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: state => state.interviewList.list,
      ind: state => state.interviewList.ind,
      data: state => state.interviewList.data,
      status:state=>state.interviewList.status
    })
  },
  methods: {
     deta(){
      wx:navgateTo({url:'../interviewDetails/main'})
    },
    ...mapMutations({
       goToDetail:"interviewList/goToDetail"
    }),
    ...mapActions({
      getData: "interviewList/getData",
      tabs:"interviewList/tabs",
      getDetail:"interviewList/getDetail"
    }),
    // jjk(){
   
    //      wx.navigateTo({url: '../interviewDetails/main'})
    // }
  },
  created() {},
  onShow() {
    this.getData();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.mainWarp {
  height: 100%;
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 99;
    width: 100%;
    height: 88rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 2rpx solid #eee;
    span {
      color: #000;
      font-weight: 500;
    }
    .active {
      line-height: 88rpx;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 3rpx solid #197dbf;
      color: #197dbf;
    }
  }
  .main {
    padding-top: 88rpx;
    > ._p {
      padding: 100rpx 0;
      text-align: center;
      font-size: 30rpx;
      color: #666;
    }
    .li {
      border-top: 20rpx solid #eee;
      width: 100%;
      padding: 10rpx 30rpx;
      box-sizing: border-box;
      > ._top {
        display: flex;
        line-height: 1.5;
        margin: 15rpx 0;
        align-items: center;
        justify-content: space-between;
        > ._span {
          color: #000;
          font-size: 44rpx;
          font-weight: 500;
        }
        > ._spans {
          font-size: 30rpx;
          padding: 5rpx 10rpx;
          background-color: hsla(220, 4%, 58%, 0.1);
          border-color: hsla(220, 4%, 58%, 0.2);
          color: #909399;
        }
      }
      > .conter {
        font-size: 32rpx;
        color: #999;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 15rpx 0;
        align-items: center;
        justify-content: space-between;
      }
      > ._buttom {
        font-size: 34rpx;
        color: #666;
        display: flex;
        line-height: 1.5;
        margin: 15rpx 0;
        align-items: center;
        justify-content: space-between;
        > ._span {
          padding: 5rpx 10rpx;
          background-color: hsla(0, 87%, 69%, 0.1);
          border-color: hsla(0, 87%, 69%, 0.2);
          color: #f56c6c;
           &.first {
            background-color: hsla(220, 4%, 58%, 0.1);
            border-color: hsla(220, 4%, 58%, 0.2);
            color: red;
          }
          &.last {
            background-color: hsla(0, 87%, 69%, 0.1);
            border-color: hsla(0, 87%, 69%, 0.2);
            color: #f56c6c;
          }
          &.status {
            background-color: rgba(64, 158, 255, 0.1);
            color: #409eff;
          }
        }
      }
    }
  }
}
</style>