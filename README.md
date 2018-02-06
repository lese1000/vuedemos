# vuedemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).






================================================================================

### 初始文件解析
```
├── README.md                       // 项目说明文档
├── node_modules                    // 项目依赖包文件夹
├── build                           // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                          // 项目基本设置文件夹
│   ├── dev.env.js              // 开发配置文件
│   ├── index.js                    // 配置主文件
│   └── prod.env.js             // 编译配置文件
├── index.html                      // 项目入口文件
├── package-lock.json           // npm5 新增文件，优化性能
├── package.json                    // 项目依赖包配置文件
├── src                             // 我们的项目的源码编写文件
│   ├── App.vue                 // APP入口文件
│   ├── assets                      // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components              // 组件目录
│   │   └── Hello.vue           // 测试组件，回头删除
│   ├── main.js                 // 主配置文件
│   └── router                      // 路由配置文件夹
│       └── index.js            // 路由配置文件
└── static                          // 资源放置目录
```

=============================================================================

### 调整后的项目结构

```
src
├── App.vue                         // APP入口文件
├── api                             // 接口调用工具文件夹
│   └── index.js                    // 接口调用工具
├── components                      // 组件文件夹，目前为空
├── config                          // 项目配置文件夹
│   └── index.js                    // 项目配置文件
├── frame                           // 子路由文件夹
│   └── frame.vue                   // 默认子路由文件
├── main.js                         // 项目配置文件
├── page                                // 我们的页面组件文件夹
│   ├── content.vue             // 准备些 cnodejs 的内容页面
│   └── index.vue                   // 准备些 cnodejs 的列表页面
├── router                          // 路由配置文件夹
│   └── index.js                    // 路由配置文件
├── style                           // scss 样式存放目录
│   ├── base                        // 基础样式存放目录
│   │   ├── _base.scss          // 基础样式文件
│   │   ├── _color.scss     // 项目颜色配置变量文件
│   │   ├── _mixin.scss     // scss 混入文件
│   │   └── _reset.scss     // 浏览器初始化文件
│   ├── scss                        // 页面样式文件夹
│   │   ├── _content.scss       // 内容页面样式文件
│   │   └── _index.scss     // 列表样式文件
│   └── style.scss              // 主样式文件
└── utils                           // 常用工具文件夹
    └── index.js                    // 常用工具文件

static
├── css             // 放一些第三方的样式文件
├── font                // 放字体图标文件
├── image           // 放图片文件，如果是复杂项目，可以在这里面再分门别类
└── js              // 放一些第三方的JS文件，如 jquery
```


==========================================================================
#### 因为使用了 scss 文件预编译，所以我们需要安装两个支持 scss 的 npm 包:
```
npm install sass-loader -D
npm install node-sass -D
```

==========================================================================
#### 安装 axios 工具:【ajax请求】
```
npm install axios -D
```

=========================================================================
```
-S 是 --save的简写  安装的包的名称及版本号存在package.json的dependencies里面
-D 是 --save-dev 的简写 安装的包的名称及版本号存在package.json的devDependencies
```

==========================================================================
### 配置 webpack 将接口代理到本地
config/index.js 文件，找到以下代码：
```
dev: {
   env: require('./dev.env'),
   port: 8080,
   autoOpenBrowser: true,
   assetsSubDirectory: 'static',
   assetsPublicPath: '/',
   proxyTable: {}, //配置代理
   cssSourceMap: false
 }
 ```
#### 1.代理配置：
```
proxyTable: {
  '/api/v1/**': {
    target: 'https://cnodejs.org', // 你接口的域名
    secure: false,
    changeOrigin: false,
  }
}
```
#### 2.src/api/index.js 文件
// 配置API接口地址
```
var root = '/api/v1'
```
注意：需要重启项目生效！！！
==========================================================================
### 打包项目
#### 1.去掉 map 文件
在 /config/index.js 文件，找到其中的
```
productionSourceMap: true,
```
修改为：
```
productionSourceMap: false,
```
#### 2.运行打包命令：
```
npm run build
```
注意：文件打包位置于项目目录里面的 dist 文件夹内。
实际开发中，只需要把 dist 文件夹中打包好的文件

```
dist
├── index.html
└── static
    ├── css
    │   └── app.a7a745952a8ca7f8c9413d53b431b8c8.css
    ├── image
    │   └── lyf.jpg
    ├── img
    │   └── lyf.9125a01.jpg
    └── js
        ├── app.39ccc604caeb34166b49.js
        ├── manifest.b1ad113c36e077a9b54d.js
        └── vendor.0b8d67613e49db91b787.js
```
==================
#### 将项目打包到子目录
编辑 config/index.js 文件，找到：
```
assetsPublicPath: '/',
```
把 '/' 修改为要放的子目录的路径。这里，我要放到 /dist/ 目录下面。于是，我就把这里修改为
```
assetsPublicPath: '/dist/',
```
注意：修改的是访问地址，默认/,修改后为：域名/dist/。访问的是打包后的文件。
=============================================================================
### 运行
#### 1. nodejs 环境，只要全局安装一个 http-server 服务
```
npm install http-server -g
```
#### 2.终端里面输入，
```
http-server
报 -bash: http-server: command not found 错误
```
#### 3.配置环境变量【不报错可不配置】
```
echo 'export PATH="$PATH:/usr/local/Cellar/node/7.6.0/bin/"' >> ~/.bash_profile
. ~/.bash_profile
```
第一条命令是追加环境变量，第二个命令是，使追加立即生效。

3.运行
```
cd dist
http-server -p 3000```
```
