<template>
  <div class="wrapper">
    <!-- 这里的顺序一定要是先item再index -->
    <!-- 加了draggable：true之后，就实现了组件可拖拽 -->
    <!-- 然后用data-type和data-name将数据绑定到组件上一起拖拽 -->
    <div 
        class="menuItem" 
        draggable="true" 
        :data-type="item.type"
        :data-name="item.name"
        @dragstart="dragStart"
        v-for="(item,index) in menu" 
        :key="index">
        {{item.name}}
    </div>
  </div>
</template>

<script>
import menuList from './menuList'
export default {
    data(){
        return{
            menu : menuList
        }
    },
    methods:{
        // 开始拖动的事件
        dragStart(e){
            let info = {
                name:e.target.getAttribute('data-name'),
                type:e.target.getAttribute('data-type'),
            }
            // 这里就是将拖拽组件的信息放在拖拽对象上
            e.dataTransfer.setData('info',JSON.stringify(info))
            // console.log(e);
        }
    }
}
</script>
<style lang="less" scoped>
    .wrapper{
        width: 245px;
        padding: 8px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .menuItem{
            width: 100px;
            height: 100px;
            // border: 1px solid black;
            background-color: #eee;
            padding: 5px;
            margin: 5px;
            text-align: center;
            line-height: 88px;
            // 设置鼠标移入之后的状态为一只手
            cursor: pointer;
        }
    }
</style>
