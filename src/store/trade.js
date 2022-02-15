import { reqAddressInfo, reqOrderInfo } from '@/api';

export default {
  state: {
    userAddress: [],
    orderInfo: {},
  },
  mutations: {
    GETUSERADDRESS(state, userAddress) {
      state.userAddress = userAddress;
    },
    GETORDERINFO(state, orderInfo) {
      state.orderInfo = orderInfo;
    }
  },
  actions: {
    // 获取用户地址信息
    async getUserAddress({ commit }) {
      let result = await reqAddressInfo();
      // console.log(result);
      if (result.code == 200) {
        commit('GETUSERADDRESS', result.data)
        return 'OK'
      } else {
        return Promise.reject(new Error('getUserAddress file!'))
      }
    },
    // 获取订单交易页信息
    async getOrderInfo({ commit }) {
      let result = await reqOrderInfo()
      // console.log(result.data);
      if (result.code == 200) {
        commit('GETORDERINFO', result.data)
        return 'OK'
      } else {
        return Promise.reject(new Error('getOrderInfo file!'))
      }
    }
  },
  getters: {}
}