// 以下是导出并且全局注册组件的方法

// 先导入组件
import textComp from './textComp.vue'
import pictureComp from './pictureComp.vue'
import tabComp from './tabComp.vue'
import aComp from './aComp'
import buttonComp from './buttonComp.vue'
import videoComp from './videoComp.vue'

// 由于可能会导入很多组件，所以将这些组件都放在一个对象里面
let obj = {
    textComp,
    pictureComp,
    tabComp,
    aComp,
    buttonComp,
    videoComp
}

// 用install方法注册并使用组件
function install(Vue) {
    // 对obj对象进行遍历,遍历出来的是obj里所有组件组成的数组，再用forEach遍历对每个组件进行注册
    Object.keys(obj).forEach(key => {
        Vue.component(key,obj[key])
    })
}

// 定义一个要暴露的API
let API = {
    version:'1.0',
    install
}

// 将API暴露出去
export default API