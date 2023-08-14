const t={},n=`<pre><code class="language-html">&lt;template&gt;
  &lt;div class=&quot;grid&quot;&gt;
    &lt;div
      v-for=&quot;item in list&quot;
      :key=&quot;item.text&quot;
      :style=&quot;item.style&quot;
      :ref=&quot;getRef&quot;
    &gt;
      &lt;div&gt;{{ item.text }}&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>
<pre><code class="language-ts">&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &quot;vue&quot;;
const list = ref()
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const getRef = (e) =&gt; {//获取元素高度,设置gridRow
    let span = Math.ceil(e.style.height.slice(0, -2) / 1) + 1  //grid-auto-rows: 1px;与这里的除数1 保持一致
    e.style.gridRow = \`auto / span \${span}\`
}
const renderDiv = () =&gt; {
    let aa = []
    for (let i = 0; i &lt; 20; i++) {
        let heightss = getRandomArbitrary(50, 150)
        aa.push({
            // style: { width: '100%', height: \`\${height}px\`, 'grid-row': \`auto / span\${(height / 10) + 1}\` },
            style: { width: '100%', height: \`\${heightss}px\`, },
            text: i
        })
    }
    list.value = aa
}
renderDiv()
&lt;/script&gt;
</code></pre>
<pre><code class="language-less">&lt;style scoped lang=&quot;scss&quot;&gt;
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);//3列,每列比例相同
    grid-auto-rows: 1px;//每行高度
    grid-column-gap: 4px;//列间距

    &gt;div {
        box-sizing: border-box;
        padding: 5px 10px;

        div {
            width: 100%;
            height: 100%;
            background-color: pink;
        }
    }
}
&lt;/style&gt;
</code></pre>
`,e=[];export{t as attributes,n as html,e as toc};
