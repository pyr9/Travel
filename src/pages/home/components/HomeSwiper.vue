<template>
  <swiper class="swiper" :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt=""/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
   //加了scope后，只能修饰本组件的样式，swiper-pagination-bullet-active不是当前组件的class，
   // 采用>>> 进行样式穿透，之后swiper组件的该class都会被改成白色
  .swiper >>> .swiper-pagination-bullet-active
    background  white
  .swiper
     // 使得长宽永远保持31.25%
     width 100%
     height 0
     overflow hidden
     padding-bottom 31.25%
     background-color #cacaca
     .swiper-img
       width 100%
</style>
