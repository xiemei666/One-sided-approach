<template>
    <div class="mainWarp">
        <div class="header">
            <label class="span">北京</label>
            <input placeholder="面试地址" class="input" @input="(e)=>getUrl(e)" :value="val" v-model="val"/>
        </div>
        <div class="ul">
            <div class="li" v-for="item in data" :key="item.id" @click="add(item)">
                <img src="../../../static/images/location.svg"/>
                <div class="_div">
                    <p class="first">{{item.title}}</p>
                    <p class="last">{{item.address}}</p>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    props:{
    },
    components:{

    },
    data(){
        return {
            val:''
        }
    },
    computed:{
        ...mapState({
            data: state => state.address.data,
        })
    },
    methods:{
        ...mapMutations({
            searchVal: "address/searchVal",
            add:"address/add"
        }),
        getUrl(e) {
            let timer=null;
            clearTimeout(timer);
            timer = setTimeout(() => {
                this.searchVal({e});
            }, 500);
        }
    },
    created(){
    },
    mounted(){
        // this.getSuggestion('八维');
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
    .ul{
        .li{
            height: 100rpx;
            padding: 10rpx 0 10rpx 60rpx;
            box-sizing: border-box;
            border-bottom: 2rpx solid #eee;
            display: flex;
            align-items: center;
            flex-direction: row;
            img{
                width: 44rpx;
                height: 44rpx;
                display: inline-block;
                overflow: hidden;
            }
            ._div{
                flex: 1;
                margin-left: 30rpx;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .first{
                    font-size: 34rpx;
                }
                .last{
                    font-size: 24rpx;
                    color: silver;
                }
            }
        }
        .hover{
            background: #eee;
        }
    }
}
</style>