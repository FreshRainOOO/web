const t={},e=`<h1>创建</h1>
<p>http://javascript.ruanyifeng.com/stdlib/regexp.html</p>
<pre><code class="language-js">var regex = /xyz/;
var regex = new RegExp(&quot;xyz&quot;);

var regex = /xyz/i; //修饰符
var regex = new RegExp(&quot;xyz&quot;, &quot;i&quot;);
</code></pre>
<h1>实例属性</h1>
<pre><code class="language-js">RegExp.prototype.ignoreCase：//返回一个布尔值，表示是否设置了i修饰符。
RegExp.prototype.global：//返回一个布尔值，表示是否设置了g修饰符。
RegExp.prototype.multiline：//返回一个布尔值，表示是否设置了m修饰符。
RegExp.prototype.lastIndex：//返回一个数值，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义。
RegExp.prototype.source：//返回正则表达式的字符串形式（不包括反斜杠），该属性只读
</code></pre>
<h1>实例方法</h1>
<h2>RegExp.prototype.test()</h2>
<blockquote>
<p>返回 Boolean 值,多次调用从上一次 lastIndex 开始</p>
</blockquote>
<pre><code class="language-js">/cat/.test(&quot;cats and dogs&quot;); // true
</code></pre>
<pre><code class="language-js">//多次调用
var r = /x/g;
var s = &quot;_x_x&quot;;

r.lastIndex; // 0
r.test(s); // true

r.lastIndex; // 2
r.test(s); // true

r.lastIndex; // 4
r.test(s); // false

r.lastIndex = 4; //可以直接设置
r.test(s); // false
</code></pre>
<h2>RegExp.prototype.exec()</h2>
<blockquote>
<p>返回一个数组,包含匹配的元素,只返回第一个
若想返回所有,可以使用<code>String.prototype.match()</code></p>
</blockquote>
<pre><code class="language-js">var s = &quot;_x_x&quot;;
var r1 = /x/;
var r2 = /y/;

r1.exec(s); // [&quot;x&quot;]
r2.exec(s); // null
</code></pre>
<pre><code class="language-js">//组匹配
var s = &quot;_x_x&quot;;
var r = /_(x)/;

r.exec(s); // [&quot;_x&quot;, &quot;x&quot;]
</code></pre>
<pre><code class="language-js">/**
 * 多次调用 /g
 */
var reg = /a/g;
var str = &quot;abc_abc_abc&quot;;

var r1 = reg.exec(str);
r1; // [&quot;a&quot;]
r1.index; // 0
reg.lastIndex; // 1

var r2 = reg.exec(str);
r2; // [&quot;a&quot;]
r2.index; // 4
reg.lastIndex; // 5

var r3 = reg.exec(str);
r3; // [&quot;a&quot;]
r3.index; // 8
reg.lastIndex; // 9

var r4 = reg.exec(str);
r4; // null
reg.lastIndex; // 0
/**
 * 循环匹配所有
 */
var reg = /a/g;
var str = &quot;abc_abc_abc&quot;;

while (true) {
  var match = reg.exec(str);
  if (!match) break;
  console.log(&quot;#&quot; + match.index + &quot;:&quot; + match[0]);
}
</code></pre>
<h1>字符串实例方法</h1>
<pre><code class="language-js">String.prototype.match()：//返回一个数组，成员是所有匹配的子字符串。
String.prototype.search()：//按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
String.prototype.replace()：//按照给定的正则表达式进行替换，返回替换后的字符串。
String.prototype.split()：//按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。
</code></pre>
<h2>String.prototype.match()</h2>
<blockquote>
<p>与正则对象 exec 方法相似</p>
</blockquote>
<pre><code class="language-js">var s = &quot;_x_x&quot;;
var r1 = /x/;
var r2 = /y/;

s.match(r1); // [&quot;x&quot;]
s.match(r2); // null
</code></pre>
<pre><code class="language-js">//多个匹配直接返回所有匹配的元素
var s = &quot;abba&quot;;
var r = /a/g;

s.match(r); // [&quot;a&quot;, &quot;a&quot;]
r.exec(s); // [&quot;a&quot;]
</code></pre>
<h2>String.prototype.search()</h2>
<blockquote>
<p>返回第一个匹配的索引</p>
</blockquote>
<pre><code class="language-js">&quot;_x_x&quot;.search(/x/);
// 1
</code></pre>
<h2>String.prototype.replace()</h2>
<p>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace</p>
<blockquote>
<p>替换元素</p>
</blockquote>
<pre><code class="language-js">&quot;aaa&quot;.replace(&quot;a&quot;, &quot;b&quot;); // &quot;baa&quot;
&quot;aaa&quot;.replace(/a/, &quot;b&quot;); // &quot;baa&quot;
&quot;aaa&quot;.replace(/a/g, &quot;b&quot;); // &quot;bbb&quot;
</code></pre>
<pre><code class="language-js">//替换首尾空格
var str = &quot;  #id div.class  &quot;;

str.replace(/^\\s+|\\s+$/g, &quot;&quot;);
// &quot;#id div.class&quot;
</code></pre>
<h2>String.prototype.split()</h2>
<pre><code class="language-js">// 非正则分隔
&quot;a,  b,c, d&quot;.split(&quot;,&quot;);
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
&quot;a,  b,c, d&quot;.split(/, */);
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
&quot;a,  b,c, d&quot;.split(/, */, 2)[(&quot;a&quot;, &quot;b&quot;)];
</code></pre>
<h1>匹配规则</h1>
<h2>字面量和元字符</h2>
<pre><code class="language-js">/**
 * 点字符(.)
 */
/dog/ // 匹配dog
/c.t/ //匹配 c.t匹配c和t之间包含任意一个字符的情况 如 : cat , c2t, c-t, 不匹配 coot

/**
 *  位置字符
 * ^ 表示字符串的开始位置
 * $ 表示字符串的结束位置
 * test必须出现在开始位置
 */

/^test/.test('test123') // true

// test必须出现在结束位置
/test$/.test('new test') // true

// 从开始位置到结束位置只有test
/^test$/.test('test') // true
/^test$/.test('test test') // false

/**
 * 选择符(|)
 */

/11|22/.test(&quot;911&quot;); // true 相当于或
</code></pre>
<h2>转义字符</h2>
<blockquote>
<p>匹配正则中已有意义的字符,加 ''
正则表达式中，需要反斜杠转义的，一共有 12 个字符：<code>^、.、[、$、(、)、|、\\*、+、?、{和\\\\</code>。需要特别注意的是，如果使用 RegExp 方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。</p>
</blockquote>
<pre><code class="language-js">/1+1/.test('1+1') // false
/1\\+1/.test('1+1')// true

(new RegExp('1\\+1')).test('1+1')// false
(new RegExp('1\\\\+1')).test('1+1')// true
</code></pre>
<h2>特殊字符</h2>
<p>正则表达式对一些不能打印的特殊字符，提供了表达方法。</p>
<blockquote>
<p>\\cX 表示 Ctrl-[X]，其中的 X 是 A-Z 之中任一个英文字母，用来匹配控制字符。
[\\b] 匹配退格键(U+0008)，不要与\\b 混淆。
\\n 匹配换行键。
\\r 匹配回车键。
\\t 匹配制表符 tab（U+0009）。
\\v 匹配垂直制表符（U+000B）。
\\f 匹配换页符（U+000C）。
\\0 匹配 null 字符（U+0000）。
\\xhh 匹配一个以两位十六进制数（\\x00-\\xFF）表示的字符。
\\uhhhh 匹配一个以四位十六进制数（\\u0000-\\uFFFF）表示的 Unicode 字符。</p>
</blockquote>
<h2>字符类</h2>
<pre><code class="language-js">//[abc],表示只须匹配其中一个
/[abc]/.test('hello world') // false
/[abc]/.test('apple') // true

/**
 * 脱节符 (^)
 */
//[^xyz]表示除了x、y、z之外都可以匹配。
/[^abc]/.test('hello world') // true
/[^abc]/.test('apple') //true
/[^abc]/.test('bbc') // false
//[^]表示匹配一切字符,包括换行

/**
 * 连字符(-)
 */
//[0123456789]可以写成[0-9]  [abc]可以写成[a-c]  [1-31]表示1-3
[a-z] // 匹配所有的小写字母
[A-Z] // 匹配所有的大写字母
[a-zA-Z] // 匹配所有的字母
[0-9] // 匹配所有的数字
[0-9\\.\\-] // 匹配所有的数字，句号和减号
[ \\f\\r\\t\\n] // 匹配所有的白字符

</code></pre>
<h2>预定义模式</h2>
<p>预定义模式指的是某些常见模式的简写方式。</p>
<blockquote>
<p>\\d 匹配 0-9 之间的任一数字，相当于[0-9]。
\\D 匹配所有 0-9 以外的字符，相当于[^0-9]。
\\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
\\W 除所有字母、数字和下划线以外的字符，相当于[^a-za-z0-9_]。
\\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \\t\\r\\n\\v\\f]。
\\S 匹配非空格的字符，相当于[^ \\t\\r\\n\\v\\f]。
\\b 匹配词的边界。
\\B 匹配非词边界，即在词的内部</p>
</blockquote>
<pre><code class="language-js">// \\s 的例子
/\\s\\w*/.exec('hello world') // [&quot; world&quot;]

// \\b 的例子
/\\bworld/.test('hello world') // true
/\\bworld/.test('hello-world') // true
/\\bworld/.test('helloworld') // false

// \\B 的例子
/\\Bworld/.test('hello-world') // false
/\\Bworld/.test('helloworld') // true
</code></pre>
<h2>重复类</h2>
<pre><code class="language-js">//{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。
/lo{2}k/.test('look') // true
/lo{2,5}k/.test('looook') // true

/**
    ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
    * 星号表示某个模式出现0次或多次，等同于{0,}。
    + 加号表示某个模式出现1次或多次，等同于{1,}。
    *? 或 +? 采用非贪婪模式
 */

'aaa'.match(/a+/) // [&quot;aaa&quot;]贪婪模式 一直匹配到字符a不出现为止
'aaa'.match(/a+?/) // [&quot;a&quot;]非贪婪模式 一旦条件满足，就不再往下匹配
</code></pre>
<h2>修饰符</h2>
<pre><code class="language-js">// /g 全局匹配
var regex = /b/g;
var str = 'abba';

regex.test(str); // true
regex.test(str); // true
regex.test(str); // false

// /i 忽略大小写
/abc/.test('ABC') // false
/abc/i.test('ABC') // true

// /m 多行模式,匹配行首行尾,换行
/world$/.test('hello world\\n') // false
/world$/m.test('hello world\\n') // true
</code></pre>
<h2>组匹配</h2>
<pre><code class="language-js">/fred+/.test('fredd') // true 匹配fred,重复d
/(fred)+/.test('fredfred') // true 匹配fred,重复fred

//分组捕获
'abcabc'.match(/(.)b(.)/) //['abc', 'a', 'c'] 先匹配abc,再将abc分组
'abcabc'.match(/(.)b(.)/g); //['abc', 'abc'] //分组不易与/g一起使用

//正则中要使用 \\自然数 来进行手动分组
/&lt;([^&gt;]+)&gt;[^&lt;]*&lt;\\/\\1&gt;/.exec(&quot;&lt;b&gt;bold&lt;/b&gt;&quot;)[1] //b 圆括号匹配尖括号之中的标签，而\\1就表示对应的闭合标签。

/&lt;(\\w+)([^&gt;]*)&gt;(.*?)&lt;\\/\\1&gt;/g.exec('&lt;b class=&quot;hello&quot;&gt;Hello&lt;/b&gt;&lt;i&gt;world&lt;/i&gt;');  //[&quot;&lt;b class=\\&quot;hello\\&quot;&gt;Hello&lt;/b&gt;&quot;,&quot;b&quot;,&quot; class=\\&quot;hello\\&quot;&quot;,&quot;Hello&quot;]

//非捕获组
'abc'.match(/(?:.)b(.)/); //[&quot;abc&quot;, &quot;c&quot;] ,第一个(不捕获)

//先行断言
'abc'.match(/b(?=c)/)//[&quot;b&quot;] 即不返回[&quot;bc&quot;]

//先行否定断言
/\\d+(?!\\.)/.exec('3.14') //[&quot;14&quot;] 后面不跟点的数
</code></pre>
`,n=[{level:"1",content:"&#x521B;&#x5EFA;"},{level:"1",content:"&#x5B9E;&#x4F8B;&#x5C5E;&#x6027;"},{level:"1",content:"&#x5B9E;&#x4F8B;&#x65B9;&#x6CD5;"},{level:"2",content:"RegExp.prototype.test()"},{level:"2",content:"RegExp.prototype.exec()"},{level:"1",content:"&#x5B57;&#x7B26;&#x4E32;&#x5B9E;&#x4F8B;&#x65B9;&#x6CD5;"},{level:"2",content:"String.prototype.match()"},{level:"2",content:"String.prototype.search()"},{level:"2",content:"String.prototype.replace()"},{level:"2",content:"String.prototype.split()"},{level:"1",content:"&#x5339;&#x914D;&#x89C4;&#x5219;"},{level:"2",content:"&#x5B57;&#x9762;&#x91CF;&#x548C;&#x5143;&#x5B57;&#x7B26;"},{level:"2",content:"&#x8F6C;&#x4E49;&#x5B57;&#x7B26;"},{level:"2",content:"&#x7279;&#x6B8A;&#x5B57;&#x7B26;"},{level:"2",content:"&#x5B57;&#x7B26;&#x7C7B;"},{level:"2",content:"&#x9884;&#x5B9A;&#x4E49;&#x6A21;&#x5F0F;"},{level:"2",content:"&#x91CD;&#x590D;&#x7C7B;"},{level:"2",content:"&#x4FEE;&#x9970;&#x7B26;"},{level:"2",content:"&#x7EC4;&#x5339;&#x914D;"}];export{t as attributes,e as html,n as toc};
