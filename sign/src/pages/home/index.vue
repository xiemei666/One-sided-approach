<template>
  <div class="mainWarp">
    <div class="map">
      <div class="_div">
        <map id="map" show-location :markers="markers" :longitude="longitude" :latitude="latitude"></map>
        <div class="dingW" @click="location">
          <img src="../../../static/images/location.png" />
        </div>
        <div class="my" @click="location">
          <img src="../../../static/images/my.png" />
        </div>
      </div>
    </div>
    <div class="cover">
      <button>添加面试</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      markers: []
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.hitCard.longitude,
      latitude: state => state.hitCard.latitude
    })
  },
  methods: {
    ...mapActions({
      location: "hitCard/getLocation"
    })
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.mainWarp {
  height: 100%;
  .map {
    width: 100%;
    height: 100%;
    padding-bottom: 100rpx;
    box-sizing: border-box;
    ._div {
      position: relative;
      height: 100%;
      map {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .dingW {
        height: 80rpx;
        position: absolute;
        z-index: 1001;
        bottom: 60rpx;
        left: 20rpx;
        display: block;
        line-height: 1.2;
        overflow: hidden;
        white-space: nowrap;
        pointer-events: auto;
        font-family: -apple-system;
        img {
          height: 80rpx;
          width: 80rpx;
          display: block;
          line-height: 1.2;
          overflow: hidden;
          pointer-events: auto;
        }
      }
      .my{
        height: 80rpx;
        position: absolute;
        z-index: 1001;
        bottom: 60rpx;
        right: 20rpx;
        display: block;
        line-height: 1.2;
        overflow: hidden;
        white-space: nowrap;
        pointer-events: auto;
        font-family: -apple-system;
        img {
          height: 80rpx;
          width: 80rpx;
          display: block;
          line-height: 1.2;
          overflow: hidden;
          pointer-events: auto;
        }
      }
    }
  }
  .cover {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 240rpx;
    display: block;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: auto;
    font-family: -apple-system;
    button {
      position: fixed;
      width: 100%;
      height: 100rpx;
      background: #000;
      color: #fff;
      font-weight: 500;
      bottom: 0;
      left: 0;
      font-size: 40rpx;
      border: none;
      padding: 0;
      text-align: center;
      text-decoration: none;
      line-height: 2.55555556;
      -webkit-tap-highlight-color: transparent;
      overflow: hidden;
    }
  }
}
</style>