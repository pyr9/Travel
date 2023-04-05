<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :galleryImages="galleryImages" :sightName="sightName"></detail-banner>
        <detail-header></detail-header>
        <detail-list :categoryList="categoryList"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    data() {
        return {
            sightName: '',
            categoryList: [],
            bannerImg: '',
            galleryImages: []
        }
    },
    components: {
        DetailList,
        DetailBanner,
        DetailHeader,
        List: DetailList
    },
    methods: {
        queryCityDetailById() {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then((response) => {
                const data = response.data
                if (data.isSuccess && data.data) {
                    this.categoryList = data.data.categoryList
                    this.sightName = data.data.sightName
                    this.bannerImg = data.data.bannerImg
                    this.galleryImages = data.data.galleryImages
                }
            })
        }
    },
    mounted() {
        this.queryCityDetailById()
    }
}
</script>

<style lang="stylus" scoped>
.content
    height 900px
</style>
