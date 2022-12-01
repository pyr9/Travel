<template>
  <div class="search">
    <input v-model="keyWord" class="search-input" type="text" placeholder="请输入城市或拼音">
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom" v-for="city in list" :key="city.id" @click="handleCityClick(city.name)">
          {{ city.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有出现匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
  name: 'Search',
  props: {
    cities: Object
  },
  // Q2: 是否可以改成mounted, 刷新页面后却发现滚动失效了
  updated () {
    this.scroll = new BScroll(this.$refs.search)
  },
  data () {
    return {
      keyWord: '',
      list: []
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(
      ['changeCity']
    )
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      // Q: 这里的this.timer 什么时候为null，打印出来一直都是有值的？
      this.timer = setTimeout(() => {
        const result = []
        for (const citiesKey in this.cities) {
          this.cities[citiesKey].forEach(city => {
            // Q: spell下面的波浪线能否取消？
            if (city.spell.indexOf(this.keyWord) > -1 || city.name.indexOf(this.keyWord) > -1) {
              result.push(city)
            }
          })
        }
        this.list = result
      }, 1000)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.search
  background-color $backgroundColor
  height .72rem
  padding 0 .1rem

  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .05rem
    padding 0 .1rem
    color #666

  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    overflow hidden
    background-color #fff

    .search-item
      line-height .6rem
      height .6rem
      padding-left .2rem
      color #666

</style>
