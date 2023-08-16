## 链接过慢配置 ssh

https://blog.csdn.net/little_stick_i/article/details/127511581
push pull 的时候同时也打开 GitHub 网站，否则有时候会 ssh 错误

## 部署静态目录到 GitHub pages

https://blog.csdn.net/zuo_kaizheng/article/details/121659587

### 使用 vite 的差异配置

1. 修改 vite.config.ts

```ts
//base为你的项目名,也即你打开的链接
export default defineConfig({
  base: "/web/",
});
```

2. 使用 hash 路由
   history 路由会导致空白页, dom 不能挂载到 #app 上

```js
import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
});
```

3. 自定义404页面，将index.html复制一份并重命名为 404.html 