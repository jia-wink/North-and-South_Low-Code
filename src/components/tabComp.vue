<template>
    <div class="warpper" :style="setStyle">      
        <div  class="tabItem"  @click="checkIndex=index" :class="{'active':checkIndex===index}" v-for="(item,index) in tabList" :key="index" :style="itemStyle">{{item}}</div>
    </div>
</template>

<script>
export default {
    props:{
        width:{
            type:[String,Number]
        },
        height:{
            type:[String,Number]
        },
        color:{
            type:[String]
        },
        fontSize:{
            type:[String,Number]
        },
        data:{
            type:String,
        },
        tabWidth:{
            type:[String,Number]
        }
    },
    data(){
        return{
            // 将数据转换为Js对象
            tabList:JSON.parse(this.data).txt,
            // 标签选中
            checkIndex:0
        }
    },
    computed:{
        // 设置tab标签的宽度
        itemStyle(){
            return {
                width:this.tabWidth +'px',
                // lineHeight:this.height+'px'
                fontSize:this.fontSize+'px',
                color:this.color,
            }
        },
        setStyle(){
            return{
                width:this.width+'px',
                height:this.height+'px',
                // fontSize:this.fontSize+'px',
                // color:this.color,
            }
        }
    }
}
</script>

<style scoped lang="less">
.warpper{
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    .tabItem{
        background: white;
            color: #333;
            font-size: 13px;
            padding: 2px 10px;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            &:hover{
                color: white;
                background: skyblue;
            }
            &.active{
                background: skyblue;        
            }
    }
}
span{
    /* overflow: hidden; */
    /* padding: 10px; */
    /* text-align: center; */
}
</style>