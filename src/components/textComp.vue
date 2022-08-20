<template>
    <div class="warpper" :style="setStyle">      
        <span>{{dataMsg}}</span>
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
        }
    },
    data(){
        return{
            dataMsg:JSON.parse(this.data).txt
        }
    },
    computed:{
        setStyle(){
            return{
                width:this.width+'px',
                height:this.height+'px',
                fontSize:this.fontSize+'px',
                color:this.color+'px',
            }
        }
    }
}
</script>

<style>

</style>