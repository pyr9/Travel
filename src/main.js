// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口文件
// 路由就是根据网址的不同，返回给用户不同的内容
import {createApp} from 'vue'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目的入口文件
// 路由就是根据网址的不同，返回给用户不同的内容
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import store from './store'

fastClick.attach(document.body)

createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')
