import { reqCategoryList, reqFloorList, reqBannerList } from "@/api"

export default ({
  state: {
    // 存储数据
    a: 1,
    categoryList: [],
    bannerList: [],
    floorList:[]
  },
  mutations: {
    // 修改state唯一手段
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
      state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
      state.floorList = floorList
    }
  },
  actions: {
    // 处理action，可以书写自己的业务逻辑，也可以处理异步
    // 通过API里面的接口函数调用，向服务器发请求，获取数据
    // 获取首页分类数据
    // commit:提交mutation修改state
    async categoryList({ commit }) {
      let result = await reqCategoryList()
      // console.log(result);
      // console.log(result.data);
      if (result.code == 200) {
        commit("CATEGORYLIST", result.data)
        // console.log(result.data);
      }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
      let result = await reqBannerList()
      if (result.code == 200) {
        commit("BANNERLIST", result.data)
        // console.log(result.data);
      }
    },
    // 获取首页floor数据
    async getFloorList({ commit }) {
      let result = await reqFloorList()
      // console.log(result);
      if(result.code == 200) {
        commit("FLOORLIST",result.data)
        // console.log(result.data);
      }
    }
  },
  getters: {
    // 约等于计算属性，用于简化仓库数据
  },
  modules: {
  }
})