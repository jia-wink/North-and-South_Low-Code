<template>
  <div class="warpper" :style="setStyle" >
    <div v-for="(item,index) in tabList" :key="index" class="tabItem" :style="itemStyle">
      <input
        type="radio"
        name="radior"
        @click="checkIndex=index"
        :class="{'active':checkIndex===index}"
      />
      <label >{{ item }}</label>
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
    tabWidth: {
      type: [String, Number]
    },
    data: {
      type: String
    }
  },
  data() {
    return {
      // 将数据转换为Js对象
      tabList: JSON.parse(this.data).txt,
      // 标签选中
      checkIndex: 0
    };
  },
  computed: {
    // 设置tab标签的宽度
    itemStyle() {
      return {
        width: this.tabWidth + "px",
        // lineHeight:this.height+'px'
        fontSize: this.fontSize + "px",
        color: this.color
      };
    },
    setStyle() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        
        // fontSize:this.fontSize+'px',
        // color:this.color,
      };
    }
  }
};
</script>

<style scoped lang="less">
.warpper {
  overflow: hidden;
  display: flex;
  flex-direction: row;

  .tabItem {
    background: white;
    color: #333;
    font-size: 13px;
    padding: 2px 10px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    /* 文字无法选中 */
    user-select: none;

    display: flex;
  flex-direction: row;
    &:hover {
      color: white;
      background: #409eff;
    }
    &.active {
      background: #1e80ff;
    }
  }
}
span {
  /* overflow: hidden; */
  /* padding: 10px; */
  /* text-align: center; */
}
</style>