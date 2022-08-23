<template>
    <div class="warpper" >      
        <img :src="pictureUrl" alt="" :style="setStyle">
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
        data:{
            type:String,
        }
    },
    data(){
        return{
            // 将数据转换为Js对象
            dataMsg:JSON.parse(this.data).fileName
        }
    },
    computed:{
        // 图片的地址
        pictureUrl(){
            return require('../assets/'+this.dataMsg)
        },
        // 图片的样式
        setStyle(){
            return{
                width:this.width+'px',
                height:this.height+'px',
            }
        }
    }
}
</script>

<style scoped>
.warpper{
    overflow: hidden;
}
span{
    /* overflow: hidden; */
    /* padding: 10px; */
    /* text-align: center; */
}
</style>