import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';
export default ({
  state: {
    // 存储数据
    cartList: []
  },
  mutations: {
    // 修改state唯一手段
    GETCARTLIST(state, cartList) {
      state.cartList = cartList
    }
  },
  actions: {
    // 处理action，可以书写自己的业务逻辑，也可以处理异步
    // 获取购物车商品列表
    async getCartList({ commit }) {
      let result = await reqCartList()
      // console.log(result.data);
      if (result.code == 200) {
        commit('GETCARTLIST', result.data)
      }
    },
    // 删除购物车商品
    async deleteCartListBySkuId({ commit }, skuId) {
      let result = await reqDeleteCartById(skuId)
      // console.log(result);
      // 没有数据返回
      if (result.code == 200) {
        return 'OK'
      } else {
        return Promise.reject(new Error('deleteCartListBySkuId fail!'))
      }
    },
    // 修改商品选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
      let result = await reqUpdateCheckedById(skuId, isChecked)
      // console.log(result);
      if (result.code == 200) {
        return 'OK'
      } else {
        return Promise.reject(new Error('updateCheckedById fail!'))
      }
    },
    // 删除选中商品
    deleteAllCheckedCart({ dispatch, getters }) {
      // console.log(context);
      // context 小仓库
      // commit 提交mutations修改state
      // getters 计算属性
      // dispatch 派发action
      // state 当前仓库数据
      // console.log(getters.cartList.cartInfoList);
      let promiseAll = []
      getters.cartList.cartInfoList.forEach(item => {
        // console.log(item);
        let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
        promiseAll.push(promise)
      });
      // 全部成功即为成功，有一个失败即为失败
      return Promise.all(promiseAll)
    },
    // 全选
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
      let promiseAll = []
      state.cartList[0].cartInfoList.forEach(item => {
        let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
        promiseAll.push(promise)
      })
      console.log(Promise.all(promiseAll) );
      return Promise.all(promiseAll)
    }
  },
  getters: {
    // 约等于计算属性，用于简化仓库数据
    cartList(state) {
      return state.cartList[0] || {}
    }
  },
  modules: {
  },
})