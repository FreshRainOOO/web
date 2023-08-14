const t={},e=`<p>npm install vue-cli -g  安装环境</p>
<h2>目录结构</h2>
<p>components 存放组件
layouts 布局
middledware 存放中间件
plaugins 存放js插件
static 存放静态图片
store 存放vuex</p>
<p>.editorconfig 配置vscode工具
.eslintrc 代码规范
.gitgnore 配置git规则
nuxt.config.js  nuxt配置文件</p>
<h2>配置项</h2>
<p>package.json 文件下配置服务器端口</p>
<p>nuxt.config.js 文件下，配置全局css css:[~assets/css/normailze.css] 寻找路径下的css文件，进行全局配置</p>
<p>nuxt.config.js 文件下，build 配置webpack</p>
<h2>pages</h2>
<p>根据文件结构，自动生成路由</p>
<p>跳转 <code>&lt;nuxt-link :to='{name:'about'，params={id:123}}'&gt;about&lt;/nuxt-link&gt;</code> <code>about</code>即为pages/about/index.vue 文件
跳转动态路由页面 <code>&lt;nuxt-link :to='{name:'about-id'，params={id:123}}'&gt;about&lt;/nuxt-link&gt;</code>  即为pages/about/_id.vue 文件</p>
<p>接受路由传参 $route.params.id  不用引入路由包</p>
<p>动态路由 ：pages/news/index.vue 为列表页 <code>&lt;a href='news/123' /&gt;</code>
链接的即为 pages/news/_id.vue  详情页 通过$route.params.id接受id
链接后的页面,进行id数字校验 validate({parmams}){return /^\\d+$/.test(parmas.id)/}</p>
<h3>路由切换动画</h3>
<p>assets/css/normailze.css 文件下
.page-enter-active, .page-leave-active{transition:opacity 2s}
.page-enter , .page-leave-active {opcity : 0}</p>
<p>nuxt.config.js 文件下，配置全局css css:[~assets/css/normailze.css] 寻找路径下的css文件，进行全局配置</p>
<h2>默认模板</h2>
<p>在根目录下创建 app.html
<html lang='en'>
<head> {{HEAD}} </head>
<body><p>一直存在的头部(导航栏)</p>    {{APP}}<body>
</html></p>
<h2>默认布局</h2>
<p>layouts/default.vue 文件下</p>
<pre><code>&lt;template&gt;
&lt;div&gt;
    &lt;CommonHeader /&gt;
    &lt;Nuxt /&gt;
    &lt;CommonFooter /&gt;
&lt;/div&gt;
&lt;/template&gt;
</code></pre>
<h2>错误页面</h2>
<p>layouts/default.vue 文件下</p>
<pre><code>&lt;template&gt;
&lt;div&gt;
    &lt;h1&gt;helloword&lt;/h1&gt;
    &lt;h2 v-if=&quot;error.statusCode==404&quot;&gt;404页面&lt;/h2&gt;
    &lt;h2 v-else&gt;500页面，服务器错误&lt;/h2&gt;
    &lt;div&gt;
    &lt;/template&gt;

export default { props:['error']}
</code></pre>
<h2>自定义meta标签 p9</h2>
<h2>异步请求数据</h2>
<p>export default {asyncData()=&gt;{发送请求，return的对象，会直接放到data中，可以直接在页面中使用}}</p>
<h2>组件使用</h2>
<pre><code>&lt;BaseFooButton /&gt; 为components/base/foo/Button.vue 文件
</code></pre>
`,n=[{level:"2",content:"&#x76EE;&#x5F55;&#x7ED3;&#x6784;"},{level:"2",content:"&#x914D;&#x7F6E;&#x9879;"},{level:"2",content:"pages"},{level:"3",content:"&#x8DEF;&#x7531;&#x5207;&#x6362;&#x52A8;&#x753B;"},{level:"2",content:"&#x9ED8;&#x8BA4;&#x6A21;&#x677F;"},{level:"2",content:"&#x9ED8;&#x8BA4;&#x5E03;&#x5C40;"},{level:"2",content:"&#x9519;&#x8BEF;&#x9875;&#x9762;"},{level:"2",content:"&#x81EA;&#x5B9A;&#x4E49;meta&#x6807;&#x7B7E; p9"},{level:"2",content:"&#x5F02;&#x6B65;&#x8BF7;&#x6C42;&#x6570;&#x636E;"},{level:"2",content:"&#x7EC4;&#x4EF6;&#x4F7F;&#x7528;"}];export{t as attributes,e as html,n as toc};
