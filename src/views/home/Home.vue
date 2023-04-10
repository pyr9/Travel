<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <icons :iconList="iconList"></icons>
        <recommend :recommendList="recommendList"></recommend>
        <weekend :weekendList="weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import HomeSwiper from './components/HomeSwiper'
import axios from "axios";
import {onActivated, onMounted, ref} from "vue";
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
        // reactive主要用于将对象变成响应式对象， ref可以将基本类型变成响应式对象
        const lastCity = ref('')
        const swiperList = ref([])
        const iconList = ref([])
        const recommendList = ref([])
        const weekendList = ref([])
        const store = useStore();
        const city = store.state.city

        // ync 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。await 只能出现在 async 函数中
        async function getHomeInfo() {
            const res = await axios.get('/api/index.json?city=' + city)
            const result = res.data.data
            if (result) {
                // 这里由于ref实现是类似使用一个对象封装原来的对象，所以赋值不可以直接=，需要使用.value
                swiperList.value = result.swiperList
                iconList.value = result.iconList
                recommendList.value = result.recommendList
                weekendList.value = result.weekendList
            }
        }

        onMounted(() => {
            lastCity.value = city
            getHomeInfo()
        })

        onActivated(() => {
            if (lastCity !== city) {
                lastCity.value = city
                getHomeInfo()
            }
        })
        return {swiperList, iconList, recommendList, weekendList}
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
