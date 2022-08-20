<template>
    <!-- 这里很巧妙地定义了一个点击事件，当内部的组件被点击的时候会冒泡到外部触发点击事件 -->
    <div class="wrapper" @dragover="dragOver" @drop="drop" @click="foucusComp">
        <div :id="item.info.id" v-for="(item, index) in components" :key="index"></div>
        <!-- 定义一个鼠标选中时才会显示的div -->
        <div id="borderBox"  class="foucusStyle" v-if="focusComp" :style="focusStyle" @mousedown='mouseDown'></div>
    </div>
</template>

<script>
import { getId, mountedComponent } from "../utils";
import getTemplate from "../templates/index";
export default {
    data() {
        return {
            // 用来存放拖入画布的组件
            components: [],
            // 定义一下每个组件的层级
            zIndex: 0,
            // 当鼠标选中时候的组件
            focusComp:null,
            // 用来记录鼠标移动组件时的坐标
            starPosition:{x:0,y:0}
        }
    },
    methods: {
        // 拖拽到画布的事件
        dragOver(e) {
            // 拖到画布之后，阻止默认行为，也就是让拖拽的元素可以让画布接收到
            e.preventDefault()
        },
        // 鼠标松开的事件
        drop(e) {
            e.preventDefault()
            // 获取到拖过来的组件的数据
            let info = JSON.parse(e.dataTransfer.getData('info'))
            // 给每个拖入的组件设置一个id，这样的话可以区分多个相同类型的组件
            info.id = getId()
            let component = getTemplate(info)
            component.info = info
            // 让层级+1
            this.zIndex++
            // 找到组件的宽
            let compWidth = component.attribute.find(item => item.key === 'width').value
            // 找到组件的高
            let compHeight = component.attribute.find(item => item.key === 'height').value
            // 获得宽高值
            // const width = compWidth.value
            // const height = compHeight.value
            // 获得鼠标松开时组件离画布左边和上边的距离
            let left = e.offsetX - compWidth / 2
            let top = e.offsetY - compHeight / 2
            // 对left和top进行限制
            if (left < 0) left = 0
            if (top < 0) top = 0
            // 将组件的所有位置信息整合到position里
            component.position = { compWidth, compHeight, left, top, zIndex: this.zIndex }
            // 将组件放到组件数组里
            this.components.push(component)
            // 在画布挂载组件
            mountedComponent(component)
        },
        foucusComp(e){
            // 通过正则表达式匹配ID
            // console.log(e.target);
            let fId = /\w{8}-\w{4}/
            // e.target就是目标组件
            let node = e.target;
            // 定义一个count计数
            let count = 0
            // 如果找不到node或者不是组件的id，就继续寻找
            while(node&& !fId.test(node.id)){
                count++
                // 这里最开始找到的是span，由于没有id，就继续往上层寻找找到包裹的div就有了id
                node = node.parentNode
            }
            // 找到id之后，通过id获取对应的组件，此时focusComp就是我们点击的组件
            if(node&&node.id){
                this.focusComp = this.components.find(item =>{
                    if(item.info.id === node.id){
                        return item
                    }
                })
            }else{
                console.log('找不到呜呜呜');
                this.focusComp = null
            }
        },
        // 鼠标按下的事件
        mouseDown(e){
            // 记录鼠标按下时的位置
            this.starPosition.x = e.clientX;
            this.starPosition.y = e.clientY;
            // 鼠标移动时的事件
            document.addEventListener('mousemove',this.mouseMove,true)
            // 记录鼠标松开的事件
            document.addEventListener('mouseup',this.mouseUp,true)
        },
        // 鼠标移动的事件
        mouseMove(e){
            // 先计算偏移量
            let offsetX = e.clientX - this.starPosition.x
            let offsetY = e.clientY - this.starPosition.y

            // 设置组件的移动位置
            // 先通过id获取当前组件
            let comp = document.getElementById(this.focusComp.info.id)
            // 然后修改组件的样式,Object可以实现对象属性的合并（部分更新），在这里就是将新的坐标位置更新到组件的样式上
            Object.assign(comp.style,{
                left:this.focusComp.position.left + offsetX + 'px',
                top:this.focusComp.position.top + offsetY + 'px'
            })

            // 设置鼠标选中框移动位置
            let borderBox = document.getElementById('borderBox')
            // 然后修改组件的样式,Object可以实现对象属性的合并（部分更新），在这里就是将新的坐标位置更新到组件的样式上
            Object.assign(borderBox.style,{
                left:this.focusComp.position.left + offsetX + 'px',
                top:this.focusComp.position.top + offsetY + 'px'
            })
        },
        // 鼠标松开的事件
        mouseUp(e){
            console.log(e);
            // 鼠标松开之后，要移除监听事件
            document.removeEventListener('mousemove',this.mouseMove,true) 
            document.removeEventListener('mouseup',this.mouseUp,true) 

            // 更新组件的数据
            this.focusComp.position.left = this.focusComp.position.left +(e.clientX - this.starPosition.x)
            this.focusComp.position.top = this.focusComp.position.top +(e.clientY - this.starPosition.y)
        }
    },
    computed:{
        // 设置鼠标点击组件之后的样式
        focusStyle(){
            let compWidth = 0
            let compHeight = 0
            // 如果获取到了组件，就开始处理样式
            if(this.focusComp){
                // 下面这一段与42/44行的效果是一样的，两种不同的实现方式，加以区别参考
                this.focusComp.attribute.forEach(item => {
                    if(item.key === 'width'){
                        compWidth = item.value
                    }
                    if(item.key === 'height'){
                        compHeight = item.value
                    }
                });
                return {
                    // 整理样式return出去
                        width:`${compHeight}px`,
                        height:`${compHeight}px`,
                        left:`${this.focusComp.position.left}px`,
                        top:`${this.focusComp.position.top}px`,
                        zIndex:`${this.focusComp.position.zIndex}`
                    }
            }
        }
    }

}
</script>

<style lang="less" scoped>
.wrapper {
    flex: 1;
    background-color: #eee;
    position: relative;
}
.foucusStyle{
    border: 1px solid skyblue;
    position: absolute;
}
</style>>