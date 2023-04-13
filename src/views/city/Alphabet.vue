<template>
    <div class="list">
        <div v-for="(_, key) in cities" :key="key" @click="handleLetterChange">{{ key }}</div>
    </div>
</template>

<script>
export default {
    name: 'Alphabet',
    props: {
        cities: Object
    },
    methods: {
        handleLetterChange(e) {
            this.$emit('letterChanged', e.target.innerHTML)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"

.list
    position absolute
    right 0
    top 1.54rem
    width .5rem
    bottom 0
    display flex
    flex-direction column
    justify-content center
    text-align center
    line-height .44rem
    color $backgroundColor
</style>
