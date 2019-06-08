<template>
  <div class="home">
    <home-header :lastCity="lastCity" />
    <HomeSwiper :list="swiperList" />
    <home-icons :list="iconList" />
    <Recommend :list="recommendList" />
    <Weekend :list="weekendList" />
  </div>
</template>
<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import Recommend from "./components/Recommend"
import Weekend from "./components/Weekend"
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend,
  },
  data () {
    return {
      lastCity: 'sss',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []

    }
  },
  methods: {
    //  axios  全局配置
    getHomeInfo () {
      this.$axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      //console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data

        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
  ,
  mounted () {
    // 钩子函数 挂载完成执行 
    this.getHomeInfo()
  }


}
</script>


