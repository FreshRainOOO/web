```html
<template>
  <div class="grid">
    <div
      v-for="item in list"
      :key="item.text"
      :style="item.style"
      :ref="getRef"
    >
      <div>{{ item.text }}</div>
    </div>
  </div>
</template>
```

```ts
<script setup lang="ts">
import { ref } from "vue";
const list = ref()
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
const getRef = (e) => {//获取元素高度,设置gridRow
    let span = Math.ceil(e.style.height.slice(0, -2) / 1) + 1  //grid-auto-rows: 1px;与这里的除数1 保持一致
    e.style.gridRow = `auto / span ${span}`
}
const renderDiv = () => {
    let aa = []
    for (let i = 0; i < 20; i++) {
        let heightss = getRandomArbitrary(50, 150)
        aa.push({
            // style: { width: '100%', height: `${height}px`, 'grid-row': `auto / span${(height / 10) + 1}` },
            style: { width: '100%', height: `${heightss}px`, },
            text: i
        })
    }
    list.value = aa
}
renderDiv()
</script>
```

```less
<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);//3列,每列比例相同
    grid-auto-rows: 1px;//每行高度
    grid-column-gap: 4px;//列间距

    >div {
        box-sizing: border-box;
        padding: 5px 10px;

        div {
            width: 100%;
            height: 100%;
            background-color: pink;
        }
    }
}
</style>
```
