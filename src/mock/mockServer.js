// 引入
import Mock from 'mockjs';
// webpack默认对外暴露：图片、json数据格式
import banner from './banners.json';
import floor from './floors.json';


// Mock.mock(请求地址,请求数据)
// 轮播图
Mock.mock("/mock/banner",{code:200,data:banner})
// floor
Mock.mock("/mock/floor",{code:200,data:floor})