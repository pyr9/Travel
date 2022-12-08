<template>
  <div>
    <div v-for="(item,index) in tickets" :key="index" class="border-bottom">
      <span class="item">
      {{ item.title }}
      </span>
      <div v-if="item.children" class="item-children">
        <detail-list :tickets="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    tickets: Array
  }
}
</script>

<style lang="stylus" scoped>
.item
  height .6rem
  line-height .6rem

.item-children
  padding 0 .2rem
</style>
