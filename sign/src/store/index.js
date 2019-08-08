import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import hitCard from './modules/hitCard';
import address from './modules/address';
import interviewList from './modules/interviewList'
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    hitCard,
    address,
    interviewList
  },
  plugins: [CreateLogger()]
})