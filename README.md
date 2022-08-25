# my-lowcode 项目使用文档

## 首先克隆项目

```
git clone https://github.com/jia-wink/North-and-South_Low-Code.git
```

## 然后下载依赖

由于本项目的包管理器使用的是yarn，所以建议使用yarn下载项目依赖

```
# 直接输入yar就可以安装本项目的所有依赖
yarn
```

如果你没有使用过yarn，那么得先全局安装yarn包管理器才能使用

```powershell
# 安装
npm install -g yarn
# 查看b
yarn --version
```

>另外，经过测试安装依赖使用npm install也是可以运行的，至于pnpm和cnpm请自行尝试，如果您希望对本项目进行二次开发在后续安装新依赖的时候请使用yarn add命令，否则会出现报错！

## 运行本项目

```
yarn serve
```

如果您在使用此命令运行项目的时候报出以下错误：

![image-20220825193604125](https://img2022.cnblogs.com/blog/2823867/202208/2823867-20220825194756376-552584522.png)

这是由于您的系统用户名为中文导致的，这里给出了三个解决办法：

1. 将您的系统用户名更改为英文（不建议，因为您可能需要重新配置环境变量等复杂操作）
2. 删掉根目录下的  `yarn.look`  文件（可选，请放心删除，此文件对本项目的运行不会有任何影响）
3. 使用  `npm run serve`  命令（ 可选，此命令对本项目不会有任何影响）

###  编译/打包/压缩

```
yarn build
```

### 自定义配置
参考 [Configuration Reference](https://cli.vuejs.org/config/).
