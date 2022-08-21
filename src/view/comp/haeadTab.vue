<template>
    <div class="wrapper">
        <div class="tabList" @click="checkTab(index)" :class="{'active':checkIndex===index}" v-for="(item,index) in tabList" :key="index">{{item}}</div>
    </div>
</template>

<script>
export default {
    components:{

    },
    props:{
        // 这里不需要接收子组件传回来的index
    },
    data(){
        return{
            // 顶部标签数据
            tabList:['样式','数据'],
            // 鼠标选中的标签index
            checkIndex: 0
        }
    },
    computed:{

    },
    methods:{
        // 切换标签的方法
         checkTab(index){
            this.checkIndex = index
            this.$emit('checkTabIndex',this.checkIndex)
         }
    },
    watch:{

    }
}
</script>

<style scoped lang="less">
.wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #eee;
    .tabList{
        
        // width: 125px;
        padding: 15px;
        // 鼠标样式
        cursor: pointer;
        text-align: center;
        // transition: 1s;
    }
    .active{
        // background-color: skyblue;
        border-bottom:2px solid skyblue;
    }
}
</style>