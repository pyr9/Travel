<template>
  <div class="header">
    <div class="image">
      <img src="http://img1.qunarzz.com/sight/p0/1807/2d/2d7a02e81c797c44a3.img.jpg_600x330_9cd133ba.jpg" alt="">
    </div>
    <div class="info">
      <div class="title">黑河国家森林公园(AAAA景区)</div>
      <div class="number"><span class="iconfont banner-icon">&#xe8d3;</span>39</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style scoped lang="stylus">
.header
  overflow hidden
  height 0
  padding-bottom 55%
  position relative

  .image
    width 100%

  .info
    display flex
    position absolute
    bottom 0
    left 0
    right 0
    color white
    line-height .6rem
    height .6rem

  .title
    flex 1
    font-size .32rem
    padding-left .2rem

  .number
    margin-top .1rem
    height .32rem
    line-height .32rem
    font-size .24rem
    padding 0 .4rem
    background-color black
    border-radius .2rem

    .banner-icon
      font-size .24rem

</style>
