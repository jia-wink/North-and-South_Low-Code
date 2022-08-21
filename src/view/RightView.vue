<template>
    <div class="wrapper">
        <headTab @checkTabIndex="checkTab"></headTab>
        <!-- 选中了组件时 -->
        <div v-if="reviseComp">
            <!-- 样式 -->
            <div v-if="checkIndex === 0">
                <!-- 遍历属性，列出不同的属性值 -->
                <div class="styleItem" v-for="(item,index) in reviseComp.attribute" :key="index">
                    <!-- 如果是input类型 -->
                    <span class="lable">{{item.name}}：</span>
                    <input class="inputStyle" type="text" v-if="item.type === 'input'" v-model="item.value" @blur="updateComp">
                    <!-- 如果是color类型 -->
                    <input class="inputStyle" type="color" name="" id="" v-if="item.type === 'color'" v-model="item.value" @change="updateComp">
                </div>
            </div>
            <!-- 数据 -->
            <div v-if="checkIndex === 1">
                <textarea class="dataBox" name="" id="" cols="35" rows="10" v-model="dataStr" @change="updateComp"></textarea>
            </div>
        </div>
        <!-- 没有选中组件时 -->
        <div class="noneComp" v-else>请选择一个组件~</div>
    </div>
</template>

<script>
// 导入头部标签组件
import headTab from './comp/haeadTab.vue'
// 导入处理器
import getTemplate from '../templates/index'
// 导入重新挂载组件的工具类
import { mountedComponent } from '@/utils'
export default {
    components: {
        headTab
    },
    props: {
        reviseComp: Object
    },
    data() {
        return {
            checkIndex: 0,
            // 组件的数据
            dataStr: ''
        }
    },
    computed: {

    },
    methods: {
        checkTab(index) {
            // console.log(index);
            this.checkIndex = index
        },
        // 更新组件
        updateComp(){
            // 1.先获取组件的数据，传入到对应组件的处理器进行更新
            let component = getTemplate(this.reviseComp.info,this.reviseComp.attribute,this.dataStr)
            // 2.设置组件新的位置
            component.position = this.reviseComp.position
            // 3.重新挂载组件
            component.info = this.reviseComp.info
            mountedComponent(component)
            // console.log('ok');
        }
    },
    watch: {
        // 监听组件的变化
        reviseComp(val){
            // console.log(val);
            this.dataStr = JSON.stringify(val.data)
        }
    }
}
</script>

<style scoped lang="less">
.wrapper {
    width: 300px;
    .noneComp {
        padding: 15px;
    }
    .styleItem{
        margin: 10px;
        // padding: 5px 2px;
        display: flex;
        .lable{
            display: inline-block;
            width: 80px;
        }
        .inputStyle{
            flex: 1 0;
        }
    }
    .dataBox{
        max-width: 270px;
        max-height: calc(100vh - 170px);
        width: 90%;
        margin: 15px;
    }
    
}
</style>