import {reqAddOrUpdateShopCart, reqGoodsInfo} from '@/api';
// 封装游客身份模块uuid  生成一个随机字符串
import {getUUID} from '@/utils/uuid_token.js';

export default ({
  state: {
    // 存储数据
    goodInfo:{},
    // skuId:0,
    // skuNum:0,
    // 游客临时身份
    uuid_token:getUUID()
  },
  mutations: {
    // 修改state唯一手段
    GETGOODINFO(state, goodInfo){
      state.goodInfo = goodInfo
    },
    // ADDORUPDATESHOPCART(state,skuId,skuNum){
    //   state.skuId = skuId
    //   state.skuNum = skuNum
    // },
  },
  actions: {
    // 处理action，可以书写自己的业务逻辑，也可以处理异步
    async getGoodInfo({commit},skuId){
      let result = await reqGoodsInfo(skuId)
      if(result.code == 200){
        commit("GETGOODINFO",result.data)
      }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
      let result = await reqAddOrUpdateShopCart(skuId,skuNum)
      // console.log(result);
      // 加入购物车成功后，前台将数据带给服务器，服务器只返回成功与否，没有返回其他数据，不需要三连环存储数据
      // if(result.code == 200){
      //   commit("ADDORUPDATESHOPCART",result.data)
      // }
      if(result.code == 200){
        return 'OK'
      }else{
        return Promise.reject(new Error('File'))
      }
    }
  },
  getters: {
    // 约等于计算属性，用于简化仓库数据
    categoryView(state){
      // state.info初始状态为空对象， 空对象的categoryView值为undefined
      return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
      return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
      return state.goodInfo.spuSaleAttrList || {}
    }
  },
  modules: {
  }
})