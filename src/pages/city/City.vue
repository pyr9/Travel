<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './Header'
import CitySearch from './search'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style scoped>

</style>
