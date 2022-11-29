<template>
  <div>
    <div class="top">
      周末去哪儿
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
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Weekend',
  data: function () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/74/98a840f2a881b.jpg_r_640x214_1bf94c8e.jpg',
          title: '梅峰揽胜梅峰揽胜梅峰揽胜梅峰揽胜梅',
          info: '人间仙境杭州，佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！'
        },
        {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
          title: '梅峰揽胜梅峰揽胜梅峰揽胜梅峰揽胜梅',
          info: '人间仙境杭州，佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！佛教圣地普陀山等你来玩！'
        },
        {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1507/98/d9c848b0d7d65a.jpg_r_640x214_55778a01.jpg',
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

.img
  overflow hidden
  height 0
  padding-bottom 33%

.img-content
  width 100%
  overflow hidden

.desc-content
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

</style>
