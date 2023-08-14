<template>
    <button @click="goplay()">play</button>
    <div class="demo-content staggering-grid-demo">
        <div class="grid">
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
            <div class="small square el"></div>
        </div>
        <div class="grid shadow">
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
            <div class="small square"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import anime from 'animejs/lib/anime.js';
const play = ref()
onMounted(() => {
    play.value = anime({
        targets: '.staggering-grid-demo .el',
        scale: [
            { value: .1, easing: 'easeOutSine', duration: 500 },
            { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ],
        delay: anime.stagger(200, { grid: [10, 7], from: 'center' })
    })
})
const goplay = () => {
    console.log(play.value.restart());
}

</script>
<style>
.staggering-grid-demo {
    display: flex;
    flex-wrap: wrap;
}

.small {
    width: 18px;
    height: 18px;
}

.grid {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
}

.square {
    pointer-events: none;
    position: relative;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    margin: 1px;
    background-color: currentColor;
    font-size: 14px;
}
.shadow {
    position: absolute;
    opacity: .2;
}
</style>