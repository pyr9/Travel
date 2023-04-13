<template>
    <div class="container" @click="handleGalleryClick">
        <div class="image-wrapper">
            <swiper :options="swiperOptions" class="swiper">
                <swiper-slide v-for="item of galleryImages" :key="item.id">
                    <img :src="item.imgUrl" alt="" class="swiper-img"/>
                </swiper-slide>
                <div slot="pagination" class="swiper-pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

import {Swiper, SwiperSlide} from "swiper/vue";

export default {
    name: 'CommonGallery',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        galleryImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data: function () {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    observer: true,
                    observeParents: true
                },
                loop: true,
                autoplay: false
            }
        }
    },
    methods: {
        handleGalleryClick(e) {
            this.$emit('closeGallery')
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper
    overflow inherit

.container
    z-index 99
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    overflow hidden
    background-color black
    display flex
    flex-direction column
    justify-content center

.image-wrapper
    width 100%
    height 0
    padding-bottom 55.5%

    .swiper-pagination
        bottom - 1rem
        color white

    .swiper-img
        width 100%
</style>
