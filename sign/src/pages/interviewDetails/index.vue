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
            <div class="li">
                <label class="_label">取消提醒：</label>
            </div>
        </div>
        <div class="_section">
            <button class="first">去打卡</button>
            <button>放弃面试</button>
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
    ._section{
        display: flex;
        margin: 50rpx 15rpx;
        button{
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
        .first{
            background: #197dbf;
        }
    }
}
</style>