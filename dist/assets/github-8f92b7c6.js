const t={},e=`<h2>链接过慢配置 ssh</h2>
<p>https://blog.csdn.net/little_stick_i/article/details/127511581
push pull 的时候同时也打开 GitHub 网站，否则有时候会 ssh 错误</p>
<h2>部署静态目录到 GitHub pages</h2>
<p>https://blog.csdn.net/zuo_kaizheng/article/details/121659587</p>
<h3>使用 vite 的差异配置</h3>
<ol>
<li>修改 vite.config.ts</li>
</ol>
<pre><code class="language-ts">//base为你的项目名,也即你打开的链接
export default defineConfig({
  base: &quot;/web/&quot;,
});
</code></pre>
<ol start="2">
<li>使用 hash 路由
history 路由会导致空白页, dom 不能挂载到 #app 上</li>
</ol>
<pre><code class="language-js">import {
  createRouter,
  createWebHashHistory,
} from &quot;vue-router&quot;;
const router = createRouter({
  history: createWebHashHistory(),
});
</code></pre>
<ol start="3">
<li>自定义404页面，将index.html复制一份并重命名为 404.html</li>
</ol>
`,n=[{level:"2",content:"&#x94FE;&#x63A5;&#x8FC7;&#x6162;&#x914D;&#x7F6E; ssh"},{level:"2",content:"&#x90E8;&#x7F72;&#x9759;&#x6001;&#x76EE;&#x5F55;&#x5230; GitHub pages"},{level:"3",content:"&#x4F7F;&#x7528; vite &#x7684;&#x5DEE;&#x5F02;&#x914D;&#x7F6E;"}];export{t as attributes,e as html,n as toc};
