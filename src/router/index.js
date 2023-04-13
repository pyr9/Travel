import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/views/home/Home";
import City from "@/views/city/City";
import Detail from "@/views/detial/Detail";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/city',
        name: 'city',
        component: City
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
