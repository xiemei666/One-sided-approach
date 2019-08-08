<template>
  <div class="mainWarp">
    <form  report-submit="true" @submit="submitA" @reset="formReset">
      <header class="header">面试信息</header>
      <div class="interviewList">
        <p class="listItem">
          <span>公司名称</span>
          <label>
            <input placeholder="请输入公司名称" />
          </label>
        </p>
        <p class="listItem">
          <span>公司电话</span>
          <label>
            <input placeholder="请输入面试联系人电话" />
          </label>
        </p>
        <p class="listItem">
          <span>面试时间</span>
          <!-- 多列选择器 multiSelector -->
          <!-- 滑块范围 range -->
          <picker
              mode="multiSelector"
              class="time"
              :value="multiIndex"
              :range="newMultiArray"
              @change="bindMultiPickerChange"
              @columnchange="columnchange"
            >
              <span>{{time}}</span>
            </picker>
          <img src="../../../static/images/jinggao.png" @click="alert"/>
          <!-- <van-toast id="van-toast" /> -->
        </p>
        <p class="listItem">
          <span>面试地址</span>
          <label>
            <input 
            class="dizhi"
            placeholder="请选择面试地址"  
            @click="address"
            :value="data.address"
            disabled
            />
          </label>
        </p>
      </div>
      <h4 class="remarkTitle">备注信息</h4>
      <div class="remarkContent">
        <textarea placeholder="备注信息(可选，100个字以内)"></textarea>
      </div>
      <button class="sumbitBtn" form-type="submit">确定</button>
    </form>
  </div>
</template>
<script>
// Use Vuex
// import store from "./store";
// import Toast from "vant-weapp";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data(){
    return{
      time: "",
      multiArray: [],
      multiIndex: [0, 0, 0, 0],
      year: "",
      month: "",
      day: "",
      hour: ""
    }
  },
  //计算属性
  computed: {
    ...mapState({
      data:state => state.address.address
    }),
    newMultiArray() {
      let array = [];
      const date = new Date();
      const months = [];
      const days = [];
      const hours = [];
      const minutes = [];
      let minhour =
        this.multiIndex[0] === 0 && this.multiIndex[1] === 0 ? this.hour : 0;
      let minDay = this.multiIndex[0] === 0 ? this.day : 1;
      if (minhour === 23) {
        minhour = 0;
        minDay = this.day + 1;
      }
      for (let i = date.getMonth() + 1; i <= 12; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        months.push("" + i + "月");
      }
      array.push(months);
      for (let i = minDay; i <= 31; i++) {
        if (i < 10) {
          i = i;
        }
        days.push("" + i + "号");
      }
      array.push(days);
      for (let i = minhour; i < 24; i++) {
        if (i < 10) {
          i = "0" + i;
        }
        hours.push("" + i + "点");
      }
      array.push(hours);
      for (let i = 0; i < 6; i++) {
        minutes.push(`${i * 10 || "00"}分`);
      }
      array.push(minutes);
      return array;
    }

  },
  //方法
  methods: {
    //跳转到添加页面
    address(){
      wx.navigateTo({ url: "../interviewAddress/main" });
    },
  gotoList(){
     wx.navigateTo({ url: "../interviewList/main" });
  }
    alert() {
      Toast("在面试前一小时提醒你");
    },
    submitA(e){
        console.log(e)
    },
    //获取时间日期
    bindMultiPickerChange(e) {
      if (e) {
        this.multiIndex = e.target.value;
      }
      console.log("当前选择的时间", this.multiIndex);
      const index = this.multiIndex;
      const year = this.year;
      const month = this.newMultiArray[0][index[0]];
      const day = this.newMultiArray[1][index[1]];
      const hour = this.newMultiArray[2][index[2]];
      const minute = this.newMultiArray[3][index[3]];
      this.time =
        year +
        "-" +
        month.slice(0, -1).padStart(2, 0) +
        "-" +
        day.slice(0, -1).padStart(2, 0) +
        " " +
        hour.slice(0, -1) +
        ":" +
        minute.slice(0, -1);
    }
  },
  //创建
  created() {},
  //创建完成dom节点
  mounted() {
    const today = new Date();
    this.year = today.getFullYear();
    this.month = today.getMonth() + 1;
    this.day = today.getDate();
    this.hour = today.getHours() + 1;
    this.bindMultiPickerChange();
  }
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
      .dizhi{
        width: 100%;
      }
      ._picker{
        flex: 1;
        font-size: 30rpx;
        color: #333;
        height: 88rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 30rpx;
        box-sizing: border-box;
        ._span{
          width: 100%;
          line-height: 88rpx;
        }
      }
      img{
        width: 48rpx;
        height: 48rpx;
        margin-right: 30rpx;
        display: inline-block;
        font-size: 0;
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
    textarea {
      width: 100%;
      height: 200rpx;
      border: 1px solid #c6c6c6;
      border-radius: 5rpx;
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
  .Import{
    width:100%;
    display:flex;
    justify-content:space-around;
    img{
      width:50rpx;
      height:50rpx;
    }
  }
}
</style>
