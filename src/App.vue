<!--项目根组件-->
<template>
    <div id="app">
        <router-view v-slot="{ Component }">
            <keep-alive exclude="Detail">
                <component :is="Component"/>
            </keep-alive>
        </router-view>
    </div>
</template>
