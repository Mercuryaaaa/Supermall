import { reqGetCode, reqUserInfo, reqUserLogin, reqUserLogout, reqUserRegister } from '@/api';
import { setToken, getToken, removeToken } from '@/utils/token';

export default {
  state: {
    code: '',
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    GETCODE(state, code) {
      state.code = code
    },
    USERLOGIN(state, token) {
      state.token = token
    },
    GETUSERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    CLEAR(state) {
      state.token = '';
      state.userInfo = {};
      removeToken();
    }
  },
  actions: {
    // 获取验证码
    async getCode({ commit }, phone) {
      let result = await reqGetCode(phone)
      // console.log(result.data);
      if (result.code == 200) {
        commit('GETCODE', result.data)
        return 'OK'
      } else {
        return Promise.reject(new Error('getCode file!'))
      }
    },
    // 用户注册
    async userRegister({ commit }, user) {
      let result = await reqUserRegister(user)
      // console.log(result);
      if (result.code == 200) {
        return 'OK'
      } else {
        return Promise.reject(new Error('userRegister file!'))
      }
    },
    // 用户登录
    async userLogin({ commit }, data) {
      let result = await reqUserLogin(data)
      // console.log(result.data);
      if (result.code == 200) {
        commit('USERLOGIN', result.data.token)
        // 持久化存储token
        setToken(result.data.token)
        return 'OK'
      } else {
        return Promise.reject(new Error('userLogin file!'))
      }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      let result = await reqUserInfo()
      // console.log(result.data);
      if (result.code == 200) {
        commit('GETUSERINFO', result.data)
        return 'OK'
      } else {
        return Promise.reject(new Error('getUserInfo file!'))
        // return Promise.reject(new Error(result.message))
      }
    },
    // 退出登录
    async userLogout({ commit }) {
      let result = await reqUserLogout()
      // console.log(result);
      if (result.code == 200) {
        commit('CLEAR')
        return 'OK'
      } else {
        return Promise.reject(new Error('userLogout file!'))
      }
    }
  },
  getters: {

  },
  modules: {

  }
}