<template>
    <div>
        <div class="top">
            热销推荐
        </div>
        <div class="list">
            <ul>
                <router-link v-for="recommend in recommendList"
                             :key="recommend.id"
                             :to="'/detail/'+recommend.id"
                             tag="li">
                    <div class="item">
                        <div class="img">
                            <img :src="recommend.imgUrl" class="img-content"/>
                        </div>
                        <div class="desc-content">
                            <p class="desc-title">{{ recommend.title }}</p>
                            <p class="desc-info">
                                {{ recommend.desc }}</p>
                            <button class="desc-button">查看详情</button>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Recommend',
    props: {
        recommendList: Array
    }
}
</script>

<style lang="stylus" scoped>
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
