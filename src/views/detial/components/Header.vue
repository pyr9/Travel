<template>
    <div>
        <router-link v-show="showAbs" tag="div" to="/">
            <div class="circle">
                <span class="iconfont">&#xe624;</span>
            </div>
        </router-link>
        <div v-show="!showAbs" :style="opacityStyle" class="fixed">
            景点详情
        </div>
    </div>
</template>

<script>
import {onActivated, ref} from 'vue'

export default {
  name: 'Header',
  setup () {
    const showAbs = ref(true)
    const opacityStyle = ref({
      opacity: 0
    })

    function handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 43) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }

    onActivated(() => {
      window.addEventListener('scroll', handleScroll)
    })
    return {showAbs, opacityStyle}
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"

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

.fixed
    background-color: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    color: white
    text-align center
    position fixed
    top 0
    left 0
    right 0
    z-index 2
</style>
