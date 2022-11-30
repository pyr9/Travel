<template>
  <div class="list">
    <div v-for="(_, key) in cities" :key="key">{{ key }}</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  }
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
  display flex
  flex-direction column
  justify-content center
  text-align center
  line-height .44rem
  color $backgroundColor
</style>
