### vscode 插件与设置

| 插件名          | 说明                                         |
| --------------- | -------------------------------------------- |
| prettier        | 格式化                                       |
| TODO highlight  | 记录待做，未完成项                           |
| Todo Tree       | 配合 TODO highlight 使用 快速查看记录的 TODO |
| open in browser | 运行一个本地 html 服务                       |

### 配置

> vscode 在 json 配置中输入下面代码,在空白框会提示

```json
"editor.suggest.snippetsPreventQuickSuggestions": false,
```

> 自动换行

设置 -> 搜索栏里输入“word wrap” -> 更改 Editor: Word Wrap 为“on”

## .gitignore 规则不生效

```$
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## 安装 go 插件

https://juejin.cn/post/6869362277896847367

1.代理配置

```shell
# 启用 go mod
go env -w GO111MODULE=on
# 设置 Go Proxy 代理
go env -w GOPROXY=https://goproxy.io,direct
```

2.插件安装

> Ctrl + Shift + P  
> Go: Install/Update Tools

## 关闭超链接

设置 -> `editor.links`