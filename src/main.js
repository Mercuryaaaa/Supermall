import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/mockServer'
import "swiper/css/swiper.css";
// 统一接口api文件夹里面全部请求函数
import * as API from '@/api';


// 三级联动组件（全局组件）
import TypeNav from '@/components/TypeNav/TypeNav';
import Carousel from '@/components/Carousel/Carousel';
import Pagination from '@/components/Pagination/Pagination';
// 第一个参数：全局组件的名字  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

// 三级联动组件接口测试
// import {reqCategoryList} from '@/api';
// reqCategoryList()

// ElementUI
import { Button, MessageBox } from 'element-ui';
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 图片懒加载插件
import VueLazyLoad from 'vue-lazyload';
import pd from '@/assets/pd.gif';
Vue.use(VueLazyLoad, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: pd,
  // attempt: 1
})

// 引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:'plugin'
})

// 引入表单校验插件
import '@/plugins/validate'

Vue.config.productionTip = false
let a = 1
new Vue({
  // 注册路由，组件身上都有$route,$router属性
  router,
  // 注册vuex仓库，组件实例身上会多一个$store属性
  store,
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
}).$mount('#app')
