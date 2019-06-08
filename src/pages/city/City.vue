<template>
  <div>
    <CityHeader />
    <CitySerch />
    <CityList :cities="cities"
              :hot="hotCities"
               :letter="letter" />
    <CityAlphabet   :cities="cities"
      @change="handleLetterChange" />
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySerch from './components/Serch'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: "city",
  components: {
    CityHeader,
    CitySerch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''

    }
  },
  methods: {
    getCityInfo () {
      this.$axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }

    },
    handleLetterChange (letter) {
      // 接收子组件的方法
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

