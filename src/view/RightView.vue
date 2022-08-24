<template>
    <div class="wrapper">
        <headTab @checkTabIndex="checkTab"></headTab>
        <!-- 选中了组件时 -->
        <div v-if="reviseComp">
            <!-- 样式 -->
            <div v-show="checkIndex === 0">
                <!-- 遍历属性，列出不同的属性值 -->
                <div class="styleItem" v-for="(item, index) in reviseComp.attribute" :key="index">
                    <!-- 如果是input类型 -->
                    <span class="lable">{{ item.name }}：</span>
                    <input class="inputStyle" type="text" v-if="item.type === 'input'" v-model="item.value"
                        @change="updateComp" :style="inputStyle">
                    <!-- 如果是color类型 -->
                    <input class="inputStyle" type="color" name="" id="" v-if="item.type === 'color'"
                        v-model="item.value" @change="updateComp" :style="inputStyle">
                </div>
            </div>
            <!-- 数据 -->
            <div v-show="checkIndex === 1">
                <div class="container" v-if="reviseComp.data.type">
                    <!-- <img src="./1.gif" alt="" class="picture"><img src="./1.gif" alt="" class="picture"><img src="./1.gif" alt="" class="picture"> -->
                    <div class="upload-dragger" @click="clickInput" @dragover="fileDragover" @dragenter="fileDragenter" @dragleave="fileDrapleave" @drop="fileDrag">
                        <!-- 阿里巴巴矢量图标库复制 -->
                        <svg class="upload-icon" viewBox="0 0 1024 1024" width="65" height="65">
                            <path
                                d="M815.104 363.008a307.2 307.2 0 0 0-606.72 0A256 256 0 0 0 256 870.4h204.8v-204.8H358.4l153.6-204.8 153.6 204.8h-102.4v204.8h204.8a256 256 0 0 0 47.104-507.392z"
                                fill="#8a8a8a"></path>
                        </svg>
                        <span class="upload-text">点击上传</span>
                        <span class="upload-text">或将文件拖到此处</span>
                    </div>
                    <input  type="file" name=""  class="upload-input" @change="imgInput" id="upload-input">
                </div>
                <textarea v-if="reviseComp.data.txt" class="dataBox" name="" id="" cols="35" rows="10" v-model="dataStr"
                    @change="updateComp" :style="inputStyle"></textarea>


            </div>
        </div>
        <!-- 没有选中组件时 -->
        <div class="noneComp" v-else>请选择一个组件(双击)~</div>
    </div>
</template>

<script>
// 导入头部标签组件
import headTab from './comp/haeadTab.vue'
// 导入处理器
import getTemplate from '../templates/index'
// 导入重新挂载组件的工具类
import { mountedComponent } from '@/utils'
export default {
    components: {
        headTab
    },
    props: {
        reviseComp: Object,
        outNight: Boolean
    },
    data() {
        return {
            checkIndex: 0,
            // 组件的数据
            dataStr: Object,
            // 判断外部是处于日间还是夜间模式
            night: true
            // 
        }
    },
    computed: {
        inputStyle() {
            if (!this.outNight & this.outNight != null) {
                return {
                    color: '#cfd3dc',
                    backgroundColor: '#2b2b2b'
                }
            }
        }
    },
    methods: {
        // 更换tab显示的内容
        checkTab(index) {
            // console.log(index);
            this.checkIndex = index
        },
        // 更新组件
        updateComp() {
            // 1.先获取组件的数据，传入到对应组件的处理器进行更新
            let component = getTemplate(this.reviseComp.info, this.reviseComp.attribute, this.dataStr)
            // 2.设置组件新的位置
            component.position = this.reviseComp.position
            // 3.重新挂载组件
            component.info = this.reviseComp.info
            mountedComponent(component)
            // console.log('ok');
            // 4.更新画布上的组件
            this.$emit('updateComp', component)
        },
        // 日夜模式(效果不好,不用了,直接用计算属性)
        rightChange() {
            // 先判断有没有选中组件,如果没有的话就懒得改了
            if (this.reviseComp) {
                // this.night = !this.night
                // // 修改input标签样式
                // const inputStyle = document.getElementsByClassName('inputStyle')
                // for (let i = 0; i < inputStyle.length; i++) {
                //     inputStyle[i].classList.toggle('active')
                // }
                // // 修改textarea样式
                // const textareaStyle = document.getElementsByClassName('dataBox')
                // for (let i = 0; i < textareaStyle.length; i++) {
                //     textareaStyle[i].classList.toggle('active')
                // }
            }
            // console.log(this.outNight);
            // console.log(this.night);
        },
        // 图片上传按钮被点击
        imgInput(e) {
            // console.log(e);
            // if(e.dataTransfer.files){
            //     let newimg = window.URL.createObjectURL(e.dataTransfer.files[0])
            //     this.dataStr = newimg
            //     this.updateComp()
            // }else{
            //     let newimg = window.URL.createObjectURL(e.target.files[0])
            //     this.dataStr = newimg
            //     this.updateComp()
            // }
            // let inputFile = document.getElementsByClassName('inputFile')[0]
            // let newimg = document.createElement('img')
            // let newimg = window.URL.createObjectURL(e.target.files[0])
            // inputFile.parentNode.insertBefore(newimg,inputFile);
            // this.dataStr = newimg
            // this.updateComp()
            this.updateFile(e.target.files)
        },
        // 更新图片
        updateFile(e){
            let newimg = window.URL.createObjectURL(e[0])
            // inputFile.parentNode.insertBefore(newimg,inputFile);
            this.dataStr = newimg
            this.updateComp()
        },
        // 上传框点击触发"文件选择按钮"的点击
        clickInput(){
            // 被隐藏的" 文件选择按钮 "
            let uploadInput = document.getElementById('upload-input')
            // 触发文件选择器的点击
            uploadInput.click()
            // this.imgInput()
        },
        // 在 uploadDragger 内部有拖拽行为时
        fileDragover(e){
            // 清空默认事件
            e.preventDefault()
        },
        // 拖拽进入 uploadDragger 时
        fileDragenter(){
            // 上传框
            let uploadDragger = document.getElementsByClassName('upload-dragger')[0]
            uploadDragger.classList.add('drag')
        },
        // 拖拽离开 uploadDragger 时
        fileDrapleave(){
            let uploadDragger = document.getElementsByClassName('upload-dragger')[0]
            uploadDragger.classList.remove('drag')
        },
        // 拖拽松开时
        fileDrag(e){
            // 禁止默认行为 (有些浏览器会在新页面预览图片) 
            e.preventDefault()
            // console.log(e.dataTransfer.files)
            let uploadDragger = document.getElementsByClassName('upload-dragger')[0]
            uploadDragger.classList.remove('drag')
            // this.imgInput(e)
            // console.log(e);
            this.updateFile(e.dataTransfer.files)
        }
    },
    watch: {
        // 监听组件的变化
        reviseComp(val) {
            // console.log(val);
            try {
                this.dataStr = JSON.stringify(val.data)
            } catch (error) {
                let noerr = '不可以报错哦'
            }

        },
    }
}
</script>

