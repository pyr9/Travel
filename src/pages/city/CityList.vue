<template>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.border-around
  &:before
    border-color: #ccc

  &:after
    border-color #ccc

.title
  height .5rem
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
</style>
