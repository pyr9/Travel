<template>
  <div>
    <div class="top">
      热销推荐
    </div>
    <div class="list">
      <ul>
        <li>
          <div class="item">
              <div class="img">
                <img class="img-content" src="http://img1.qunarzz.com/sight/p22/201211/02/79e77fe51ee7579793835fbb.jpg_200x200_367fcc60.jpg"/>
              </div>
            <div class="desc-content">
              <p class="desc-title">梅峰揽胜</p>
              <p class="desc-info">人间仙境杭州，佛教圣地普陀山等你来玩！</p>
              <button class="desc-button">查看详情</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style scoped lang="stylus">
  .top
    line-height .8rem
    height .8rem
    background-color #eaeaea
    margin-top .1rem
    text-indent .2rem
  .item
   display flex
  .img-content
    width: 2rem;
    height: 2rem;
    overflow hidden
    padding .1rem

  .desc-content
    flex 1
    padding .1rem

    .desc-title
      font-size .32rem
      line-height 0.54rem

    .desc-info
      line-height .4rem
      color #ccc

    .desc-button
      line-height .44rem
      margin-top .16rem
      background-color #ff9300
      padding 0 .2rem
      border-radius .1rem
      color white
</style>
