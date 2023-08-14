const n={},t=`<p>初始化项目<code>go mod init 项目名</code>
启动 redis 去相应 cmd 目录下 <code>redis-server.exe redis.windows.conf</code></p>
<h1>打印</h1>
<h2>输出</h2>
<blockquote>
<p>打印 print 不能使用%s ,%d 或%c
格式化打印 printf
打印后换行 println</p>
</blockquote>
<pre><code class="language-go">    %v,原样输出
	%T，打印类型
	%t,bool类型
	%s，字符串
	%f，浮点
	%d，10进制的整数
	%b，2进制的整数
	%o，8进制
	%x，%X，16进制
	%x：0-9，a-f
	%X：0-9，A-F
	%c，打印字符
	%p，打印地址
</code></pre>
<h1>循环</h1>
<p>对 slice、map、数组、字符串等进行迭代循环</p>
<pre><code class="language-go">for key, value := range oldMap {
    newMap[key] = value
}
</code></pre>
<p>goto</p>
<pre><code class="language-go">/**语法
goto label;
..
..
label: statement;
*/
func main() {
   /* 定义局部变量 */
   var a int = 10

   /* 循环 */
   LOOP: for a &lt; 20 {
      if a == 15 {
         /* 跳过迭代 */
         a = a + 1
         goto LOOP
      }
      fmt.Printf(&quot;a的值为 : %d\\n&quot;, a)
      a++
   }
}
</code></pre>
<h1>复杂数据类型</h1>
<h2>数组</h2>
<pre><code class="language-go">var balance [10] float32 //固定长度
var balance = []float32{1000.0, 2.0, 3.4, 7.0, 50.0}//自动推导长度

/**
    遍历数组
 */
 func main() {
    a := [...]float64{67.7, 89.8, 21, 78}//自动推导长度
    sum := float64(0)
    for i, v := range a {//range returns both the index and value
        fmt.Printf(&quot;%d the element of a is %.2f\\n&quot;, i, v)
        sum += v
    }
    fmt.Println(&quot;\\nsum of all elements of a&quot;,sum)
}

//数组是值类型,b := a,
//修改数组b,不会影响数组a
</code></pre>
<h2>切片 slice</h2>
<pre><code class="language-go">numbers := []int{0,1,2,3,4,5,6,7,8}  //创建切片
 var numbers = make([]int,3,5)
 len(numbers),//len=3 长度
 cap(numbers) // cap=5    容量
  append(numbers, 1) //追加元素
   copy(numbers1,numbers) //拷贝 numbers 的内容到 numbers1
   [:] 表示对一个数组或切片进行切片操作，返回一个新的切片,共享底层数组,
   s[1:-1] 从第二个截取到倒数第二个
</code></pre>
<h2>map 集合</h2>
<p>存放键值对,引用类型</p>
<pre><code class="language-go">var map_variable map[key_data_type]value_data_type
 countryCapitalMap[&quot;France&quot;] = &quot;Paris&quot; //插入k-v值
   captial, ok := countryCapitalMap[&quot;United States&quot;] //查看值,并查看是否存在
   delete(countryCapitalMap,&quot;France&quot;) //删除元素
</code></pre>
<h1>函数</h1>
<pre><code class="language-go">func funcName(parametername type1, parametername type2) (output1 type1, output2 type2) {
//这里是处理逻辑代码
//返回多个值
return value1, value2
}

对于引用类型的值,要进行指针传递
</code></pre>
<h2>defer 延迟</h2>
<pre><code class="language-go">//defer先进后出,用于资源及时清理
func ReadWrite() bool {
    file.Open(&quot;file&quot;)
    defer file.Close()
    if failureX {
          return false
    } i
    f failureY {
          return false
    }
    return true
}
//defer函数：
//当外围函数中的语句正常执行完毕时，只有其中所有的延迟函数都执行完毕，外围函数才会真正的结束执行。
//当执行外围函数中的return语句时，只有其中所有的延迟函数都执行完毕后，外围函数才会真正返回。
//当外围函数中的代码引发运行恐慌时，只有其中所有的延迟函数都执行完毕后，该运行时恐慌才会真正被扩展至调用函数。
</code></pre>
<h1>包</h1>
<h2>package</h2>
<p>同一文件夹下的报名保持一致</p>
<blockquote>
<p>package ruby
// 可以被导出的函数
func FuncPublic() {
}
// 不可以被导出的函数
func funcPrivate() {
}</p>
</blockquote>
<blockquote>
<p>包中，通过标识符首字母是否大写，来确定是否可以被导出。首字母大写才可以被导出，视为 public 公共的资源</p>
</blockquote>
<h2>import</h2>
<h3>点操作</h3>
<pre><code class="language-go">import(
	. &quot;fmt&quot;
)
用的fmt.Println(&quot;hello world&quot;)可以省略的写成Println(&quot;hello world&quot;)
</code></pre>
<h3>别名</h3>
<pre><code class="language-go">import (
  p1 &quot;package1&quot;
  p2 &quot;package2&quot;
  )
// 使用时：别名操作，调用包函数时前缀变成了我们的前缀
p1.Method()
</code></pre>
<h3>_ 操作</h3>
<p>如果仅仅需要导入包时执行初始化操作，并不需要使用包内的其他函数，常量等资源。则可以在导入包时，匿名导入。</p>
<pre><code class="language-go">import (
   &quot;database/sql&quot;
   _ &quot;github.com/ziutek/mymysql/godrv&quot;
 )
</code></pre>
<h1>指针</h1>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
)

func main() {
    b := 255
    a := &amp;b
    fmt.Println(&quot;address of b is&quot;, a) //address of b is 0x1040a124
    fmt.Println(&quot;value of b is&quot;, *a) //value of b is 255
    *a++
    fmt.Println(&quot;new value of b is&quot;, b) //new value of b is 256
}
</code></pre>
<h2>指针传递函数</h2>
<pre><code class="language-go">package main

import (
    &quot;fmt&quot;
)

func change(val *int) {
    *val = 55
}
func main() {
    a := 58
    fmt.Println(&quot;value of a before function call is&quot;,a) //58
    b := &amp;a
    change(b)
    fmt.Println(&quot;value of a after function call is&quot;, a) //55
}
</code></pre>
<h1>结构体</h1>
<p>初始化</p>
<pre><code class="language-go">// 1.按照顺序提供初始化值
P := person{&quot;Tom&quot;, 25}
// 2.通过field:value的方式初始化，这样可以任意顺序
P := person{age:24, name:&quot;Tom&quot;}
// 3.new方式,未设置初始值的，会赋予类型的默认初始值
p := new(person)
p.age=24
</code></pre>
<h2>匿名字段</h2>
<pre><code class="language-go">type Human struct {
    name string
    age int
    weight int
}
type Student struct {
    Human // 匿名字段，那么默认Student就包含了Human的所有字段
    speciality string
}
</code></pre>
<h2>方法</h2>
<p>即给结构体,添加一个函数</p>
<pre><code class="language-go">package main

import (
	&quot;fmt&quot;
	&quot;math&quot;
)

type Rectangle struct {
	width, height float64
}
type Circle struct {
	radius float64
}


func (r Rectangle) area() float64 {
	return r.width * r.height
}
//该 method 属于 Circle 类型对象中的方法
func (c Circle) area() float64 {
	return c.radius * c.radius * math.Pi
}
func main() {
	r1 := Rectangle{12, 2}
	r2 := Rectangle{9, 4}
	c1 := Circle{10}
	c2 := Circle{25}
	fmt.Println(&quot;Area of r1 is: &quot;, r1.area())
	fmt.Println(&quot;Area of r2 is: &quot;, r2.area())
	fmt.Println(&quot;Area of c1 is: &quot;, c1.area())
	fmt.Println(&quot;Area of c2 is: &quot;, c2.area())
}
</code></pre>
<h1>接口</h1>
<p>下面的例子中 Rectangle 和 Circle 都实现了 area 方法，也就是实现了 Shape 接口</p>
<pre><code class="language-go">package main

import &quot;fmt&quot;

type Shape interface {
	area() float64
}

type Rectangle struct {
	width  float64
	height float64
}

func (r Rectangle) area() float64 {
	return r.width * r.height
}

type Circle struct {
	radius float64
}

func (c Circle) area() float64 {
	return 3.14 * c.radius * c.radius
}

func main() {
	var s Shape

	s = Rectangle{width: 10, height: 5}
	fmt.Printf(&quot;矩形面积: %f\\n&quot;, s.area())

	s = Circle{radius: 3}
	fmt.Printf(&quot;圆形面积: %f\\n&quot;, s.area())
}
</code></pre>
<h1>并发</h1>
<h2>异步</h2>
<pre><code class="language-go">func main() {
	go Run()// 在 i 中间穿插打印run ,并且不能控制时机
	i := 0
	for i &lt; count {
		i++
		fmt.Println(i)
	}
}

func Run() {
	fmt.Println(&quot;run&quot;)
}
</code></pre>
<h3>锁</h3>
<pre><code class="language-go">import (
	&quot;sync&quot;
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	go Run(&amp;wg)//直接使用 不加wg的逻辑 什么都打印不了
	wg.Wait()
}

func Run(wg *sync.WaitGroup) {
	fmt.Println(&quot;run&quot;)
	wg.Done()
}
</code></pre>
<h2>channel</h2>
<pre><code class="language-go">func main() {
	c1 := make(chan int) //无缓冲区
	go func() {          //不加go func  从上往下执行, 没初始容量, c1&lt;-1 存不进去 , fmt.Println (&lt;-c1)  读不出来
		c1 &lt;- 1 //存一个值
	}()
	fmt.Println(&lt;-c1) //先执行到这里,等待一个容量
}
</code></pre>
<pre><code class="language-go">func main() {
	c := make(chan int) //无缓冲区
	var readc &lt;-chan int = c
	var writec chan&lt;- int = c
	go SetChan(writec)
	GetChan(readc)
}
func SetChan(writec chan&lt;- int) {
	for i = 0; i &lt; 10; i++ {
		writec &lt;- i
	}
}
func GetChan(readc chan&lt;- int) {
	for i = 0; i &lt; 10; i++ {
		fmt.Printf(&quot;get%d\\n&quot;, &lt;-readc)
	}
}
</code></pre>
`,e=[{level:"1",content:"&#x6253;&#x5370;"},{level:"2",content:"&#x8F93;&#x51FA;"},{level:"1",content:"&#x5FAA;&#x73AF;"},{level:"1",content:"&#x590D;&#x6742;&#x6570;&#x636E;&#x7C7B;&#x578B;"},{level:"2",content:"&#x6570;&#x7EC4;"},{level:"2",content:"&#x5207;&#x7247; slice"},{level:"2",content:"map &#x96C6;&#x5408;"},{level:"1",content:"&#x51FD;&#x6570;"},{level:"2",content:"defer &#x5EF6;&#x8FDF;"},{level:"1",content:"&#x5305;"},{level:"2",content:"package"},{level:"2",content:"import"},{level:"3",content:"&#x70B9;&#x64CD;&#x4F5C;"},{level:"3",content:"&#x522B;&#x540D;"},{level:"3",content:"_ &#x64CD;&#x4F5C;"},{level:"1",content:"&#x6307;&#x9488;"},{level:"2",content:"&#x6307;&#x9488;&#x4F20;&#x9012;&#x51FD;&#x6570;"},{level:"1",content:"&#x7ED3;&#x6784;&#x4F53;"},{level:"2",content:"&#x533F;&#x540D;&#x5B57;&#x6BB5;"},{level:"2",content:"&#x65B9;&#x6CD5;"},{level:"1",content:"&#x63A5;&#x53E3;"},{level:"1",content:"&#x5E76;&#x53D1;"},{level:"2",content:"&#x5F02;&#x6B65;"},{level:"3",content:"&#x9501;"},{level:"2",content:"channel"}];export{n as attributes,t as html,e as toc};
