<template>
    <section style="height:50px;">
        <div v-if="runFlag" :class="runFlag && 'keytext'" :style="{ cursor: 'pointer' }">{{ text }}</div>
    </section>
</template>
<script setup lang="ts">
//键盘输入效果
import { onMounted, ref, toRefs, watch } from "vue";
const props = defineProps({
    text: String,
    bgcColor: String,//和幕布颜色相同,才能遮挡
    isInMenu: Boolean
})
const runFlag = ref(false)
const { text, isInMenu } = toRefs(props)
watch(isInMenu, () => {
    runFlag.value = isInMenu.value
})
// const runCode = () => {
//     runFlag.value = true
// }
// defineExpose({
//     runCode
// })
</script>
<style >
:root {
    /* 字符数量 */
    --steps: 12;
    /* 动画时间 */
    --duration: 2.5s;
    /* 字体大小 */
    --fontSize: 50px;
    /* 光标大小 */
    --cursorSize: 20px;
}

.keytext {
    color: #fff;
    position: relative;
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
    font-size: var(--fontSize);
    line-height: 1;
}

.keytext::after {
    content: '';
    width: var(--cursorSize);
    height: var(--fontSize);
    background-color: black;
    z-index: 2;
    position: absolute;
    animation: blink 1s var(--duration) step-end infinite,
        moveCursor var(--duration) steps(var(--steps)) forwards;
}

.keytext::before {
    content: '';
    width: 100%;
    height: var(--fontSize);
    z-index: 1;
    position: absolute;
    background: linear-gradient(v-bind (bgcColor), v-bind (bgcColor)) no-repeat top right;
    animation: showText var(--duration) steps(var(--steps)) forwards;
}



/* 光标闪烁动画 */
@keyframes blink {
    0% {
        background-color: black;
    }

    50% {
        background-color: transparent;
    }

    100% {
        background-color: black;
    }
}

/* 光标移动动画 */
@keyframes moveCursor {
    0% {
        left: 0%;
    }

    99.9% {
        left: 99.9%;
        /* 否则会渐变*/
        opacity: 1;
    }

    100% {
        left: 100%;
        opacity: 0;
    }
}

/* 背景移动动画 */
@keyframes showText {
    0% {
        background-size: 100% 100%;
    }

    100% {
        background-size: 0% 100%;
    }
}
</style>