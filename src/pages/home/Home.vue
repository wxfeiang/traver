<template>
    <div class="home">
        <home-header/>
        <HomeSwiper/>
        <home-icons/>
        <Recommend/>
        <Weekend/>
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
    }


}
</script>


