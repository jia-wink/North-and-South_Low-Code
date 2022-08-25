<template>
  <div class="warpper" :style="setStyle">
    <!-- <div
      class="tabItem"
      @click="checkIndex=index"
      :class="{'active':checkIndex===index}"
      v-for="(item,index) in tabList"
      :key="index"
      :style="itemStyle"
    >{{item}}</div>-->
    <!-- 照搬不能用循环，否则一行一个字 -->
    
    <div class="tabItem" >
      <div>{{dataList}}</div>
      <!-- <el-link type="primary">主要链接</el-link> -->
      <!-- <button  class="btn">跳转</button> -->
      <el-button class="btn" type="primary" round size="mini" @click="gohref(href)">跳转</el-button>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    color: {
      type: [String]
    },
    fontSize: {
      type: [String, Number]
    },
    href: {
      type: [String]
    },
    data: {
      type: String
      // default:'../assets/微信打赏码.jpg'
    }
  },
  data() {
    return {
      // 将数据转换为Js对象
      dataList: JSON.parse(this.data).txt,
      checkIndex: 0
    };
  },
  computed: {
    setStyle() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        fontSize: this.fontSize + "px",
        color: this.color,
        href: this.href
        // lineHeight:this.height/2+'px'
      };
    }
  },
  methods: {
    gohref(href){
        let r=confirm('请问是否要跳转到'+href+'页面？')
        if(r){
          window.open(href,'_blank')
        }
        
    }
  }
};
</script>

<style scoped lang="less">
.warpper {
  overflow: hidden;
  // 文字不能被选中
  user-select: none;
  .tabItem {
    border-radius:8px ;
    text-align: center;
    color: #409EFF;
    &:hover {
      color: #1E80FF;
      background: white;
    }
    // &.active {
    //   background: red;
    // }
  }
  .btn{
    // background-color: skyblue;
  }
}
</style>