const t={},o=`<h2>html 中放入音频(听个响)</h2>
<pre><code class="language-html">&lt;!-- &lt;audio controls=&quot;controls&quot; &gt; controls属性来展示默认样式 --&gt;
&lt;audio controls=&quot;controls&quot; height=&quot;100&quot; width=&quot;100&quot;&gt;
  &lt;source src=&quot;@/assets/mp3/music.mp3&quot; type=&quot;audio/mp3&quot; /&gt;
  &lt;source src=&quot;@/assets/mp3/music.mp3&quot; type=&quot;audio/ogg&quot; /&gt;
  &lt;embed height=&quot;100&quot; width=&quot;100&quot; src=&quot;@/assets/mp3/music.mp3&quot; /&gt;
&lt;/audio&gt;
</code></pre>
<blockquote>
<p>js 控制播放</p>
</blockquote>
<pre><code class="language-html">&lt;!-- 去除controls属性 来隐藏该播放器 --&gt;
&lt;audio ref=&quot;musicRef&quot; height=&quot;100&quot; width=&quot;100&quot;&gt;
  &lt;source src=&quot;@/assets/mp3/music.mp3&quot; type=&quot;audio/mp3&quot; /&gt;
  &lt;source src=&quot;@/assets/mp3/music.mp3&quot; type=&quot;audio/ogg&quot; /&gt;
  &lt;embed height=&quot;100&quot; width=&quot;100&quot; src=&quot;@/assets/mp3/music.mp3&quot; /&gt;
&lt;/audio&gt;
&lt;button @click=&quot;play&quot;&gt;play&lt;/button&gt;
</code></pre>
<pre><code class="language-js">const musicRef = ref();
//浏览器不能默认自动播放 error :play() failed because the user didn't interact with the document first.
//需要有用户的交互, audio的paly方法才能使用
//建议音乐大小不要超过2m, 否则生产环境引入过慢
const play = () =&gt; {
  musicRef.value.play();
};
</code></pre>
<blockquote>
<p>audio 对象的一些方法</p>
</blockquote>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>fastSeek()</td>
<td>在音频播放器中指定播放时间。</td>
</tr>
<tr>
<td>getStartDate()</td>
<td>返回新的 Date 对象，表示当前时间线偏移量。</td>
</tr>
<tr>
<td>load()</td>
<td>重新加载音频元素。</td>
</tr>
<tr>
<td>pause()</td>
<td>暂停当前播放的音频。</td>
</tr>
<tr>
<td>play()</td>
<td>开始播放音频。</td>
</tr>
</tbody>
</table>
`,u=[{level:"2",content:"html &#x4E2D;&#x653E;&#x5165;&#x97F3;&#x9891;(&#x542C;&#x4E2A;&#x54CD;)"}];export{t as attributes,o as html,u as toc};
