import Vue from "vue"

// 获取组件的属性
let getAttStr = (attrs) => {
    let attstr = ''
    attrs.forEach(item =>{
        attstr += item.key + "=" + item.value + "   "
    })
    return attstr
}

// 给每个组件获取一个id
export const getId = () => {
    // 获取一个随机id
    // floor是向下取整，然后乘一个1000的十六进制数，获取四位随即号码，并且保留字母
    let s4 = ()=> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' +s4();
}

// 挂载组件的方法
export const mountedComponent = (component) => {
    // 获取id
    let id = component.info.id
    // 定义一个data属性，用来存放样式的键值对
    let data = {}
    if(component.attribute){
        // 将样式以键值对的形式放入data中
        component.attribute.forEach(item => data[item.key] = item.value)
    }
    // 整合组件挂载到画布的挂载点上
    // 先等待挂载点加载完之后再进行实例化
    setTimeout(()=>{
        new Vue({
            name:id.toString(),
            data(){
                return data
            }, 
            // 获取挂载点的id
            el:document.getElementById(id),
            // 获取挂载点的模板
            template:component.template,
            mounted(){
                // 这里的this.$el就相当于要放到挂载点上的Vue组件
                this.$el.id = id
                // 由于要使用xy的值，所以要进行绝对定位
                this.$el.style.position = 'absolute'
                // 设置鼠标光标
                this.$el.style.cursor = 'pointer'
                // 设置组件在页面的位置
                this.$el.style.left = `${component.position.left}px`
                this.$el.style.top = `${component.position.top}px`
                // 设置层级
                this.$el.style.zIndex = `${component.position.zIndex}px`
                // 设置组件宽高
                this.$el.style.width = `${component.position.compWidth}px`
                this.$el.style.height = `${component.position.compHeight}px`
            }
        })
    },1)
}

export default getAttStr
