<template>
    <div class="mainWarp">
        <div class="map">
            <div class="_div">
                <div class="dingW">
                    <img src="../../../static/images/location.png"/>
                </div>
            </div>
        </div>
        <div class="cover">
            <button>打卡</button>
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
    .map{
        width: 100%;
        height: 100%;
        padding-bottom: 100rpx;
        box-sizing: border-box;
        ._div{
            position: relative;
            height: 100%;
            .dingW{
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
                img{
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
    .cover{
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
        button{
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
            overflow: hidden
        }
    }
}
</style>