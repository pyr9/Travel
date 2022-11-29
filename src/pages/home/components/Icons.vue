<template>
 <div class="icons">
   <swiper class="swiper">
     <swiper-slide v-for="(page, index) in pages" :key="index">
       <div class="icon" v-for="imgUrl in page" :key="imgUrl.id">
         <div class="img-content">
           <img class="img-content2" :src=imgUrl.imgUrl alt="">
         </div>
         <p class="icon-desc">{{imgUrl.desc}}</p>
       </div>
     </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
   </swiper>

 </div>
</template>

<script>
import HomeSwiper from './HomeSwiper'

export default {
  name: 'Icons',
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  components: {
    HomeSwiper
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    .icon
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      position relative
      .img-content
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        padding  .1rem
        box-sizing border-box
        .img-content2
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        line-height .44rem
        height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
