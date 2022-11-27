<template>
 <div class="icons">
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
      <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
   <div class="icon">
     <div class="img-content">
       <img class="img-content2" src="http://img1.qunarzz.com/sight/p0/1902/49/49859385dce03352a3.img.jpg_250x250_9b40f933.jpg" alt="">
     </div>
     <p class="icon-desc">景点门票</p>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Icons'
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
  .icons
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
</style>
