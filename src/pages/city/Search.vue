<template>
  <div class="search">
    <input v-model="keyWord" class="search-input" type="text" placeholder="请输入城市或拼音">
    <div class="search-content">
      <ul>
        <li v-for="city in list" :key="city.id">{{ city.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: []
    }
  },
  watch: {
    keyWord () {
      const result = []
      for (const citiesKey in this.cities) {
        this.cities[citiesKey].forEach(city => {
          if (city.spell.indexOf(this.keyWord) > -1 || city.name.indexOf(this.keyWord) > -1) {
            result.push(city)
          }
        })
        this.list = result
      }
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
    background-color red
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    overflow hidden
</style>
