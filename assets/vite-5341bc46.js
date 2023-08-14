const t={},o=`<h1>@/src 路径</h1>
<blockquote>
<p>Vite 配置 alias 需要两步进行（TS 项目）
1、修改 vite.config.ts（让程序支持）
2、修改 tsconfig.json（让编辑器支持）</p>
</blockquote>
<h2>vite.config.ts</h2>
<pre><code class="language-ts">import * as path from 'path'
export default defineConfig({
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
}
</code></pre>
<h2>tsconfig.json</h2>
<pre><code class="language-json">{
  &quot;compilerOptions&quot;: {
    &quot;paths&quot;: {
      &quot;@/*&quot;: [&quot;./src/*&quot;]
    }
  }
}
</code></pre>
<h1>npm run build</h1>
<pre><code class="language-json">&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vite&quot;,
    &quot;build&quot;: &quot;vite build&quot;, //原 &quot;vue-tsc &amp;&amp; vite build&quot;
    &quot;preview&quot;: &quot;vite preview&quot;
  },
</code></pre>
<h1>import.meta.glob</h1>
<pre><code class="language-ts">//直接读取文件夹下所有.md文件
const modules = import.meta.glob(&quot;../markdowns/**/*.md&quot;); //应使用相对路径
for (const path in modules) {
  //导入
  modules[path]().then((mod) =&gt; {
    console.log(path, mod);
  });
}
</code></pre>
`,n=[{level:"1",content:"@/src &#x8DEF;&#x5F84;"},{level:"2",content:"vite.config.ts"},{level:"2",content:"tsconfig.json"},{level:"1",content:"npm run build"},{level:"1",content:"import.meta.glob"}];export{t as attributes,o as html,n as toc};
