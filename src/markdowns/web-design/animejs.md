## [animejs](https://animejs.com/documentation)

[中文文档(效果不全)](https://anime.js.cool/documentation)
[源文档](https://animejs.com/documentation)

```ts
import anime from "animejs/lib/anime.js";
```

## 简单使用

```ts
const myanime = ref();
//小球延时滚动
myanime.value = anime({
  targets: ".blog>div",
  translateX: -270,
  autoplay: false, //自动播放,默认为true
});
//通过函数重新调用
const playanime = () => {
  myanime.value.restart();
};
```

## 方法

| function | 描述     |
| -------- | -------- |
| play     | 进行动画 |
| pause    | 暂停     |
| restart  | 重启     |

## 判断元素是否在可视区 (IntersectionObserver 原生 js)

```html
<style>
    body {
        height: 3000px;
        width: 3000px;
    }
    #box1 {
        width: 300px;
        height: 300px;
        background-color: red;
        margin-top: 100px;
        margin-left: 300px;
    }
</style>
<body>
    <div id="box1"></div>
    <script type="text/javascript">

        const io = new IntersectionObserver(changes => {
            for (const change of changes) {
                // console.log(change.time) // 发生变化的时间
                // console.log(change.rootBounds) // 根元素的矩形区域的信息
                // console.log(change.boundingClientRect) // 目标元素的矩形区域的信息
                console.log(change.isIntersection) // 目标元素与视口（或根元素）是否相交
                // console.log(change.intersectionRect) // 目标元素与视口（或根元素）的交叉区域的信息
                console.log(change.intersectionRatio) // 目标元素与视口（或根元素）的相交比例
                // console.log(change.target) // 被观察的目标元素
            }
        }, {
            threshold: [0,1]//当重合度为0 和 1 时执行
        })
        io.observe(document.getElementById('box1'))

    </script>

</body>
```

## 给多个元素加动画,并一起调用

```ts
//通过timeline 可添加延时元素, add的第二个参数设置为0, 三个元素可以一起进行动画
anime.timeline({}).add({}, 0).add({}, 0);
```

## 添加关键帧

```ts
anime({
  targets: ".reverse .history",
  keyframes: [
    { left: 0, bottom: 5 },
    { left: 15, bottom: -5 },
  ],
  duration: 2500,
  easing: "easeOutElastic(1, .8)",
});
```

## 动画不生效

可能是因为 DOM 未渲染,就生成动画了  
所以生成 dom 的数据源尽量放在 setup 中  
再将 anime 放到 onMounted 中

```ts
const list = ref<(string | undefined)[]>(getList()); //正确写法
//错误写法-> 在onMounted中list.value = getList()
onMounted(() => {
  myanime.value = anime({
    targets: ".blog div",
    translateX: -270,
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
  });
});
```
