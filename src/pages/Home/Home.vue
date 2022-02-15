<template>
  <div>
    <!-- <p>首页</p> -->
    <type-nav />
    <list-container />
    <recommend />
    <rank />
    <like />
    <floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <brand />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/ListContainer.vue'
import Recommend from '@/pages/Home/Recommend/Recommend.vue'
import Rank from '@/pages/Home/Rank/Rank.vue'
import Like from '@/pages/Home/Like/Like.vue'
import Floor from '@/pages/Home/Floor/Floor.vue'
import Brand from '@/pages/Home/Brand/Brand.vue'
import {mapState} from 'vuex';

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    // 派发action，获取floor组件数据
    this.$store.dispatch("getFloorList")
    // 获取用户信息
    // this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style>
</style>