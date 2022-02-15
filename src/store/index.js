import Vue from 'vue'
import Vuex from 'vuex'

// 引入小仓库
import home from './home.js'
import search from './search.js';
import detail from './detail.js';
import shopcart from './shopcart.js';
import user from './user.js';
import trade from './trade.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储数据
  },
  mutations: {
    // 修改state唯一手段
  },
  actions: {
    // 处理action，可以书写自己的业务逻辑，也可以处理异步
  },
  getters: {
    // 约等于计算属性，用于简化仓库数据
  },
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  }
})
