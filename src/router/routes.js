// 引入路由组件
// import Home from '@/pages/Home/Home.vue'
// import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'
import Detail from '@/pages/Detail/Detail.vue';
import AddCartSuccess from '@/pages/AddCartSuccess/AddCartSuccess.vue';
import ShopCart from '@/pages/ShopCart/ShopCart.vue';
import Trade from '@/pages/Trade/Trade.vue';
import Pay from '@/pages/Pay/Pay.vue';
import PaySuccess from '@/pages/PaySuccess/PaySuccess.vue';
import Center from '@/pages/Center/Center.vue';
// 二级路由组件
import MyOrder from '@/pages/Center/myOrder/MyOrder.vue';
import GroupOrder from '@/pages/Center/groupOrder/GroupOrder.vue';


// 路由配置信息
export default [
  {
    // 重定向
    path: "*",
    redirect: "/home"
  },
  {
    path: "/home",
    // component: Home,
    // 路由懒加载
    component: () => import("@/pages/Home/Home"),
    meta: { showFooter: true }
  },
  {
    path: "/search/:keyword?",
    component: () => import("@/pages/Search/Search"),
    meta: { showFooter: true },
    name: "search",
    // 路由组件传递props参数
    // 布尔值写法
    // props: true
    // 对象写法：额外的给路由传递一些props
    props: { a: 1, b: 2 },
    // 函数写法
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k }
    }
  },
  {
    path: "/login",
    component: Login,
    meta: { showFooter: false }
  },
  {
    path: "/register",
    component: Register,
    meta: { showFooter: false }
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: { showFooter: true }
  },
  {
    path: "/addcartuccess",
    name: "AddCartSuccess",
    component: AddCartSuccess,
    meta: { showFooter: true }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { showFooter: true }
  },
  {
    path: "/login",
    component: Login,
    meta: { showFooter: false }
  },
  {
    path: "/register",
    component: Register,
    meta: { showFooter: false }
  },
  {
    path: "/trade",
    component: Trade,
    meta: { showFooter: true },
    // 路由独享守卫
    beforeEnter:(to, from, next) => {
      // 只有从购物车才能进入交易页面
      if(from.path == '/shopcart'){
        next();
      }else {
        // 中断当前的导航
        next(false);
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    meta: { showFooter: true },
    // 路由独享守卫
    beforeEnter:(to, from, next) => {
      // 只有从交易页才能进入付款页面
      if(from.path == '/trade'){
        next();
      }else {
        // 中断当前的导航
        next(false);
      }
    }
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { showFooter: true }
  },
  {
    path: "/center",
    component: Center,
    meta: { showFooter: true },
    // 二级路由组件
    children:[
      {
        path:'myorder',
        component:MyOrder,
      },
      {
        path:'grouporder',
        component:GroupOrder,
      },
      {
        // 重定向
        path:'/center',
        redirect:'/center/myorder',
      },
    ]
  }
]