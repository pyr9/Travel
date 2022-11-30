<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="current">
        <div class="title border-around">
          您的位置
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="hot">

        <div class="title border-around">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="letter">
        <div class="title border-around">A</div>
        <div class="item-list">
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
          <div class="item border-around">
            阿拉尔
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="stylus">
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
