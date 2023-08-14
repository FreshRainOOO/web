
<template>
  <div>
    <router-view />
    <div class="loading" ref="loadingDom">
      <div v-for="item in randomDivColor" :style="{ backgroundColor: item }" :key="item"><span
          class="iconfont icon-xingxing"></span></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import anime from "animejs/lib/anime.js";
import { watch, ref, onMounted, nextTick } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore()

const loading = ref<boolean>(true)
const animeRef = ref()
const loadingDom = ref<HTMLDivElement>()
const randomDivColor = ['pink', 'green', 'skyblue', 'gold', 'purple']
const reAnime = () => {
  loadingDom.value && (loadingDom.value.style.visibility = 'visible')
  animeRef.value.restart()
}
onMounted(() => {
  animeRef.value = anime({
    targets: ".loading>div",
    keyframes: [
      { width: '100vw', },
      { translateX: '100vw' },
    ],
    duration: 1200,
    delay: anime.stagger(100),
    complete: function () {
      loading.value = false
      // store.commit('reNewPage')
      loadingDom.value && (loadingDom.value.style.visibility = 'hidden')//方便开发环境下,浏览器选中dom
      // console.log([loadingDom.value]);
    }
  });
  window.renderLoadingDom = reAnime //挂载一下,方便路由跳转时调用
})

// watch(store.state, (v) => {
//   if (store.state.isNewPage) {
//     console.log(animeRef.value);
//     loadingDom.value && (loadingDom.value.style.visibility = 'visible')
//     reAnime()
//     animeRef.value.restart()
//   }
// }, { deep: true })
</script>
<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  >div {
    height: 20%;
    width: 0%;
    position: relative;

    // translate: ;
    // transform: translateX(-100vw);
    span {
      font-size: 100px;
      position: absolute;
      right: 0;
      top: calc(50% - 50px);
      color: gold;
      text-shadow: 1px 1px 18px #fff;
    }
  }
}
</style>