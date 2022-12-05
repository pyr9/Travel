<template>
<router-link to="/" tag="div">
  <div class="circle">
    <span class="iconfont">&#xe624;</span>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
  .circle
    width .6rem
    height .6rem
    line-height .6rem
    background-color #333333
    position absolute
    top .2rem
    left .2rem
    border-radius .4rem
    color white
    font-size .4rem
    text-align center
</style>
