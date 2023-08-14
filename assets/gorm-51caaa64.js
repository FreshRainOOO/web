const t={},n=`<p>orm: 将对象映射到数据库里面</p>
<p>数据表 &lt;--&gt; 结构体
数据行 &lt;--&gt; 结构体实例
字段 &lt;--&gt; 结构体字段
https://www.liwenzhou.com/posts/Go/gorm/</p>
<h2>基本增删改查</h2>
<pre><code class="language-go">import (
	&quot;fmt&quot;
	&quot;gorm.io/gorm&quot;
)

type UserInfo struct {
	ID     uint
	Name   string
	Gender string
	Hobby  string
}

func init() {
	//连接mysql数据库
	db, err := gorm.Open(&quot;mysql&quot;, &quot;root&quot;)
	if err != nil {
		panic(err)
	}
	// defer db.Close()
	//创建表 自动迁移(把结构体与数据表进行对应)
	db.AutoMigrate(&amp;UserInfo{})

	//创建数据行
	u1 := UserInfo{1, &quot;wang&quot;, &quot;男&quot;, &quot;篮球&quot;}
	db.Create(&amp;u1)

	//查询
	var u UserInfo
	db.First(&amp;u) //第一条
	fmt.Printf(&quot;u:%#v\\n&quot;, u)

	//更新
	db.Model(&amp;u).Update(&quot;hobby&quot;, &quot;双色球&quot;)

	//删除
	db.Delete(&amp;u)
}
</code></pre>
<h2>定义模型</h2>
<p>用结构体代替数据库中的表</p>
`,o=[{level:"2",content:"&#x57FA;&#x672C;&#x589E;&#x5220;&#x6539;&#x67E5;"},{level:"2",content:"&#x5B9A;&#x4E49;&#x6A21;&#x578B;"}];export{t as attributes,n as html,o as toc};
