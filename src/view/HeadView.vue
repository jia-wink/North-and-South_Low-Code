<template>
    <div class="wrapper">
        <h3>North ande South Low-Code</h3>
        <div class="btn-box">
            <div class="btn active">预览</div>
            <div class="btn">保存</div>
            <div class="btn">发布</div>
            <div id="mybutton" @click="night">
                <i class="circle"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        // 切换日间\夜间模式,并且将方法传出到APP.vue
        night(){
            const mybutton = document.getElementById('mybutton');
            const borderactive = document.getElementsByClassName('wrapper')[0];
            mybutton.classList.toggle('active')
            borderactive.classList.toggle('active')
            this.$emit('nightDark')
        }
    }
}
</script>

<style scoped lang="less">
.wrapper {
    // background: #85b7e8;
    position: relative;
    height: 80px;
    display: flex;
    justify-content: space-between;
    // color: aliceblue;
    padding: 10px;
    align-items: center;
    // border-bottom: 1px solid #eee;
    box-shadow: 0px 5px 5px rgba(126, 126, 126,0.1);
    transition: 0.5s;
    z-index: 99;
    .btn-box {
        display: flex;
        width: 200px;
        justify-content: space-around;
        .btn{
            background: white;
            color: #333;
            font-size: 13px;
            padding: 2px 10px;
            border-radius: 4px;
            cursor: pointer;
            &:hover{
                color: white;
                background: skyblue;
            }
        }
        
    }
    &.active{
        box-shadow: 0px 5px 10px rgba(0, 0, 0,0.5);
    }
}
#mybutton{
    position: relative;
    display: block;
    height: 16px;
    width: 32px;
    border-radius: 16px;
    background-color: #f4f4f4;
    box-shadow: inset 0 2px 60px rgba(0, 0, 0, 0.1),
                inset 0 2px 8px rgba(0, 0, 0, 0.1),
                inset 0 -4px 4px rgba(0, 0, 0, 0.05);
    /* cursor是光标属性，当鼠标悬浮在上方时变成一个手 */
    cursor:pointer;
    /* 添加过渡动画，时长为0.5s */
    transition: 0.5s;
}
#mybutton.active{
    background-color: rgb(85, 84, 84);
    box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
                inset 0 8px 8px rgba(0, 0, 0, 0.1),
                inset 0 -4px 4px rgba(0, 0, 0, 0.1);
}
.circle{
    position: absolute;
    height: 16px;
    width: 16px;
    right: 0;
    border-radius: 100%;
    transform: scale(0.9);
    background-color: #f9f9f9;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
    /* 添加过渡动画，时长为0.5s */
    transition: 0.5s;
}
#mybutton.active .circle{
    right: 16px;
    background-color: black;
}
</style>