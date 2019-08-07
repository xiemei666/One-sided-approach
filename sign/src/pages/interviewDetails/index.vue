<template>
    <div class="mainWarp">
        <div class="ul">
            <div class="li">
                <label class="_label">面试地址：</label>
                <label class="span"></label>
            </div>
            <div class="li">
                <label class="_label">面试时间：</label>
                <label class="span"></label>
            </div>
            <div class="li">
                <label class="_label">联系方式：</label>
                <label class="span"></label>
            </div>
            <div class="li">
                <label class="_label">是否提醒：</label>
                <label class="span">已提醒</label>
            </div>
            <div class="li">
                <label class="_label">面试状态：</label>
                <label class="span">已放弃</label>
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
    width: 100%;
    .ul{
        border-top: 1rpx solid #eee;
        border-bottom: 1rpx solid #eee;
        background: #fff;
        .li{
            width: 720rpx;
            min-height: 88rpx;
            margin-left: 30rpx;
            border-bottom: 1rpx solid #eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            ._label{
                color: #666;
                width: 170rpx;
                font-size: 30rpx;
            }
            .span{
                flex: 1;
                font-size: 30rpx;
                color: #333;
                padding-right: 30rpx;
                box-sizing: border-box;
            }
        }
    }
}
</style>