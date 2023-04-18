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
import {useRoute} from 'vue-router'
import {onMounted, ref} from 'vue'

export default {
  name: 'Detail',
  components: {
    DetailList,
    DetailBanner,
    DetailHeader,
    List: DetailList
  },
  setup () {
    let sightName = ref('')
    let categoryList = ref([])
    let bannerImg = ref('')
    let galleryImages = ref([])
    const route = useRoute()

    async function queryCityDetailById () {
      const response = await axios.get('/api/detail.json', {
        params: {
          id: route.params.id
        }
      })
      const res = response.data
      if (res.isSuccess && res.data) {
        categoryList.value = res.data.categoryList
        sightName.value = res.data.sightName
        bannerImg.value = res.data.bannerImg
        galleryImages.value = res.data.galleryImages
      }
    }

    onMounted(() => {
      queryCityDetailById()
    })

    return {sightName, categoryList, bannerImg, galleryImages}
  }
}
</script>

<style lang="stylus" scoped>
.content
    height 900px
</style>
