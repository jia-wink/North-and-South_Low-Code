import Vue from "vue";
import VueRouter from "vue-router";

// 进行全局引用
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component:()=>import('../main.vue'),
        // childern:[{
        //     path:'/preview',
        //     comment: ()=>import("../view/preview.vue")
        // }]
    },
    {
        path:'/preview',
        name:'preview',
        component: ()=>import("../view/preview.vue")
    }
]

// 进行路由的配置
const router = new VueRouter({
    // mode: 'history',
    routes
})

//  将路由进行暴露
export default router