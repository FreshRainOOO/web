const n={},e=`<h2>background-color 不生效</h2>
<pre><code class="language-less">position: relative; //absolute不能生效
</code></pre>
<h2>滚动条样式</h2>
<p>https://juejin.cn/post/6997011443967066143#heading-9</p>
<pre><code class="language-less">/* 滚动条所在容器 */
div {
  overflow: overlay;
  /* 滚动条整体 */
  &amp;::-webkit-scrollbar {
    height: 20px;
    width: 20;
  }
  /* 两个滚动条交接处 -- x轴和y轴 */
  &amp;::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  /* 滚动条滑块 */
  &amp;::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
  }
  /* 滚动条轨道 */
  &amp;::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #ededed;
  }
  /* 滚动条两端按钮 */
  &amp;::-webkit-scrollbar-button {
  }
}
</code></pre>
<h2>隐藏滚动条</h2>
<pre><code class="language-scss">&amp;::-webkit-scrollbar {
  width: 0 !important;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
</code></pre>
<h2>溢出省略号</h2>
<h3>单行</h3>
<pre><code class="language-less">overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
</code></pre>
<h3>多行</h3>
<pre><code class="language-less">text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
</code></pre>
<h2>宽高相同</h2>
<pre><code class="language-less">width: 25%;
padding-top: 25%;
</code></pre>
<h2>react 修改 antd 样式</h2>
<pre><code class="language-less">//index.less
.upload {
  margin-left: 50px;
  :global {
    .ant-form-item-has-error {
      .ant-upload {
        color: red;
        border: 1px solid red;
      }
    }
    .ant-upload {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  &amp;.noml {
    margin-left: 0;
  }
}
</code></pre>
<pre><code class="language-tsx">// index.tsx
import style from '.index.less';
&lt;div className={styles.upload}&gt;
</code></pre>
<h2>视图区可见</h2>
<pre><code class="language-less">content-visibility: auto;
contain-intrinsic-size: auto 500px;//给一个高度撑开,避免滚动条抖动
</code></pre>
`,o=[{level:"2",content:"background-color &#x4E0D;&#x751F;&#x6548;"},{level:"2",content:"&#x6EDA;&#x52A8;&#x6761;&#x6837;&#x5F0F;"},{level:"2",content:"&#x9690;&#x85CF;&#x6EDA;&#x52A8;&#x6761;"},{level:"2",content:"&#x6EA2;&#x51FA;&#x7701;&#x7565;&#x53F7;"},{level:"3",content:"&#x5355;&#x884C;"},{level:"3",content:"&#x591A;&#x884C;"},{level:"2",content:"&#x5BBD;&#x9AD8;&#x76F8;&#x540C;"},{level:"2",content:"react &#x4FEE;&#x6539; antd &#x6837;&#x5F0F;"},{level:"2",content:"&#x89C6;&#x56FE;&#x533A;&#x53EF;&#x89C1;"}];export{n as attributes,e as html,o as toc};