<style scoped lang="less">
.wrapper {
    width: 350px;
    user-select: none;
    .noneComp {
        padding: 15px;
    }

    .styleItem {
        margin: 10px;
        // padding: 5px 2px;
        display: flex;

        .lable {
            display: inline-block;
            width: 80px;
        }

        // 偷饿了么的样式
        .inputStyle {
            flex: 1 0;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 30px;
            line-height: 30px;
            outline: none;
            padding: 0 15px;
            transition: 0.5s;
            // transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

            &.active {
                color: #cfd3dc;
                background-color: #2b2b2b;
            }

            &:focus {
                outline: none;
                border-color: #409eff;
            }
        }
    }

    // .dataBox {
    //     max-width: 270px;
    //     max-height: calc(100vh - 170px);
    //     width: 90%;
    //     margin: 15px;
    // }

    .dataBox {
        display: block;
        resize: vertical;
        margin: 20px 35px;
        line-height: 1.5;
        box-sizing: border-box;
        width: 80%;
        font-size: inherit;
        color: #606266;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

        &.active {
            color: #cfd3dc;
            background-color: #2b2b2b;
        }

        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }  
}

// 上传按钮的样式
    .container {
            width: 300px;
            height: 300px;
            display: flex; 
             /*换行  */
            flex-wrap: wrap;
            /* flex容器在交叉轴上有多行, 该属性生效, 默认值为stretch, 
            导致flex容器将交叉轴上的多余空间按行数平均分给每行, 所以修改为 flex-start */
            align-content: flex-start;
            /* 滚动 */
            overflow-y: scroll;
            margin: 20px 35px;
        }

        /* 上传框 */
        .upload-dragger {
            width: 200px;
            height: 200px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: 3px dashed #C0C4CC;
            border-radius: 10px;
            box-sizing: border-box;
            /* 游标 */
            cursor: pointer;
        }
        .upload-text {
            color: #C0C4CC;
            font-size: 13px;
            /* 文字无法选中 */
            user-select: none;
        }
        .upload-icon path {
            fill: #C0C4CC;
        }

        /* 隐藏文件选择按钮 */
        #upload-input {
            display: none;
        }

        /* 鼠标移入上传框 */
        .upload-dragger:hover {
            border: 3px dashed skyblue;
        }
        /* 拖拽时的样式 */
        .upload-dragger.drag {
            border: 3px dashed skyblue;
        }
        .upload-dragger.drag .upload-text{
            color: skyblue;
        }
        .upload-dragger.drag .upload-icon path{
            fill: skyblue;
        }

        /* 拖拽时子元素禁用指针事件 (因为子元素会继承父元素的拖拽响应) */
        .upload-dragger.drag * {
            pointer-events: none;
        }

        /* 滚动条样式 */
        .container::-webkit-scrollbar {
            width: 5px;
            background-color: transparent;
        }
        /* 滑块 */
        .container::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: rgb(196, 196, 196);
        }
</style>