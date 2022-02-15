import { reqGetSearchInfo } from '@/api';
export default ({
  state: {
    // 存储数据
    b:2,
    searchList:{}
  },
  mutations: {
    // 修改state唯一手段
    GETSEARCHLIST(state,searchList){
      state.searchList = searchList
    }
  },
  actions: {
    // 处理action，可以书写自己的业务逻辑，也可以处理异步
    async getSearchList({commit}, params = {}) {
      // reqGetSearchInfo调用获取服务器数据时，至少传递一个参数（空对象）
      // params形参：当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
      let result = await reqGetSearchInfo(params)
      if(result.code == 200){
        commit("GETSEARCHLIST",result.data)
        // console.log(result.data);
      }
    }
  },
  getters: {
    // 约等于计算属性，用于简化仓库数据
    // 形参state为当前仓库的state，并非大仓库
    goodsList(state){
      // 有数据为一个数组，没数据为undifined，返回空数组
      // console.log(state.searchList);
      return state.searchList.goodsList||[]
    },
    trademarkList(state){
      return state.searchList.trademarkList
    },
    attrsList(state){
      return state.searchList.attrsList
    }
  },
  modules: {
  }
})