# 网页嵌入 markdown 文件

-  渲染
-  代码高亮,可复制
- 集中处理路由,动态引入

# 渲染

使用包 `vite-plugin-markdown`

## 配置

```ts
//vite.config.ts 配置
import { plugin } from "vite-plugin-markdown";
export default defineConfig({
  plugins: [
    vue(),
    plugin({
      mode: ["html", "toc"],
    }),
  ],
});
```

## 使用

```ts
import { html } from "./hhh.md";
const htmlRef = ref();
htmlRef.value = html; //直接绑定 v-html使用
```

# 代码高亮

使用包 `highlight.js`

## 配置

```ts
//src/mian.js 配置
import hljs from "highlight.js"; //导入代码高亮文件
import "highlight.js/styles/stackoverflow-light.css"; //导入代码高亮样式,可以通过导入不同的.css文件,来修改效果
const app = createApp(App);
app.directive("highlight", function (el) {
  //自定义高亮样式 v-highlight
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block);
  });
});
```

## 使用

```html
<!-- 给要渲染的顶级元素,加上v-highlight即可 -->
<div v-highlight v-html="mdref"></div>
```

# 复制代码功能

## 1.生成复制按钮

```less
pre {
  position: relative;
  &:after {
    content: "复制";
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
  }
}
```

## 2.声明点击事件

利用事件冒泡机制,给顶级元素添加点击事件,然后判断触发的元素,
调用写粘贴板 API `navigator.clipboard.writeText`

```html
<div v-highlight v-html="mdref" class="md" @click="(e) => copy(e)"></div>
```

```ts
const copy = (e: { target: HTMLElement }) => {
  if (e.target?.tagName == "PRE") {
    navigator.clipboard.writeText(e.target?.innerText).then((res) => {
      console.log("复制成功");
    });
  }
};
```

# 路由集中处理

给 src/markdowns 的 .md 文件自动添加路由

## 1.生成 list

利用 `import.meta.glob`API 读取文件目录

```ts
//src/markdowns/list.ts
const mdFiles = import.meta.glob("../markdowns/**/*.md"); //不要用绝对路径
//https://vitejs.cn/vite3-cn/guide/features.html#glob-import
export default mdFiles;
```

## 2.读取并注册路由

```ts
//src/router/routes.js
import mdFiles from "@/markdowns/list";
const routeMarkdown = () => {
  let arr = [];
  for (const path in mdFiles) {
    const pathName = path.slice(2, -3);  //将前缀与.md去除
    arr.push({
      path:encodeURI(pathName) , //转换为UTF-8编码, 如果不手动转换,vue-router会自动将转化,导致路径不匹配的问题,并且当路由跳转时,也应用encodeURI包裹路径
      name: pathName,
      component: () => import("@/views/blogs/index.vue"), //指向同一个组件,组件内部再动态引入
    });
  }
  return arr;
};
const routes = [{ {
    path: "/blog",
    name: "记录",
    title: "记录",
    children: routeMarkdown(),
  },}]
export default routes;
```

## 3.动态引入路由所指向的文件

### 3.1 异步渲染

```ts
//src/views/blogs/index.vue
import mdFiles from "@/markdowns/list.ts";
import { useRoute } from "vue-router";
const route = useRoute();
const mdref = ref();
mdFiles[`./${String(route.name)}.md`]().then(({ html }) => {
  mdref.value = html; //这里就可以渲染了
});
```

### 3.2 同步拿到最新DOM

由于要制作目录,而目录需要获取 h1-h3 标签,使用await nextTick()

```ts
//src/views/blogs/index.vue
const renderToc = async () => {
  const { html } = await mdFiles[`./${String(route.name)}.md`]();
  mdref.value = html;
  await nextTick(); //拿到最新的dom
  const all_headings = document.querySelectorAll("h1, h2, h3");
  let aa: Toc[] = [];
  all_headings.forEach((item) => {
    //不支持map
    aa.push({
      scollTop: item.getBoundingClientRect().top,
      tagClass: `${item.tagName}Class`,
      content: item.textContent as string,
    });
  });
  tocList.value = aa;
};
renderToc();
```
