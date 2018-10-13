# geekhubFront
极客论坛前端

## 快速开始
1.克隆项目到本地

2.使用cnpm install安装相关依赖

3.配置package.json：


    本地Windows开发:
    "scripts": {
        "build": "set NODE_ENV=production-test && webpack --display-modules --display-chunks --config build/webpack.base.config.js",
        "dev": "set NODE_ENV=development && node ./build/dev-server.js",
        "release": "set NODE_ENV=production-online && webpack --display-modules --display-chunks --config build/webpack.base.config.js"
    },

    本地Mac开发:
    "scripts": {
        "build": "NODE_ENV=production-test webpack --display-modules --display-chunks --config build/webpack.base.config.js",
        "dev": "NODE_ENV=development node ./build/dev-server.js",
        "release": "NODE_ENV=production-online webpack --display-modules --display-chunks --config build/webpack.base.config.js"
    },

4.本地运行npm run dev，在本地进行开发

备注：如果需要使用本地sh，需要使用git bash进行本地/测试/线上打包

## 测试
如何执行自动化测试

## 如何贡献
**1.遵守开发代码规范，使用eslint进行规范**

**2.除了在views里写组件，不得在其他地方新建文件夹以修改项目结构，需要向项目总管申请**

**3.不得妄自修改别人的组件，不得修改build配置文件，需要向项目总管申请**

## 讨论
QQ讨论群：XXXX