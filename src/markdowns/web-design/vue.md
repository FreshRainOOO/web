# VUE

# setup 语法糖

## defineExpose() 父组件调用子组件的方法/属性

父组件

```html
<Son ref="sonRef"></Son>
```

子组件

```html
<script setup>
  const sonFn = () => {};
  defineExpose({
    sonFn,
  });
</script>
```

## defineProps() 子组件拿父组件的值(也可直接方法,但是 vue 不推荐)

```vue
<script setup>
const props = defineProps({
  text: String,
  message: Number,
});
</script>
```

## defineEmits() 子组件拿父组件的方法

演示子组件修改父组件传来的 props 值
父组件

```vue
<template>
  <Ss :cc="cc" @update="cc = $event"></Ss>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Ss from "./ss.vue";
const cc = ref(0);
const change = () => {
  cc.value++;
};
</script>
```

子组件

```vue
<template>
  <div>cc{{ cc }}</div>
  <div @click="emits('update', cc++)">+++++</div>
</template>
<script lang="ts" setup>
const props = defineProps({
  cc: Number,
});
const { cc } = props;
const emits = defineEmits(["change", "update"]);
</script>
```

## awite

awite 会将 setup 自动变为 async 函数,返回 promise
需要配合`<Suspense>`使用

```html
<!-- src/App.vue -->
<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <Suspense>
          <!-- 主要内容 -->
          <component :is="Component"></component>
          <!-- 加载中状态 -->
          <template #fallback> 正在加载... </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>
```

# other

## v-html 后样式不生效

> 删除 style 的 scoped

## 拿到最新的 Dom 对象

```ts
await nextTick(); //在方法中使用,不要再生命周期中直接使用
```

## 路由切换动画

https://juejin.cn/post/6963205355702583303

```vue
//App.vue中
<template>
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script></script>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
```

## ts 定义对象的 key 为某些字符串

```ts
type Keys = "inquiry_mode" | "bill_status";
type Props = {
  //规定props为一个对象,并且key必须属于 Keys
  [key in Keys]?: { disabled: boolean };
};
```

## ts 一些类型

```ts
 style?: React.CSSProperties;
```
