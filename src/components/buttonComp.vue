<template>
    <div class="warpper" >      
        <button class="my-btn" @click="gobtn()" :disabled="isDisable" :style="setStyle">
            {{dataMsg}}
            <!-- 插槽 外部数据插入 -->
            <slot></slot>
        </button>
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
            default:'../assets/微信打赏码.jpg'
        },
        type:{
            type:[String]
        },
        isDisable: false
    },
    data(){
        return{
            // 将数据转换为Js对象
            dataMsg:JSON.parse(this.data).txt
        }
    },
    computed:{
        setStyle(){
            return{
                width:this.width+'px',
                height:this.height+'px',
                fontSize:this.fontSize+'px',
                color:this.color,
                // lineHeight:this.height/2+'px'
            }
        }
    },
    methods: {
        gobtn(){
            alert('点击按钮')
        // 点击按钮之后禁用按钮
            this.isDisable = true

            setTimeout(() => {
                this.isDisable = false
            }, 2000)
        },
    }
    
}
</script>

<style scoped>
.warpper{
    user-select: none;
    overflow: hidden;
    height: 100px;
}
.my-btn {
    height: 20px;
    width: 80px;
    overflow: hidden;
    border-radius: 4px;
    border: none;
    border: 1px solid #ccc;
    outline: none;
    background-color: #fff;
    
}
.my-btn:hover {
    background-color: skyblue;
}
</style>