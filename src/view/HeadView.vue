<template>
    <div class="wrapper">
        <h3>嘎嘎学前端</h3>
        <div class="btn-box">
            <div class="btn active">预览</div>
            <div class="btn">保存</div>
            <div class="btn">发布</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.wrapper {
    background: #000000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    color: aliceblue;
    padding: 10px;
    align-items: center;

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
            &.active{
                color: white;
                background: skyblue;
            }
        }
    }
}
</style>