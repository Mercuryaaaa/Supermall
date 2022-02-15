<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: "Carousel",
  props:['list'],
  watch: {
    list: {
      // 立即监听，不管数据有没有变化
      immediate: true,
      handler() {
        // 只能监听数据变化，不能监听v-for动态渲染结构进度
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            this.$refs.cur,
            {
              loop: true,
              // 如果需要分页器(圆点)
              pagination: {
                el: ".swiper-pagination",
                // 点击圆点切换图片
                clickable: true
              },
              // 如果需要前进后退按钮
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            })
        })
      }
    }
  }
}
</script>

<style>
</style>