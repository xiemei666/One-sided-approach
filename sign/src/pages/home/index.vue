<template>
  <div class="wrap">
    <map
      id="map"
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
    ></map>
    <cover-view class="location" @click="location">
    <cover-img><img src="../../../static/images/location.png" alt=""></cover-img>
    </cover-view>
      <img src="../../../static/images/my.png" class="img" alt="" @click="mine">
    <button class="add" @click="go">
    添加面试
    </button>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {
  data(){
    return {
      markers: []
    }
  },
  computed: {
    ...mapState({
      longitude: state=>state.home.longitude,
      latitude: state=>state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      location: 'home/getLocation'
    }),
    go(){
       wx.navigateTo({url: '../addInterview/main'})
    },
    mine(){
      wx.navigateTo({url: '../personalCenter/main'})
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap{
    width:100%;
    height:100%;
map{
  width: 100%;
  height: 100%;
}
.location{
  position: fixed;
  bottom: 120rpx;
  left: 30rpx;
  display:flex;
  justify-content:space-around;
}
.location img{
    width:100rpx;
    height:100rpx;
}
.img{
    width:100rpx;
    height:100rpx;
    border-radius:50%;
    background:black;
    position:fixed;
    right:30rpx;
     bottom: 140rpx;
}
.add{
    width:100%;
    position:fixed;
    left:0;
    bottom:0;
    background:black;
    color:white;
}
}
</style>
