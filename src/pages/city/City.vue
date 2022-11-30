<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city" :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <alphabet :cities="cities" @letterChanged="handleLetterChanged"></alphabet>
  </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './search'
import CityList from './CityList'
import Alphabet from './Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  data: function () {
    return {
      city: '',
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  mounted () {
    this.queryCityInfo()
  },
  methods: {
    queryCityInfo () {
      axios.get('/api/city.json').then(this.querySucess)
    },
    querySucess (res) {
      const response = res.data
      if (response.success && response) {
        const data = response.data
        this.city = data.city
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChanged (letter) {
      this.letter = letter
    }
  }

}
</script>

<style scoped>

</style>
