<template>
  <audio ref="musicRef" height="100" width="100">
    <source src="" type="audio/mp3" />
    <source src="" type="audio/ogg" />
    <embed height="100" width="100" src="" />
  </audio>
  <div class="playMusic">
    <!-- 静音 -->
    <span class="iconfont icon-jingyin" style=" {position: relative;  background-color: #fff;  z-index: 10; } "
      v-if="!musicFlag" @click="checkMusic"></span>
    <!-- 当前播放图标 -->
    <span v-if="musicFlag" :class="`iconfont icon-${currentClass} ani`"
      style="{ position: relative; background-color: #fff; z-index: 10; } " @click="stopMusic"></span>
    <!-- 待选的三个图标 -->
    <span class="iconfont icon-xiayu" @click="playMusic('rain', 'xiayu')"></span>
    <span class="iconfont icon-qingtian" @click="playMusic('summer', 'qingtian')"></span>
    <span class="iconfont icon-yinle" @click="playMusic('暗号', 'yinle')"></span>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import anime from "animejs/lib/anime.js";
import summer from "../../../assets/mp3/summer.mp3"
import anhao from "../../../assets/mp3/暗号.mp3"
import rain from "../../../assets/mp3/rain.mp3"
const isSecond = ref(false) //是否第二次点击静音图标
const musicRef = ref(); //音乐dom对象
const musicAnime = ref(); //展开动画
const musicAnime2 = ref(); //收缩动画
const musicFlag = ref(false); //静音/播放
const currentClass = ref<string>(); //当前播放音乐的图标
onMounted(() => {
  //展开
  musicAnime.value = anime
    .timeline({
      targets: ".playMusic .icon-xiayu",
      translateX: 50,
      translateY: 0,
      autoplay: false,
    })
    .add(
      {
        targets: ".playMusic .icon-yinle",
        translateX: 0,
        translateY: 50,
        autoplay: false,
      },
      0
    )
    .add(
      {
        targets: ".playMusic .icon-qingtian",
        translateX: 35,
        translateY: 35,
        autoplay: false,
      },
      0
    );
  //收起
  musicAnime2.value = anime({
    targets: ".playMusic .iconfont",
    translateX: 0,
    translateY: 0,
    duration: 500,
  });
});

const playMusic = (src: string, className: string) => {
  currentClass.value = className;
  switch (src) {
    case 'summer':
      musicRef.value.src = summer;
      break;
    case '暗号':
      musicRef.value.src = anhao;
      break;
    case 'rain':
      musicRef.value.src = rain;
      break;
    default:
      break;
  }
  musicRef.value.play();
  musicAnime2.value.play();
  musicFlag.value = !musicFlag.value;
};
const stopMusic = () => {
  musicRef.value.pause();
  musicAnime2.value.play();
  musicFlag.value = !musicFlag.value;
};
const checkMusic = () => {
  isSecond.value = !isSecond.value;
  if (isSecond.value) {
    musicAnime.value.play()
  } else {
    musicAnime2.value.play()
  }
}
</script>
<style lang="scss" scoped>
.playMusic {
  span {
    position: absolute;
    font-size: 24px;
    cursor: pointer;
  }

  .ani {
    animation: kkk 2s infinite alternate ease-in-out;
  }

  @keyframes kkk {
    from {
      color: pink;
    }

    to {
      color: skyblue;
    }
  }
}
</style>
