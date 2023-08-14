orm: 将对象映射到数据库里面

数据表 <--> 结构体
数据行 <--> 结构体实例
字段 <--> 结构体字段
https://www.liwenzhou.com/posts/Go/gorm/
## 基本增删改查

```go
import (
	"fmt"
	"gorm.io/gorm"
)

type UserInfo struct {
	ID     uint
	Name   string
	Gender string
	Hobby  string
}

func init() {
	//连接mysql数据库
	db, err := gorm.Open("mysql", "root")
	if err != nil {
		panic(err)
	}
	// defer db.Close()
	//创建表 自动迁移(把结构体与数据表进行对应)
	db.AutoMigrate(&UserInfo{})

	//创建数据行
	u1 := UserInfo{1, "wang", "男", "篮球"}
	db.Create(&u1)

	//查询
	var u UserInfo
	db.First(&u) //第一条
	fmt.Printf("u:%#v\n", u)

	//更新
	db.Model(&u).Update("hobby", "双色球")

	//删除
	db.Delete(&u)
}
```

## 定义模型
用结构体代替数据库中的表





