<template>
    <div class="icons">
        <swiper class="swiper">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div v-for="imgUrl in page" :key="imgUrl.id" class="icon">
                    <div class="img-content">
                        <img :src=imgUrl.imgUrl alt="" class="img-content2">
                    </div>
                    <p class="icon-desc">{{ imgUrl.desc }}</p>
                </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
        </swiper>

    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

export default {
    name: 'Icons',
    props: {
        iconList: Array
    },
    components: {
        Swiper,
        SwiperSlide
    },
    computed: {
        pages() {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.icons >>> .swiper
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
            padding .1rem
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
