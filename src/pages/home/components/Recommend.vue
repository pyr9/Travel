<template>
  <div>
    <div class="top">
      热销推荐
    </div>
    <div class="list">
      <ul>
        <li v-for="recommend in recommendList" :key="recommend.id">
          <div class="item">
            <div class="img">
              <img class="img-content" :src="recommend.imgUrl"/>
            </div>
            <div class="desc-content">
              <p class="desc-title">{{ recommend.title }}</p>
              <p class="desc-info">
                {{ recommend.info }}</p>
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
  name: 'Recommend',
  data: function () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p22/201211/02/79e77fe51ee7579793835fbb.jpg_200x200_367fcc60.jpg',
          title: '梅峰揽胜梅峰揽胜梅峰揽胜梅峰揽胜梅',
          info: '人间仙境杭州，佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1903/f4/f458a2c1e2e35edba3.img.jpg_200x200_657b1119.jpg',
          title: '梅峰揽胜梅峰揽胜梅峰揽胜梅峰揽胜梅',
          info: '人间仙境杭州，佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/21/83a2599d05c5ce25b76b0675eff7fd84.jpg_200x200_83cba736.jpg',
          title: '梅峰揽胜梅峰揽胜梅峰揽胜梅峰揽胜梅',
          info: '人间仙境杭州，佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！'
        },
        {
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
          title: '梅峰揽胜梅峰揽胜梅峰揽胜梅峰揽胜梅',
          info: '人间仙境杭州，佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/mixins.styl"
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
    min-width 0
    .desc-title
      font-size .32rem
      line-height 0.54rem
      ellipsis()
    .desc-info
      line-height .4rem
      color #ccc
      ellipsis()

    .desc-button
      line-height .44rem
      margin-top .16rem
      background-color #ff9300
      padding 0 .2rem
      border-radius .1rem
      color white
</style>
