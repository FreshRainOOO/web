const n={},t=`<h2><a href="https://animejs.com/documentation">animejs</a></h2>
<p><a href="https://anime.js.cool/documentation">中文文档(效果不全)</a>
<a href="https://animejs.com/documentation">源文档</a></p>
<pre><code class="language-ts">import anime from &quot;animejs/lib/anime.js&quot;;
</code></pre>
<h2>简单使用</h2>
<pre><code class="language-ts">const myanime = ref();
//小球延时滚动
myanime.value = anime({
  targets: &quot;.blog&gt;div&quot;,
  translateX: -270,
  autoplay: false, //自动播放,默认为true
});
//通过函数重新调用
const playanime = () =&gt; {
  myanime.value.restart();
};
</code></pre>
<h2>方法</h2>
<table>
<thead>
<tr>
<th>function</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>play</td>
<td>进行动画</td>
</tr>
<tr>
<td>pause</td>
<td>暂停</td>
</tr>
<tr>
<td>restart</td>
<td>重启</td>
</tr>
</tbody>
</table>
<h2>判断元素是否在可视区 (IntersectionObserver 原生 js)</h2>
<pre><code class="language-html">&lt;style&gt;
    body {
        height: 3000px;
        width: 3000px;
    }
    #box1 {
        width: 300px;
        height: 300px;
        background-color: red;
        margin-top: 100px;
        margin-left: 300px;
    }
&lt;/style&gt;
&lt;body&gt;
    &lt;div id=&quot;box1&quot;&gt;&lt;/div&gt;
    &lt;script type=&quot;text/javascript&quot;&gt;

        const io = new IntersectionObserver(changes =&gt; {
            for (const change of changes) {
                // console.log(change.time) // 发生变化的时间
                // console.log(change.rootBounds) // 根元素的矩形区域的信息
                // console.log(change.boundingClientRect) // 目标元素的矩形区域的信息
                console.log(change.isIntersection) // 目标元素与视口（或根元素）是否相交
                // console.log(change.intersectionRect) // 目标元素与视口（或根元素）的交叉区域的信息
                console.log(change.intersectionRatio) // 目标元素与视口（或根元素）的相交比例
                // console.log(change.target) // 被观察的目标元素
            }
        }, {
            threshold: [0,1]//当重合度为0 和 1 时执行
        })
        io.observe(document.getElementById('box1'))

    &lt;/script&gt;

&lt;/body&gt;
</code></pre>
<h2>给多个元素加动画,并一起调用</h2>
<pre><code class="language-ts">//通过timeline 可添加延时元素, add的第二个参数设置为0, 三个元素可以一起进行动画
anime.timeline({}).add({}, 0).add({}, 0);
</code></pre>
<h2>添加关键帧</h2>
<pre><code class="language-ts">anime({
  targets: &quot;.reverse .history&quot;,
  keyframes: [
    { left: 0, bottom: 5 },
    { left: 15, bottom: -5 },
  ],
  duration: 2500,
  easing: &quot;easeOutElastic(1, .8)&quot;,
});
</code></pre>
<h2>动画不生效</h2>
<p>可能是因为 DOM 未渲染,就生成动画了<br>
所以生成 dom 的数据源尽量放在 setup 中<br>
再将 anime 放到 onMounted 中</p>
<pre><code class="language-ts">const list = ref&lt;(string | undefined)[]&gt;(getList()); //正确写法
//错误写法-&gt; 在onMounted中list.value = getList()
onMounted(() =&gt; {
  myanime.value = anime({
    targets: &quot;.blog div&quot;,
    translateX: -270,
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
  });
});
</code></pre>
`,e=[{level:"2",content:'<a href="https://animejs.com/documentation">animejs</a>'},{level:"2",content:"&#x7B80;&#x5355;&#x4F7F;&#x7528;"},{level:"2",content:"&#x65B9;&#x6CD5;"},{level:"2",content:"&#x5224;&#x65AD;&#x5143;&#x7D20;&#x662F;&#x5426;&#x5728;&#x53EF;&#x89C6;&#x533A; (IntersectionObserver &#x539F;&#x751F; js)"},{level:"2",content:"&#x7ED9;&#x591A;&#x4E2A;&#x5143;&#x7D20;&#x52A0;&#x52A8;&#x753B;,&#x5E76;&#x4E00;&#x8D77;&#x8C03;&#x7528;"},{level:"2",content:"&#x6DFB;&#x52A0;&#x5173;&#x952E;&#x5E27;"},{level:"2",content:"&#x52A8;&#x753B;&#x4E0D;&#x751F;&#x6548;"}];export{n as attributes,t as html,e as toc};
