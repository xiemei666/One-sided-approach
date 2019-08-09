<template>
  <div class="mainWarp">
    <div class="header">
      <div class="user_img">
        <img src="../../../static/images/my.png" />
      </div>
      <div class="user_pwd">{{tel}}</div>
    </div>
    <div class="main">
      <div class="myInterview">
        <i>
          <img src="../../../static/images/shizhong-copy.png" />
        </i>
        <label class="span" @click="click">我的面试</label>
        <img src="../../../static/images/arrow.svg" />
      </div>
      <button class="serviceCenter">
        <i>
          <img src="../../../static/images/jinggao.png" />
        </i>
        <label class="span">客服中心</label>
        <img src="../../../static/images/arrow.svg" />
      </button>
    </div>
    <div class="mask" v-if="showPhoneDialog">
      <div class="_p">为了更好的使用我们的服务，我们需要获取你的手机号码</div>
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { decrypt } from "../../service/user";

export default {
  data() {
    return {
      showPhoneDialog: true
    };
  },
  computed: {
    ...mapState({
      tel:state=>state.hitCard.tel
    })
  },
  methods: {
    click() {
      wx.navigateTo({ url: "../interviewList/main" });
    },
    getPhoneNumber(e) {
      this.showPhoneDialog =false
      console.log("111111111",e)
      // let { encryptedData, iv } = e.target;
      // if (encryptedData) {
      //   this.getNumber({ encryptedData, iv });
      // } else {
      //   this.setting = true;
      //   wx.openSetting({
      //     success(res) {}
      //   });
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.mainWarp {
  display: block;
  .header {
    background: #f4f6f9;
    width: 100%;
    height: 350rpx;
    box-sizing: border-box;
    padding: 50rpx 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .user_img {
      width: 100rpx;
      height: 100rpx;
      background: #fff;
      text-align: center;
      padding: 20rpx;
      border-radius: 50%;
      img {
        width: 90%;
        height: 90%;
        display: inline-block;
        overflow: hidden;
      }
    }
  }
  .main {
    .myInterview {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 30rpx 40rpx;
      border-bottom: 1rpx solid #eee;
      .icon {
        display: inline-block;
        font-size: 0;
      }
      .span {
        flex: 1;
        margin-left: 40rpx;
        color: #666;
        font-size: 36rpx;
        background: transparent;
        text-align: left;
      }
      img {
        width: 40rpx;
        height: 40rpx;
        display: inline-block;
        overflow: hidden;
      }
    }
    .serviceCenter {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 30rpx 40rpx;
      border-bottom: 1rpx solid #eee;
      background: transparent;
      position: relative;
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      line-height: 2.55555556;
      overflow: hidden;
      color: #000000;
      .span {
        flex: 1;
        margin-left: 40rpx;
        color: #666;
        font-size: 36rpx;
        background: transparent;
        text-align: left;
      }
      img {
        width: 40rpx;
        height: 40rpx;
        display: inline-block;
        overflow: hidden;
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ._p {
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
      width: 70%;
      background: #fff;
      padding: 20rpx 15rpx;
      line-height: 1.5;
      font-size: 34rpx;
      box-sizing: border-box;
    }
    button {
      width: 70%;
      background: #197dbf;
      color: #fff;
      border-bottom-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;
      padding: 0;
      position: relative;
      display: block;
      box-sizing: border-box;
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      line-height: 2.55555556;
      -webkit-tap-highlight-color: transparent;
      overflow: hidden;
    }
  }
}
</style>
