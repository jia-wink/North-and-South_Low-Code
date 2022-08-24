// 导入getAttStr方法
import getAttStr from '../utils/index'

// 定义一个处理器，对外暴露属性,以方便页面最右边的样式控制
let handle = (attr,dataString)=> {
    // 暴露属性
    let attribute = [{
        key:'width',
        name:'宽度',
        value:'300',
        // 这里的type代表最终显示的控制方式是一个输入框，如果是select就是一个下拉
        type:'input',
        // 提示
        placehouler:'请输入宽度~'
    },{
        key:'height',
        name:'高度',
        value:'30',
        type:'input',
        placehouler:'请输入高度~'
    },{
        key:'color',
        name:'字体颜色',
        value:'#0000ff',
        type:'color',
        placehouler:'请选择颜色~'
    },{
        key:'fontSize',
        name:'字体大小',
        value:'14',
        type:'input',
        placehouler:'请输入字体大小~'
    },{
        key:'href',
        name:'链接地址',
        value:'https://www.baidu.com',
        type:'input',
        placehouler:'请输入链接地址~'
    }]
    // 如果有传参数，代表样式有被手动更新，那就使用新的样式
    if(attr){
        attribute = attr
    }
    // console.log(attribute[2].value);
    // 暴露数据
    let data = {txt:'我是链接组件~'}

    // let href={href:'http://www.baidu.com'}
    // 如果有传参数，代表数据有被手动更新，那就使用新的数据
    if(dataString){
        // 由于dataString是一个json对象，所以要将其转换为字符串
        data = JSON.parse(dataString)        
        
    }
    debugger;
    
    // 暴露模板
    let template = `<aComp ${getAttStr(attribute)} data='${JSON.stringify(data)}'></aComp>`

    // href='${JSON.stringify(href)
    return {attribute,data,template}
}

export default handle

