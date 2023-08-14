const t={},n=`<h1>网页嵌入 markdown 文件</h1>
<ul>
<li>渲染</li>
<li>代码高亮,可复制</li>
<li>集中处理路由,动态引入</li>
</ul>
<h1>渲染</h1>
<p>使用包 <code>vite-plugin-markdown</code></p>
<h2>配置</h2>
<pre><code class="language-ts">//vite.config.ts 配置
import { plugin } from &quot;vite-plugin-markdown&quot;;
export default defineConfig({
  plugins: [
    vue(),
    plugin({
      mode: [&quot;html&quot;, &quot;toc&quot;],
    }),
  ],
});
</code></pre>
<h2>使用</h2>
<pre><code class="language-ts">import { html } from &quot;./hhh.md&quot;;
const htmlRef = ref();
htmlRef.value = html; //直接绑定 v-html使用
</code></pre>
<h1>代码高亮</h1>
<p>使用包 <code>highlight.js</code></p>
<h2>配置</h2>
<pre><code class="language-ts">//src/mian.js 配置
import hljs from &quot;highlight.js&quot;; //导入代码高亮文件
import &quot;highlight.js/styles/stackoverflow-light.css&quot;; //导入代码高亮样式,可以通过导入不同的.css文件,来修改效果
const app = createApp(App);
app.directive(&quot;highlight&quot;, function (el) {
  //自定义高亮样式 v-highlight
  const blocks = el.querySelectorAll(&quot;pre code&quot;);
  blocks.forEach((block: any) =&gt; {
    hljs.highlightBlock(block);
  });
});
</code></pre>
<h2>使用</h2>
<pre><code class="language-html">&lt;!-- 给要渲染的顶级元素,加上v-highlight即可 --&gt;
&lt;div v-highlight v-html=&quot;mdref&quot;&gt;&lt;/div&gt;
</code></pre>
<h1>复制代码功能</h1>
<h2>1.生成复制按钮</h2>
<pre><code class="language-less">pre {
  position: relative;
  &amp;:after {
    content: &quot;复制&quot;;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
  }
}
</code></pre>
<h2>2.声明点击事件</h2>
<p>利用事件冒泡机制,给顶级元素添加点击事件,然后判断触发的元素,
调用写粘贴板 API <code>navigator.clipboard.writeText</code></p>
<pre><code class="language-html">&lt;div v-highlight v-html=&quot;mdref&quot; class=&quot;md&quot; @click=&quot;(e) =&gt; copy(e)&quot;&gt;&lt;/div&gt;
</code></pre>
<pre><code class="language-ts">const copy = (e: { target: HTMLElement }) =&gt; {
  if (e.target?.tagName == &quot;PRE&quot;) {
    navigator.clipboard.writeText(e.target?.innerText).then((res) =&gt; {
      console.log(&quot;复制成功&quot;);
    });
  }
};
</code></pre>
<h1>路由集中处理</h1>
<p>给 src/markdowns 的 .md 文件自动添加路由</p>
<h2>1.生成 list</h2>
<p>利用 <code>import.meta.glob</code>API 读取文件目录</p>
<pre><code class="language-ts">//src/markdowns/list.ts
const mdFiles = import.meta.glob(&quot;../markdowns/**/*.md&quot;); //不要用绝对路径
//https://vitejs.cn/vite3-cn/guide/features.html#glob-import
export default mdFiles;
</code></pre>
<h2>2.读取并注册路由</h2>
<pre><code class="language-ts">//src/router/routes.js
import mdFiles from &quot;@/markdowns/list&quot;;
const routeMarkdown = () =&gt; {
  let arr = [];
  for (const path in mdFiles) {
    const pathName = path.slice(2, -3);  //将前缀与.md去除
    arr.push({
      path:encodeURI(pathName) , //转换为UTF-8编码, 如果不手动转换,vue-router会自动将转化,导致路径不匹配的问题,并且当路由跳转时,也应用encodeURI包裹路径
      name: pathName,
      component: () =&gt; import(&quot;@/views/blogs/index.vue&quot;), //指向同一个组件,组件内部再动态引入
    });
  }
  return arr;
};
const routes = [{ {
    path: &quot;/blog&quot;,
    name: &quot;记录&quot;,
    title: &quot;记录&quot;,
    children: routeMarkdown(),
  },}]
export default routes;
</code></pre>
<h2>3.动态引入路由所指向的文件</h2>
<h3>3.1 异步渲染</h3>
<pre><code class="language-ts">//src/views/blogs/index.vue
import mdFiles from &quot;@/markdowns/list.ts&quot;;
import { useRoute } from &quot;vue-router&quot;;
const route = useRoute();
const mdref = ref();
mdFiles[\`./\${String(route.name)}.md\`]().then(({ html }) =&gt; {
  mdref.value = html; //这里就可以渲染了
});
</code></pre>
<h3>3.2 同步拿到最新DOM</h3>
<p>由于要制作目录,而目录需要获取 h1-h3 标签,使用await nextTick()</p>
<pre><code class="language-ts">//src/views/blogs/index.vue
const renderToc = async () =&gt; {
  const { html } = await mdFiles[\`./\${String(route.name)}.md\`]();
  mdref.value = html;
  await nextTick(); //拿到最新的dom
  const all_headings = document.querySelectorAll(&quot;h1, h2, h3&quot;);
  let aa: Toc[] = [];
  all_headings.forEach((item) =&gt; {
    //不支持map
    aa.push({
      scollTop: item.getBoundingClientRect().top,
      tagClass: \`\${item.tagName}Class\`,
      content: item.textContent as string,
    });
  });
  tocList.value = aa;
};
renderToc();
</code></pre>
`,e=[{level:"1",content:"&#x7F51;&#x9875;&#x5D4C;&#x5165; markdown &#x6587;&#x4EF6;"},{level:"1",content:"&#x6E32;&#x67D3;"},{level:"2",content:"&#x914D;&#x7F6E;"},{level:"2",content:"&#x4F7F;&#x7528;"},{level:"1",content:"&#x4EE3;&#x7801;&#x9AD8;&#x4EAE;"},{level:"2",content:"&#x914D;&#x7F6E;"},{level:"2",content:"&#x4F7F;&#x7528;"},{level:"1",content:"&#x590D;&#x5236;&#x4EE3;&#x7801;&#x529F;&#x80FD;"},{level:"2",content:"1.&#x751F;&#x6210;&#x590D;&#x5236;&#x6309;&#x94AE;"},{level:"2",content:"2.&#x58F0;&#x660E;&#x70B9;&#x51FB;&#x4E8B;&#x4EF6;"},{level:"1",content:"&#x8DEF;&#x7531;&#x96C6;&#x4E2D;&#x5904;&#x7406;"},{level:"2",content:"1.&#x751F;&#x6210; list"},{level:"2",content:"2.&#x8BFB;&#x53D6;&#x5E76;&#x6CE8;&#x518C;&#x8DEF;&#x7531;"},{level:"2",content:"3.&#x52A8;&#x6001;&#x5F15;&#x5165;&#x8DEF;&#x7531;&#x6240;&#x6307;&#x5411;&#x7684;&#x6587;&#x4EF6;"},{level:"3",content:"3.1 &#x5F02;&#x6B65;&#x6E32;&#x67D3;"},{level:"3",content:"3.2 &#x540C;&#x6B65;&#x62FF;&#x5230;&#x6700;&#x65B0;DOM"}];export{t as attributes,n as html,e as toc};
