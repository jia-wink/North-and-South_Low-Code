<template>
    <div class="warpper" >      
        <img :src="pictureUrl || defaultUrl" alt="" :style="setStyle">
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
            dataMsg:JSON.parse(this.data).file,
            // 默认图片,用rqequire是要调用地址处理器，否则会地址被解析成一个模块，里面只能放静态资源
            defaultUrl: require('../assets/vx.jpg')
        }
    },
    computed:{
        // 图片的地址
        pictureUrl(){
            // console.log(this.dataMsg);
            
            return this.dataMsg
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