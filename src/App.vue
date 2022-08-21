<template>
  <div id="app">
    <HeadViewVue></HeadViewVue>
    <div class="content-box">
        <LeftViewVue></LeftViewVue>
        <CenterViewVue @throwComp="getComp"></CenterViewVue>
        <RightViewVue :reviseComp="passComp"></RightViewVue>
    </div>
  </div>
</template>

<script>
import HeadViewVue from './view/HeadView.vue';
import LeftViewVue from './view/LeftView.vue';
import CenterViewVue from './view/CenterView.vue';
import RightViewVue from './view/RightView.vue';

export default {
  name: 'App',
  components: {
    HeadViewVue,
    LeftViewVue,
    CenterViewVue,
    RightViewVue
  },
  data(){
    return{
        passComp: null
    }
  },
  methods:{
    getComp(comp){
        this.passComp = comp
        // console.log(this.passComp);
    }
  }
}
</script>

<style lang="less">
    .content-box{
        display: flex;
        height: calc(100vh - 80px);
    }
</style>
