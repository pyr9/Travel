<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <alphabet :cities="cities" @letterChanged="handleLetterChanged"></alphabet>
    </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './Search'
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
            hotCities: [],
            cities: {},
            letter: ''
        }
    },
    // Q1: 是否可以改成created()
    // 这里不依赖某个dom元素，是可以改的吧,
    // created() 和mounted的区别?
    mounted() {
        this.queryCityInfo()
    },
    methods: {
        queryCityInfo() {
            axios.get('/api/city.json').then(this.querySucess)
        },
        querySucess(res) {
            const response = res.data
            if (response.success && response) {
                const data = response.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        },
        handleLetterChanged(letter) {
            this.letter = letter
        }
    }

}
</script>

<style scoped>

</style>
