<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :tickets="tickets"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      tickets: [
        {
          title: '成人票',
          children: [{
            title: '成人联票',
            children: [
              {title: '成人联票-1'},
              {title: '成人联票-2'}
            ]
          },
          {
            title: '成人单项目票',
            children: [
              {title: '成人单项目票-1'},
              {title: '成人单项目票-2'}
            ]
          }]
        },
        {title: '儿童票'}
      ]
    }
  },
  components: {
    DetailList,
    DetailBanner,
    DetailHeader,
    List: DetailList
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 900px
</style>
