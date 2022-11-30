<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入景点/游玩/主题</div>
    <RouterLink to="/city">
      <div class="header-right">{{ city }}<span class="iconfont icon">&#xeb6d;</span></div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
//@import "../../../assets/styles/varibles.styl"
// css引入其他css,需要加波浪线
@import "~styles/varibles.styl"

  .header
    display: flex
    background-color: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    color: white
  .header-left
    width: .64rem
    float :left
    text-align center
    font-size .4rem
  .header-input
    flex : 1
    margin-top : .12rem
    height :.62rem
    line-height :.62rem
    margin-left :.2rem
    padding-left .1rem
    background-color :white
    border-radius : .1rem
    color :#ccc
  .header-right
    width: 1.24rem
    float :right
    text-align: center
    color white
    .icon
      font-size .2rem
</style>
