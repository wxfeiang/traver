<template>
    <div class="home">
        <home-header/>
        <HomeSwiper/>
        <home-icons/>
        <Recommend/>
    </div>
</template>
<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import Recommend from "./components/Recommend"
export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        Recommend
    }


}
</script>


