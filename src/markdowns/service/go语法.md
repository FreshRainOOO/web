初始化项目`go mod init 项目名`
启动 redis 去相应 cmd 目录下 `redis-server.exe redis.windows.conf`

# 打印

## 输出

> 打印 print 不能使用%s ,%d 或%c
> 格式化打印 printf
> 打印后换行 println

```go
    %v,原样输出
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
```

# 循环

对 slice、map、数组、字符串等进行迭代循环

```go
for key, value := range oldMap {
    newMap[key] = value
}
```

goto

```go
/**语法
goto label;
..
..
label: statement;
*/
func main() {
   /* 定义局部变量 */
   var a int = 10

   /* 循环 */
   LOOP: for a < 20 {
      if a == 15 {
         /* 跳过迭代 */
         a = a + 1
         goto LOOP
      }
      fmt.Printf("a的值为 : %d\n", a)
      a++
   }
}
```

# 复杂数据类型

## 数组

```go
var balance [10] float32 //固定长度
var balance = []float32{1000.0, 2.0, 3.4, 7.0, 50.0}//自动推导长度

/**
    遍历数组
 */
 func main() {
    a := [...]float64{67.7, 89.8, 21, 78}//自动推导长度
    sum := float64(0)
    for i, v := range a {//range returns both the index and value
        fmt.Printf("%d the element of a is %.2f\n", i, v)
        sum += v
    }
    fmt.Println("\nsum of all elements of a",sum)
}

//数组是值类型,b := a,
//修改数组b,不会影响数组a
```

## 切片 slice

```go
numbers := []int{0,1,2,3,4,5,6,7,8}  //创建切片
 var numbers = make([]int,3,5)
 len(numbers),//len=3 长度
 cap(numbers) // cap=5    容量
  append(numbers, 1) //追加元素
   copy(numbers1,numbers) //拷贝 numbers 的内容到 numbers1
   [:] 表示对一个数组或切片进行切片操作，返回一个新的切片,共享底层数组,
   s[1:-1] 从第二个截取到倒数第二个
```

## map 集合

存放键值对,引用类型

```go
var map_variable map[key_data_type]value_data_type
 countryCapitalMap["France"] = "Paris" //插入k-v值
   captial, ok := countryCapitalMap["United States"] //查看值,并查看是否存在
   delete(countryCapitalMap,"France") //删除元素
```

# 函数

```go
func funcName(parametername type1, parametername type2) (output1 type1, output2 type2) {
//这里是处理逻辑代码
//返回多个值
return value1, value2
}

对于引用类型的值,要进行指针传递
```

## defer 延迟

```go
//defer先进后出,用于资源及时清理
func ReadWrite() bool {
    file.Open("file")
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
```

# 包

## package

同一文件夹下的报名保持一致

> package ruby
> // 可以被导出的函数
> func FuncPublic() {
> }
> // 不可以被导出的函数
> func funcPrivate() {
> }

> 包中，通过标识符首字母是否大写，来确定是否可以被导出。首字母大写才可以被导出，视为 public 公共的资源

## import

### 点操作

```go
import(
	. "fmt"
)
用的fmt.Println("hello world")可以省略的写成Println("hello world")
```

### 别名

```go
import (
  p1 "package1"
  p2 "package2"
  )
// 使用时：别名操作，调用包函数时前缀变成了我们的前缀
p1.Method()
```

### \_ 操作

如果仅仅需要导入包时执行初始化操作，并不需要使用包内的其他函数，常量等资源。则可以在导入包时，匿名导入。

```go
import (
   "database/sql"
   _ "github.com/ziutek/mymysql/godrv"
 )
```

# 指针

```go
package main

import (
    "fmt"
)

func main() {
    b := 255
    a := &b
    fmt.Println("address of b is", a) //address of b is 0x1040a124
    fmt.Println("value of b is", *a) //value of b is 255
    *a++
    fmt.Println("new value of b is", b) //new value of b is 256
}
```

## 指针传递函数

```go
package main

import (
    "fmt"
)

func change(val *int) {
    *val = 55
}
func main() {
    a := 58
    fmt.Println("value of a before function call is",a) //58
    b := &a
    change(b)
    fmt.Println("value of a after function call is", a) //55
}
```

# 结构体

初始化

```go
// 1.按照顺序提供初始化值
P := person{"Tom", 25}
// 2.通过field:value的方式初始化，这样可以任意顺序
P := person{age:24, name:"Tom"}
// 3.new方式,未设置初始值的，会赋予类型的默认初始值
p := new(person)
p.age=24
```

## 匿名字段

```go
type Human struct {
    name string
    age int
    weight int
}
type Student struct {
    Human // 匿名字段，那么默认Student就包含了Human的所有字段
    speciality string
}
```

## 方法

即给结构体,添加一个函数

```go
package main

import (
	"fmt"
	"math"
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
	fmt.Println("Area of r1 is: ", r1.area())
	fmt.Println("Area of r2 is: ", r2.area())
	fmt.Println("Area of c1 is: ", c1.area())
	fmt.Println("Area of c2 is: ", c2.area())
}
```

# 接口

下面的例子中 Rectangle 和 Circle 都实现了 area 方法，也就是实现了 Shape 接口

```go
package main

import "fmt"

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
	fmt.Printf("矩形面积: %f\n", s.area())

	s = Circle{radius: 3}
	fmt.Printf("圆形面积: %f\n", s.area())
}
```

# 并发

## 异步

```go
func main() {
	go Run()// 在 i 中间穿插打印run ,并且不能控制时机
	i := 0
	for i < count {
		i++
		fmt.Println(i)
	}
}

func Run() {
	fmt.Println("run")
}
```

### 锁

```go
import (
	"sync"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	go Run(&wg)//直接使用 不加wg的逻辑 什么都打印不了
	wg.Wait()
}

func Run(wg *sync.WaitGroup) {
	fmt.Println("run")
	wg.Done()
}
```

## channel

```go
func main() {
	c1 := make(chan int) //无缓冲区
	go func() {          //不加go func  从上往下执行, 没初始容量, c1<-1 存不进去 , fmt.Println (<-c1)  读不出来
		c1 <- 1 //存一个值
	}()
	fmt.Println(<-c1) //先执行到这里,等待一个容量
}
```

```go
func main() {
	c := make(chan int) //无缓冲区
	var readc <-chan int = c
	var writec chan<- int = c
	go SetChan(writec)
	GetChan(readc)
}
func SetChan(writec chan<- int) {
	for i = 0; i < 10; i++ {
		writec <- i
	}
}
func GetChan(readc chan<- int) {
	for i = 0; i < 10; i++ {
		fmt.Printf("get%d\n", <-readc)
	}
}
```
