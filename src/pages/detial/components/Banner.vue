<template>
  <div>
    <div class="header" @click="handleBannerClick">
      <div class="image">
        <img src="http://img1.qunarzz.com/sight/p0/1807/2d/2d7a02e81c797c44a3.img.jpg_600x330_9cd133ba.jpg" alt="">
      </div>
      <div class="info">
        <div class="title">黑河国家森林公园(AAAA景区)</div>
        <div class="number"><span class="iconfont banner-icon">&#xe8d3;</span>39</div>
      </div>
    </div>
    <common-gallery :galleryImages="galleryImages" v-show="showGallery"
                    @closeGallery="handleGalleryClick"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery'

export default {
  name: 'DetailHeader',
  components: {
    CommonGallery
  },
  data: function () {
    return {
      showGallery: false,
      galleryImages: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/c6/c6dddc6f90e9d62490.img.jpg_r_800x800_601298ff.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/5f/5fe7deead2ea1b6d.water.jpg_r_800x800_a8cc3823.jpg'
      }]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClick () {
      this.showGallery = false
    }
  }
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
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

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
