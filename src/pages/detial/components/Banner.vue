<template>
  <div>
    <div class="header" @click="handleBannerClick">
      <div class="image">
        <img :src="bannerImg" alt="">
      </div>
      <div class="info">
        <div class="title">{{ sightName }}}</div>
        <div class="number"><span class="iconfont banner-icon">&#xe8d3;</span>{{ this.galleryImages.length }}</div>
      </div>
    </div>
    <common-gallery v-show="showGallery" :galleryImages="galleryImages"
                    @closeGallery="handleGalleryClick"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '../../../common/gallery/Gallery'

export default {
  name: 'DetailHeader',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImages: Array
  },
  components: {
    CommonGallery
  },
  data: function () {
    return {
      showGallery: false
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

<style lang="stylus" scoped>
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
