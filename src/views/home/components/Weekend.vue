<template>
    <div>
        <div class="top">
            周末去哪儿
        </div>
        <div class="list">
            <ul>
                <li v-for="recommend in weekendList" :key="recommend.id">
                    <div class="item">
                        <div class="img">
                            <img :src="recommend.imgUrl" class="img-content"/>
                        </div>
                        <div class="desc-content">
                            <p class="desc-title">{{ recommend.title }}</p>
                            <p class="desc-info">
                                {{ recommend.desc }}</p>
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
    props: {
        weekendList: Array
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
