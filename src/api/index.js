// api进行统一管理
import requests from './request';
import mockRequests from './mockAjax';

// 三级联动接口
// /api/product/getBaseCategoryList  get  无参数
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取首页banner轮播图接口
export const reqBannerList = () => mockRequests.get('/banner')

// 获取首页floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取搜索商品模块数据  /api/list  post请求  带参
// 当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// 获取商品详情页数据    /api/item/{skuId}  get请求
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 添加到购物车（更新购物车商品数量）/api/cart/addToCart/{ skuId }/{ skuNum }  post请求  带参
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车数据  /api/cart/cartList  get请求 
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

// 删除购物车商品接口  /api/cart/deleteCart/{skuId}  delete请求
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 切换商品选中状态接口    /api/cart/checkCart/{skuID}/{isChecked}  get请求
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取注册验证码接口  /api/user/passport/sendCode/{phone}  get请求
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 用户注册接口  /api/user/passport/register  POST请求  带参
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

// 用户登录接口  /api/user/passport/login  post请求  带参
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

// 获取用户信息  http://182.92.128.115/api/user/passport/auth/getUserInfo  get请求
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出登录接口  /api/user/passport/logout  get请求
export const reqUserLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息  /api/user/userAddress/auth/findUserAddressList  get请求
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取订单交易页信息  /api/order/auth/trade  get请求
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单接口  /api/order/auth/submitOrder?tradeNo={tradeNo}  post请求
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取订单支付信息  /api/payment/weixin/createNative/{orderId}  get请求
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 查询支付订单状态  /api/payment/weixin/queryPayStatus/{orderId}  get请求  带参
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

// 获取订单列表  /api/order/auth/{page}/{limit}  GET
export const reqOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})