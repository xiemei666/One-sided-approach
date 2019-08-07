<template>
    <div class="mainWarp">
        <div class="header">
            <label class="span">北京</label>
            <input placeholder="面试地址" class="input"/>
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
    .header{
        display: flex;
        align-items: center;
        border-top: 2rpx solid #eee;
        border-bottom: 2rpx solid #eee;
        height: 88rpx;
        .span{
            width: 26%;
            text-align: center;
            box-sizing: border-box;
            border-right: 2rpx solid #eee;
        }
        .input{
            padding: 0 20rpx;
            cursor: auto;
            display: block;
            height: 1.4rem;
            text-overflow: clip;
            overflow: hidden;
            white-space: nowrap;
            font-family: UICTFontTextStyleBody;
            min-height: 1.4rem;
        }
    }
}
</style>