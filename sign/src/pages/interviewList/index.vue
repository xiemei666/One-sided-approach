<template>
    <div class="mainWarp">
        <div class="nav">
            <lable class="span active">未开始</lable>
            <lable class="span">已打开</lable>
            <lable class="span">已放弃</lable>
            <lable class="span">全部</lable>
        </div>
        <div class="main">
            <div class="_p">
                当前分类还没有面试!
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

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
        .span{
            color: #000;
            font-weight: 500;
        }
        .active{
            line-height: 88rpx;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 3rpx solid #197dbf;
            color:#197dbf;
        }
    }
    .main{
        padding-top: 88rpx;
        ._p{
            padding: 100rpx 0;
            text-align: center;
            font-size: 30rpx;
            color: #666;
        }
    }
}
</style>