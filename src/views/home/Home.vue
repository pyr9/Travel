<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="data.swiperList"></home-swiper>
        <icons :iconList="data.iconList"></icons>
        <recommend :recommendList="data.recommendList"></recommend>
        <weekend :weekendList="data.weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import HomeSwiper from './components/HomeSwiper'
import axios from "axios";
import {computed, onActivated, onMounted, reactive} from "vue";
import {useStore} from "vuex";

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        Icons,
        Recommend,
        Weekend
    },
    setup() {
        const data = reactive({
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        })
        const store = useStore();
        const city = computed(() => {
            console.log(store.state)
            return store.state.city
        })

        function getHomeInfo() {
            axios.get('/api/index.json?city=' + city).then(getHomeInfoSuccess)
        }

        function getHomeInfoSuccess(res) {
            const result = res.data.data
            if (result) {
                data.swiperList = result.swiperList
                data.iconList = result.iconList
                data.recommendList = result.recommendList
                data.weekendList = result.weekendList
            }
        }

        onMounted(() => {
            data.lastCity = city
            getHomeInfo()
        })

        onActivated(() => {
            if (data.lastCity !== city) {
                data.lastCity = city
                getHomeInfo()
            }
        })
        return {data}
    }
    // data() {
    //     return {
    //         lastCity: '',
    //         swiperList: [],
    //         iconList: [],
    //         recommendList: [],
    //         weekendList: []
    //     }
    // },
    // methods: {
    //     getHomeInfo() {
    //         axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucess)
    //     },
    //     getHomeInfoSucess(res) {
    //         const data = res.data.data
    //         if (data) {
    //             this.swiperList = data.swiperList
    //             this.iconList = data.iconList
    //             this.recommendList = data.recommendList
    //             this.weekendList = data.weekendList
    //         }
    //     }
    // },
    // computed: {
    //     ...mapState(['city'])
    // },
    // mounted() {
    //     this.lastCity = this.city
    //     this.getHomeInfo()
    // },
    // activated() {
    //     if (this.lastCity !== this.city) {
    //         this.lastCity = this.city
    //         this.getHomeInfo()
    //     }
    // }
}
</script>

<style scoped>

</style>
