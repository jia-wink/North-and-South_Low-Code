// 将处理器整合之后进行暴露
// 导入处理器
import textComp from './textTemp'

// 将处理器放在一个对象里面
let obj ={
    textComp
}

// 对外暴露一个方法，通过这个方法动态获取对应的处理器
// info至少包含一个info.type（就是组件的名称）
let getTemplate  = (info,attribute,data) => {
    // 这里的info.type就是对应的处理器
    return obj[info.type](attribute,data)
}

export default getTemplate

