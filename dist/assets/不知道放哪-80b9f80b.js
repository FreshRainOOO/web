const n={},t=`<h2>git log 指定用户,简约信息</h2>
<p>作者名 可以通过在提交 pr 的地方找到</p>
<pre><code class="language-git">git log --pretty=format:'%h %cd %s' --author=作者名
</code></pre>
<h2>antd Form.item 自定义组件</h2>
<p>当 form.item 嵌套自定义组件时</p>
<pre><code class="language-tsx">&lt;Form.Item name=&quot;permission_icon&quot;&gt;
  &lt;IconInput /&gt;
&lt;/Form.Item&gt;
</code></pre>
<p>自动有两个属性,value onChange 我们需要手动赋值,与初始化, 当我们表单提交时,就可以自动汇总到 Form 上</p>
<pre><code class="language-tsx">type Iprops = {
  value: string; //初始值
  onChange: Function; //改变
};
const IconInput: React.FC = ({ value, onChange }: Iprops) =&gt; {};
</code></pre>
<h2>antd Input 阻止键入</h2>
<pre><code class="language-tsx">&lt;Input
  onKeyDown={(e) =&gt; {
    e.preventDefault();
    productRef.current?.setModalVisit(true);
  }}
/&gt;
</code></pre>
<h2>返回个随机头像</h2>
<p>https://xsgames.co/randomusers/avatar.php?g=pixel&amp;key=2</p>
`,e=[{level:"2",content:"git log &#x6307;&#x5B9A;&#x7528;&#x6237;,&#x7B80;&#x7EA6;&#x4FE1;&#x606F;"},{level:"2",content:"antd Form.item &#x81EA;&#x5B9A;&#x4E49;&#x7EC4;&#x4EF6;"},{level:"2",content:"antd Input &#x963B;&#x6B62;&#x952E;&#x5165;"},{level:"2",content:"&#x8FD4;&#x56DE;&#x4E2A;&#x968F;&#x673A;&#x5934;&#x50CF;"}];export{n as attributes,t as html,e as toc};
