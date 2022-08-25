<template>
    <div class="wrapper">
        <HeadViewVue @nightDark='nightDark' @preview="preview"></HeadViewVue>
        <div class="content-box">
            <LeftViewVue ref="left"></LeftViewVue>
            <CenterViewVue @throwComp="getComp" ref="center" :newComp="passComp"></CenterViewVue>
            <RightViewVue :reviseComp="passComp" ref="right" :outNight="night" @updateComp="newComp"></RightViewVue>
        </div>
        <preview @haveHtml="haveHtml" v-show="false"></preview>
    </div>
</template>

<script>
import HeadViewVue from './view/HeadView.vue';
import LeftViewVue from './view/LeftView.vue';
import CenterViewVue from './view/CenterView.vue';
import RightViewVue from './view/RightView.vue';
import preview from './view/preview.vue'

export default {
    name: 'App',
    components: {
        HeadViewVue,
        LeftViewVue,
        CenterViewVue,
        RightViewVue,
        preview
    },
    data() {
        return {
            // 日间和夜间模式(主要用来传递给右侧组件进行样式控制)
            night: null,
            // 要传递的组件
            passComp: null
        }
    },
    methods: {
        // 将center传出来的组件保存到data中
        getComp(comp) {
            this.passComp = comp
            // console.log(this.passComp);
        },
        // 黑白模式
        nightDark() {
            if (this.night === null) {
                this.night = true
            }
            this.night = !this.night
            // console.log(this.night);
            // 控制全局样式
            const leftRight = document.getElementById('app');
            leftRight.classList.toggle('active')
            // 控制左边样式
            this.$refs.left.leftChange()
            // 控制中间的样式
            this.$refs.center.centerChange()
            // 控制右边样式(效果不好,改用计算属性了)
            this.$refs.right.rightChange()
        },
        // 回去画布更新组件
        newComp(comp) {
            this.passComp = comp
        },
        // 页面预览
        preview(){
            this.$refs.center.getHtml()
        },

        haveHtml(e){
            console.log(e);
        }
    }
}
</script>

<style lang="less">
#app {
    background-color: #f8f8f8;
    color: #2b2b2b;
    transition: 0.5s;
}

#app.active {
    background: #2b2b2b;
    color: #f8f8f8;
}

.content-box {
    display: flex;
    height: calc(100vh - 80px);
}
</style>