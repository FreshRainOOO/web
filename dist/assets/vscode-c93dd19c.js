const t={},n=`<h3>vscode 插件与设置</h3>
<table>
<thead>
<tr>
<th>插件名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>prettier</td>
<td>格式化</td>
</tr>
<tr>
<td>TODO highlight</td>
<td>记录待做，未完成项</td>
</tr>
<tr>
<td>Todo Tree</td>
<td>配合 TODO highlight 使用 快速查看记录的 TODO</td>
</tr>
<tr>
<td>open in browser</td>
<td>运行一个本地 html 服务</td>
</tr>
</tbody>
</table>
<h3>配置</h3>
<blockquote>
<p>vscode 在 json 配置中输入下面代码,在空白框会提示</p>
</blockquote>
<pre><code class="language-json">&quot;editor.suggest.snippetsPreventQuickSuggestions&quot;: false,
</code></pre>
<blockquote>
<p>自动换行</p>
</blockquote>
<p>设置 -&gt; 搜索栏里输入“word wrap” -&gt; 更改 Editor: Word Wrap 为“on”</p>
<h2>.gitignore 规则不生效</h2>
<pre><code class="language-$">git rm -r --cached .
git add .
git commit -m 'update .gitignore'
</code></pre>
<h2>安装 go 插件</h2>
<p>https://juejin.cn/post/6869362277896847367</p>
<p>1.代理配置</p>
<pre><code class="language-shell"># 启用 go mod
go env -w GO111MODULE=on
# 设置 Go Proxy 代理
go env -w GOPROXY=https://goproxy.io,direct
</code></pre>
<p>2.插件安装</p>
<blockquote>
<p>Ctrl + Shift + P<br>
Go: Install/Update Tools</p>
</blockquote>
<h2>关闭超链接</h2>
<p>设置 -&gt; <code>editor.links</code></p>
`,e=[{level:"3",content:"vscode &#x63D2;&#x4EF6;&#x4E0E;&#x8BBE;&#x7F6E;"},{level:"3",content:"&#x914D;&#x7F6E;"},{level:"2",content:".gitignore &#x89C4;&#x5219;&#x4E0D;&#x751F;&#x6548;"},{level:"2",content:"&#x5B89;&#x88C5; go &#x63D2;&#x4EF6;"},{level:"2",content:"&#x5173;&#x95ED;&#x8D85;&#x94FE;&#x63A5;"}];export{t as attributes,n as html,e as toc};
