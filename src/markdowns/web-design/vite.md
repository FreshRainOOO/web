# @/src 路径

> Vite 配置 alias 需要两步进行（TS 项目）
> 1、修改 vite.config.ts（让程序支持）
> 2、修改 tsconfig.json（让编辑器支持）

## vite.config.ts

```ts
import * as path from 'path'
export default defineConfig({
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

# npm run build

```json
"scripts": {
    "dev": "vite",
    "build": "vite build", //原 "vue-tsc && vite build"
    "preview": "vite preview"
  },
```

# import.meta.glob

```ts
//直接读取文件夹下所有.md文件
const modules = import.meta.glob("../markdowns/**/*.md"); //应使用相对路径
for (const path in modules) {
  //导入
  modules[path]().then((mod) => {
    console.log(path, mod);
  });
}
```
