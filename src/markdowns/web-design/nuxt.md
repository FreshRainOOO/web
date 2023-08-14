npm install vue-cli -g  安装环境

## 目录结构
components 存放组件
layouts 布局
middledware 存放中间件
plaugins 存放js插件
static 存放静态图片
store 存放vuex

.editorconfig 配置vscode工具
.eslintrc 代码规范
.gitgnore 配置git规则
nuxt.config.js  nuxt配置文件

## 配置项
package.json 文件下配置服务器端口

nuxt.config.js 文件下，配置全局css css:[~assets/css/normailze.css] 寻找路径下的css文件，进行全局配置

nuxt.config.js 文件下，build 配置webpack

## pages
根据文件结构，自动生成路由

跳转 `<nuxt-link :to='{name:'about'，params={id:123}}'>about</nuxt-link>` `about`即为pages/about/index.vue 文件
跳转动态路由页面 `<nuxt-link :to='{name:'about-id'，params={id:123}}'>about</nuxt-link>`  即为pages/about/_id.vue 文件

接受路由传参 $route.params.id  不用引入路由包


动态路由 ：pages/news/index.vue 为列表页 `<a href='news/123' />`
        链接的即为 pages/news/_id.vue  详情页 通过$route.params.id接受id
        链接后的页面,进行id数字校验 validate({parmams}){return /^\d+$/.test(parmas.id)/}


### 路由切换动画 
assets/css/normailze.css 文件下 
.page-enter-active, .page-leave-active{transition:opacity 2s}
.page-enter , .page-leave-active {opcity : 0}

nuxt.config.js 文件下，配置全局css css:[~assets/css/normailze.css] 寻找路径下的css文件，进行全局配置

## 默认模板
在根目录下创建 app.html
    <html lang='en'>
    <head> {{HEAD}} </head>
    <body><p>一直存在的头部(导航栏)</p>    {{APP}}<body>
    </html>

## 默认布局
layouts/default.vue 文件下

    <template>
    <div>
        <CommonHeader />
        <Nuxt />
        <CommonFooter />
    </div>
    </template>

## 错误页面
layouts/default.vue 文件下

    <template>
    <div>
        <h1>helloword</h1>
        <h2 v-if="error.statusCode==404">404页面</h2>
        <h2 v-else>500页面，服务器错误</h2>
        <div>
        </template>

    export default { props:['error']}

## 自定义meta标签 p9

## 异步请求数据

 export default {asyncData()=>{发送请求，return的对象，会直接放到data中，可以直接在页面中使用}}

## 组件使用
    <BaseFooButton /> 为components/base/foo/Button.vue 文件