<template>
    <div ref="wrapper" class="list">
        <div>
            <div class="current">
                <div class="title border-around">
                    您的位置
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            {{ city }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="hot">

                <div class="title border-around">热门城市</div>
                <div class="button-list">
                    <div v-for="hotCity in hotCities" :key="hotCity.id" class="button-wrapper">
                        <div class="button" @click="handleCityClick(hotCity.name)">
                            {{ hotCity.name }}
                        </div>
                    </div>
                </div>

                <div v-for="(items, key) in cities" :key="key" :ref="key" class="letter">
                    <div class="title border-around">{{ key }}</div>
                    <div class="item-list">
                        <div v-for="item in items" :key="item.id" class="item border-around"
                             @click="handleCityClick(item.name)">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BScroll from 'better-scroll'
import {mapGetters, mapMutations, mapState} from 'vuex'

export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    methods: {
        handleCityClick(cityName) {
            this.changeCity1(cityName)
            this.$router.push('/')
        },
        ...mapMutations(
            {changeCity1: 'changeCity'}
        )
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    computed: {
        // city () {
        //   return this.$store.state.city
        // }
        ...mapState(
            ['city']
        ),
        ...mapGetters(
            ['doubleCity']
        )
    },
    updated() {
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    overflow hidden

.border-around
    &:before
        border-color: #ccc

    &:after
        border-color #ccc

.title
    height .54rem
    line-height .5rem
    padding-left .2rem
    color #666
    background-color #eaeaea

.button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden

    .button-wrapper
        width 33.3%
        float left

    //padding .2rem .2rem .2rem .2rem

    .button
        margin .1rem
        border 1px solid #ccc
        padding .1rem 0
        text-align center
        border-radius .05rem

.item-list

    .item
        height .5rem
        line-height .5rem
        padding .1rem 0 .1rem .2rem

</style>
