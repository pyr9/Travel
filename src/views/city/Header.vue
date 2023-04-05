<template>
    <div class="header">
        <div class="top">
            城市选择
            <router-link to="/">
                <div class="header-left"><span class="iconfont">&#xe624;</span></div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
    .top
        position relative
        background-color $backgroundColor
        height $headerHeight
        line-height $headerHeight
        text-align center
        color white
        font-size .32rem

    .header-left
        position absolute
        color white
        width .64rem
        top 0
        left 0
        font-size .4rem
</style>
