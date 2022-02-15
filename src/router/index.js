import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from '@/store';

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   // routes
// })

// export default router


// 保存VueRouter原型对象的push和replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// location 告诉原来的push往哪里跳转（传递那些参数）
// resolve 成功回调
// reject 失败回调


// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call、apply的区别
    // 同：都可以调用函数一次，都可以篡改函数的上下文一次
    // 异：call和apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

// 重写replace
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}



// 配置路由
let router = new VueRouter({
  // 路由配置信息放在routes.js中
  routes,
  // 路由跳转滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 路由跳转回到顶部
    return { y: 0 }
  }
});

// 全局前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
  // to 可以获取到你要跳转到的路由信息
  // from 可以获取到你从哪个路由而来的信息
  // next 放行函数next()  next(path)放行到指定路由  next(false)url变化放行到from路由
  let token = store.state.user.token
  // console.log('token:' + token);
  let name = store.state.user.userInfo.name
  // console.log('name:' + name);
  // 已登录
  if (token) {
    // 禁止登录后进入注册页
    if (to.path == '/login') {
      next('/home')
    } else {
      // 登录但不是去login
      // 如果有用户名
      if (name) {
        next()
        // console.log("ifname");
      } else {
        // 没有用户信息，派发action让仓库存储用户信息再跳转
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // alert(error.message)
          // 清除token
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  } else {
    // 未登录(不能进入交易页、支付页、个人中心) ->转到登录页
    let toPath = to.path
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      next('/login?redirect='+toPath)
    } else {
      next();
    }
  }
})


export default router;