<template>
  <div class="mainWarp">
    <div class="ul">
      <div class="li">
        <label class="_label">面试地址：</label>
        <label class="span">{{data.address}}</label>
      </div>
      <div class="li">
        <label class="_label">面试时间：</label>
        <label class="span">{{data.start_time}}</label>
      </div>
      <div class="li">
        <label class="_label">联系方式：</label>
        <label class="span">{{data.phone}}</label>
      </div>
      <div class="li">
        <label class="_label">是否提醒：</label>
        <label class="span">{{data.remind?'未提醒':'已提醒'}}</label>
      </div>
      <div class="li">
        <label class="_label">面试状态：</label>
        <label class="span">{{data.status==-1?'未开始':info.status==0?'已打卡': '已放弃'}}</label>
      </div>
      <template v-if="data.status==-1">
        <div class="li">
          <label class="_label">取消提醒：</label>
        </div>
      </template>
    </div>
    <template v-if="data.status==-1">
      <div class="_section">
        <button class="first" @click="goSign">去打卡</button>
        <button @click="giveup">放弃面试</button>
      </div>
    </template>
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
      data: state => state.interviewList.info
    })
  },
  methods: {
    ...mapActions({
      updateDetail: 'interviewList/updateDetail'
    }),
    goSign(){
      wx.navigateTo({ url: '../hitCard/main' });
    },
    giveup() {
      wx.showModal({
        title: "温馨提示", //提示的标题,
        content: "确定要放弃本次面试吗?", //提示的内容,
        success: async res => {
          if (res.confirm) {
            await this.updateDetail({
              id: this.data.id,
              params: { status: 1 }
            });
          }
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.mainWarp {
  width: 100%;
  .ul {
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    background: #fff;
    .li {
      width: 720rpx;
      min-height: 88rpx;
      margin-left: 30rpx;
      border-bottom: 1rpx solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ._label {
        color: #666;
        width: 170rpx;
        font-size: 30rpx;
      }
      .span {
        flex: 1;
        font-size: 30rpx;
        color: #333;
        padding-right: 30rpx;
        box-sizing: border-box;
      }
    }
  }
  ._section {
    display: flex;
    margin: 50rpx 15rpx;
    button {
      background: #dc4e42;
      flex: 1;
      color: #fff;
      margin: 15rpx;
      padding: 0;
      box-sizing: border-box;
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      line-height: 2.55555556;
      position: relative;
      display: block;
    }
    .first {
      background: #197dbf;
    }
  }
}
</style>