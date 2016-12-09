##Qunar项目初始化工具个人定制版（多页面）
[![](https://img.shields.io/npm/v/qunar-init.svg?style=flat-square)](https://www.npmjs.com/package/qunar-init) [![](https://img.shields.io/npm/dt/qunar-init.svg?style=flat-square)](https://www.npmjs.com/package/qunar-init) [![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/venoral/qunar-init/blob/master/LICENSE)

参考 [Qunar FED](https://github.com/doyoe/html-css-guide#directory) 文档目录结构，此脚手架为个人定制版，适合多页面开发。

###Build Setup
``` 
# install scaffold
npm install -g qunar-init

# mkdir and cd your project
mkdir project
cd project

# init project
qunar-init init

# install dependencies
npm install

# serve with reload at localhost:3000
npm run dev 

# build for production with minification
npm run build
```

###Feature
> * 支持sass自动编译
> * gulp监听更改文件浏览器自动刷新

###Directory Structure
```
src    /* 开发环境 */
|
|--index.html    /* 主页 */
|
|--html    /* 静态页面模板目录 */
|
|    |--qunar.html    /* qunar.html */
|
|--bgimg    /* 背景图目录 */
|
|--image    /* 前景图目录 */
|
|--scripts    /* 脚本目录 */
|
|    |--index.js    /* index.js */
|
|--styles    /* 样式目录 */
|
|    |--lib    /* 基础库 */
|
|    |--usage    /* 项目具体实现 */
|
|    |    |--index    /*  index样式组件示例 */
|
|    |    |    |--index.scss    /* index.scss样式 */
```
