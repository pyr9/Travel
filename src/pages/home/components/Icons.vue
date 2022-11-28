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
import HomeSwiper from './Swiper'

export default {
  name: 'Icons',
  data: function () {
    return {
      iconImgUrlList: [
        {
          id: '0001',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/gonglue.png',
          desc: '景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01景点门票01'
        },
        {
          id: '0002',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/bitiyan.png',
          desc: '景点门票02'
        },
        {
          id: '0003',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/jingdian.png',
          desc: '景点门票03'
        },
        {
          id: '0004',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/zhusu.png',
          desc: '景点门票04'
        },
        {
          id: '0005',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/tesetiyan.png',
          desc: '景点门票05'
        },
        {
          id: '0006',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/gouwu.png',
          desc: '景点门票06'
        },
        {
          id: '0007',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/luxian.png',
          desc: '景点门票07'
        },
        {
          id: '0008',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/youji.png',
          desc: '景点门票08'
        },
        {
          id: '0009',
          imgUrl: '//s.qunarzz.com/travel/travel_hy2/2019/gonglue.png',
          desc: '景点门票09'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconImgUrlList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        console.log(pages)
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
