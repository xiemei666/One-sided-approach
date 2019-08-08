<template>
    <div class="mainWarp">
        <div class="nav">
            <lable :class="{'selected':tab === 1,'testTitle':true}"
          @click="changeTab(1)">未开始</lable>
            <lable :class="{'selected':tab === 2,'testTitle':true}"
          @click="changeTab(2)" >已打开</lable>
            <lable :class="{'selected':tab === 3,'testTitle':true}"
          @click="changeTab(3)" >已放弃</lable>
            <lable :class="{'selected':tab === 4,'testTitle':true}"
          @click="changeTab(4)" >全部</lable>
        </div>
    
    <div class="main">
        <div v-if="tab===1">1</div>
        <div v-else-if="tab===2">2</div>
        <div v-else-if="tab===3">3</div>
        <div v-else>4</div>
     </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      tab: 1
    };
  },
  methods: {
    changeTab(index) {
      this.tab = index;
    }
  },
    props:{
    },
    components:{
    },
    computed:{
    },
    created(){
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
.mainWarp{
    height: 100%;
    .nav{
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
       .testTitle {
           color: #000;
            font-weight: 500;
        }
        .selected {
            line-height: 88rpx;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 3rpx solid #197dbf;
            color:#197dbf;
        }
    }
    .main{
        padding-top: 88rpx;
        div{
            padding: 100rpx 0;
            text-align: center;
            font-size: 30rpx;
            color: #666;
        }
    }
}
</style>