

<template>
  <div class="scoll">

    <header>
      <h2 class="logo">
        <Music></Music>
      </h2>
      <Reverse></Reverse>

    </header>

    <section class="parallax">
      <img src="/home/hill1.webp" id="hill1" ref="hill1" />
      <img src="/home/hill2.webp" id="hill2" />
      <img src="/home/hill3.webp" id="hill3" />
      <img src="/home/hill4.webp" id="hill4" ref="hill4" />
      <img src="/home/hill5.webp" id="hill5" ref="hill5" />
      <img src="/home/tree.webp" id="tree" />
      <h2 ref="text" id="text">
        <span class="flower">Flower</span>
        <span> Sun</span>
        <span> Rainbow</span>
      </h2>
      <img src="/home/leaf.webp" ref="leaf" id="leaf" />
      <img src="/home/plant.webp" id="plant" />
      <div ref="downScollDom" class="downScoll" @click="scroll">
        <span class="iconfont icon-xiangxia"></span>
        <span class="iconfont icon-xiangxia"></span>
        <span class="iconfont icon-xiangxia"></span>
      </div>
    </section>

    <section class="sec">
      <CodePen @click="reAnimat()" :isInMenu="inMeun" text='return true' bgcColor="#003329" />
      <Menu :isInMenu="inMeun" />
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from "vue";
import Menu from "./menu.vue";
import Music from './components/music.vue'
import anime from 'animejs/lib/anime.js';
import Reverse from "./components/reverse.vue";
import CodePen from "@/views/laboratory/codePen/index.vue";
const downScoll = ref<boolean>(true)

const downScollDom = ref<HTMLDivElement>()
const text = ref<HTMLDivElement | null>(null);
const leaf = ref<HTMLDivElement | null>(null);
const hill1 = ref<HTMLDivElement | null>(null);
const hill4 = ref<HTMLDivElement | null>(null);
const hill5 = ref<HTMLDivElement | null>(null);
const animationStore = ref()
const inMeun = ref(false) //视图是否进入菜单栏
const clientHeight = document.documentElement.clientHeight
const reAnimat = () => {
  inMeun.value = false
  setTimeout(() => {
    inMeun.value = true
  }, 500);
}

const scroll = () => { //自动滚动
  const top = document.body.clientHeight

  const pageY = window.pageYOffset;
  const endPosition = top + pageY;

  const startTime = +new Date();
  const duration = 3000; //ms

  function run() {
    const time = +new Date() - startTime;

    window.scrollTo(0, pageY + top * (time / duration));
    animationStore.value = requestAnimationFrame(run);

    if (time >= duration) {
      window.scrollTo(0, endPosition);
      cancelAnimationFrame(animationStore.value);
    }
  }

  requestAnimationFrame(run);
}
const srollFn = () => {
  let value = window.scrollY;
  downScoll.value = (value == 0)
  text.value && (text.value.style.marginTop = value * 1.5 + "px");
  leaf.value && (leaf.value.style.top = value * -1.5 + "px");
  leaf.value && (leaf.value.style.left = value * 1.5 + "px");
  hill5.value && (hill5.value.style.left = value * 1.5 + "px");
  hill4.value && (hill4.value.style.left = value * -1.5 + "px");
  hill1.value && (hill1.value.style.top = value * 0.5 + "px");
  inMeun.value = value > (clientHeight / 3)   //滚动一段距离, menu 的动画开始播放

}
onMounted(() => {
  window.addEventListener("scroll", srollFn);
});
onUnmounted(() => {
  window.removeEventListener("scroll", srollFn)
})
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.downScoll {
  z-index: 120;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;

  &:hover {
    animation: transmove 1s ease-out;
    cursor: pointer;
  }

  span:nth-child(1) {
    animation: transOpacity 6s linear infinite;
  }

  span:nth-child(2) {
    animation: transOpacity 6s linear infinite;
    animation-delay: 2s;
  }

  span:nth-child(3) {
    animation: transOpacity 6s linear infinite;
    animation-delay: 4s;
  }

  .icon-xiangxia {
    color: #fff;

  }
}

@keyframes transmove {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes transOpacity {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

::selection {
  background: rgba(0, 0, 0, 0.2);
}

body {
  background: #f9f9f9;
  min-height: 100vh;
  overflow-x: hidden;
}

.scoll {
  overflow: hidden;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
}

.logo {
  font-size: 2em;
  color: #359381;
  margin-right: 270px;
}


.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  #text {
    //毛玻璃
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border-radius: 25px;
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);

    .flower {
      color: transparent;
      filter: contrast(1.7);
      background-image: url(/home/flower.webp);
      background-size: 35%;
      background-clip: text;
      -webkit-background-clip: text;
    }

  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
  }
}

#text {
  position: absolute;
  font-size: 5em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}


.sec {
  position: relative;
  background: #003329;
  padding: 100px;
  overflow: hidden;

  h2 {
    font-size: 3em;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
  }
}
</style>
