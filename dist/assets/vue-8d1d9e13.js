const t={},e=`<h1>VUE</h1>
<h1>setup 语法糖</h1>
<h2>defineExpose() 父组件调用子组件的方法/属性</h2>
<p>父组件</p>
<pre><code class="language-html">&lt;Son ref=&quot;sonRef&quot;&gt;&lt;/Son&gt;
</code></pre>
<p>子组件</p>
<pre><code class="language-html">&lt;script setup&gt;
  const sonFn = () =&gt; {};
  defineExpose({
    sonFn,
  });
&lt;/script&gt;
</code></pre>
<h2>defineProps() 子组件拿父组件的值(也可直接方法,但是 vue 不推荐)</h2>
<pre><code class="language-vue">&lt;script setup&gt;
const props = defineProps({
  text: String,
  message: Number,
});
&lt;/script&gt;
</code></pre>
<h2>defineEmits() 子组件拿父组件的方法</h2>
<p>演示子组件修改父组件传来的 props 值
父组件</p>
<pre><code class="language-vue">&lt;template&gt;
  &lt;Ss :cc=&quot;cc&quot; @update=&quot;cc = $event&quot;&gt;&lt;/Ss&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &quot;vue&quot;;
import Ss from &quot;./ss.vue&quot;;
const cc = ref(0);
const change = () =&gt; {
  cc.value++;
};
&lt;/script&gt;
</code></pre>
<p>子组件</p>
<pre><code class="language-vue">&lt;template&gt;
  &lt;div&gt;cc{{ cc }}&lt;/div&gt;
  &lt;div @click=&quot;emits('update', cc++)&quot;&gt;+++++&lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
const props = defineProps({
  cc: Number,
});
const { cc } = props;
const emits = defineEmits([&quot;change&quot;, &quot;update&quot;]);
&lt;/script&gt;
</code></pre>
<h2>awite</h2>
<p>awite 会将 setup 自动变为 async 函数,返回 promise
需要配合<code>&lt;Suspense&gt;</code>使用</p>
<pre><code class="language-html">&lt;!-- src/App.vue --&gt;
&lt;template&gt;
  &lt;RouterView v-slot=&quot;{ Component }&quot;&gt;
    &lt;template v-if=&quot;Component&quot;&gt;
      &lt;Transition mode=&quot;out-in&quot;&gt;
        &lt;Suspense&gt;
          &lt;!-- 主要内容 --&gt;
          &lt;component :is=&quot;Component&quot;&gt;&lt;/component&gt;
          &lt;!-- 加载中状态 --&gt;
          &lt;template #fallback&gt; 正在加载... &lt;/template&gt;
        &lt;/Suspense&gt;
      &lt;/Transition&gt;
    &lt;/template&gt;
  &lt;/RouterView&gt;
&lt;/template&gt;
</code></pre>
<h1>other</h1>
<h2>v-html 后样式不生效</h2>
<blockquote>
<p>删除 style 的 scoped</p>
</blockquote>
<h2>拿到最新的 Dom 对象</h2>
<pre><code class="language-ts">await nextTick(); //在方法中使用,不要再生命周期中直接使用
</code></pre>
<h2>路由切换动画</h2>
<p>https://juejin.cn/post/6963205355702583303</p>
<pre><code class="language-vue">//App.vue中
&lt;template&gt;
  &lt;router-view v-slot=&quot;{ Component }&quot;&gt;
    &lt;transition name=&quot;scale&quot; mode=&quot;out-in&quot;&gt;
      &lt;component :is=&quot;Component&quot; /&gt;
    &lt;/transition&gt;
  &lt;/router-view&gt;
&lt;/template&gt;
&lt;script&gt;&lt;/script&gt;
&lt;style&gt;
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
&lt;/style&gt;
</code></pre>
<h2>ts 定义对象的 key 为某些字符串</h2>
<pre><code class="language-ts">type Keys = &quot;inquiry_mode&quot; | &quot;bill_status&quot;;
type Props = {
  //规定props为一个对象,并且key必须属于 Keys
  [key in Keys]?: { disabled: boolean };
};
</code></pre>
<h2>ts 一些类型</h2>
<pre><code class="language-ts"> style?: React.CSSProperties;
</code></pre>
`,n=[{level:"1",content:"VUE"},{level:"1",content:"setup &#x8BED;&#x6CD5;&#x7CD6;"},{level:"2",content:"defineExpose() &#x7236;&#x7EC4;&#x4EF6;&#x8C03;&#x7528;&#x5B50;&#x7EC4;&#x4EF6;&#x7684;&#x65B9;&#x6CD5;/&#x5C5E;&#x6027;"},{level:"2",content:"defineProps() &#x5B50;&#x7EC4;&#x4EF6;&#x62FF;&#x7236;&#x7EC4;&#x4EF6;&#x7684;&#x503C;(&#x4E5F;&#x53EF;&#x76F4;&#x63A5;&#x65B9;&#x6CD5;,&#x4F46;&#x662F; vue &#x4E0D;&#x63A8;&#x8350;)"},{level:"2",content:"defineEmits() &#x5B50;&#x7EC4;&#x4EF6;&#x62FF;&#x7236;&#x7EC4;&#x4EF6;&#x7684;&#x65B9;&#x6CD5;"},{level:"2",content:"awite"},{level:"1",content:"other"},{level:"2",content:"v-html &#x540E;&#x6837;&#x5F0F;&#x4E0D;&#x751F;&#x6548;"},{level:"2",content:"&#x62FF;&#x5230;&#x6700;&#x65B0;&#x7684; Dom &#x5BF9;&#x8C61;"},{level:"2",content:"&#x8DEF;&#x7531;&#x5207;&#x6362;&#x52A8;&#x753B;"},{level:"2",content:"ts &#x5B9A;&#x4E49;&#x5BF9;&#x8C61;&#x7684; key &#x4E3A;&#x67D0;&#x4E9B;&#x5B57;&#x7B26;&#x4E32;"},{level:"2",content:"ts &#x4E00;&#x4E9B;&#x7C7B;&#x578B;"}];export{t as attributes,e as html,n as toc};
