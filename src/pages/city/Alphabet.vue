<template>
  <div class="list">
    <div>A</div>
    <div>A</div>
    <div>A</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet'
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"

.list
  position absolute
  right 0
  top 1.54rem
  width .5rem
  bottom 0
  background-color red
  display flex
  flex-direction column
  justify-content center
  text-align center
  line-height .44rem
  color $backgroundColor
</style>
