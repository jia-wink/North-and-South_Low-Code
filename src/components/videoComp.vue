<template>
    <div class="warpper" >      
        <video :src="pictureUrl" :style="setStyle"  controls :poster=defaultUrl autoplay="autoplay"></video>
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
            defaultUrl: require('../assets/播放.jpg')
        }
    },
    computed:{
        // 图片的地址
        pictureUrl(){
            console.log(this.dataMsg);
            
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
    user-select: none;
    overflow: hidden;
}
span{
    /* overflow: hidden; */
    /* padding: 10px; */
    /* text-align: center; */
}
</style>