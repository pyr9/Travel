<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入景点/游玩/主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display :flex
    background-color :#54b8d3
    height: .86rem
    line-height : .86rem
    color :white
  .header-left
    width: .64rem
    float :left
  .header-input
    flex : 1
    margin-top : .12rem
    height :.62rem
    line-height :.62rem
    margin-left :.2rem
    background-color :white
    border-radius : .1rem
    color :#ccc
  .header-right
    width: 1.24rem
    float :right
    text-align: center
</style>
