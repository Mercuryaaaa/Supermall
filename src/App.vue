<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.showFooter"></Footer>
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default({
  components: {
    Header,
    Footer
  },
  mounted() {
    // 通知vuex发请求，获取数据，存储在仓库当中
    this.$store.dispatch('categoryList')
  }
})
</script>


<style>

</style>
