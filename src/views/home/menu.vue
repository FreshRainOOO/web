<template>
    <div class="menu">
        <div class="a">
            <div class="scroll">
                <Blog :isInMenu="isInMenu"></Blog>
            </div>
        </div>
        <div class="b" :class="fullDom == 'b' && 'full'">
            <div>
                <h1>&#128054&#128054&#128054</h1>
            </div>
        </div>
        <div class="c" :class="fullDom == 'c' && 'full'">
            <div>
                <h1>&#129418&#129418&#129418</h1>
            </div>
        </div>
        <div class="d" :class="fullDom == 'd' && 'full'">
            <div>
                <h1>&#128517&#128517&#128517</h1>
            </div>
        </div>
        <div class="e" :class="fullDom == 'e' && 'full'">
            <div>
                <WebLink :isInMenu="isInMenu"></WebLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import anime from 'animejs/lib/anime.js';
import Blog from './components/blog.vue'
import WebLink from "./components/WebLink.vue";
import { onMounted, ref, toRefs } from "vue";

const props = defineProps({
    isInMenu: Boolean
})
const { isInMenu } = toRefs(props)

const fullDom = ref<string>()

onMounted(() => {

})

</script>
<style lang="scss" scoped>
.menu {
    display: grid;
    width: 100%;
    height: 700px;
    grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(3, 33%);
    /* grid-gap:50px 50px; */
    grid-template-areas: 'a a b'
        'a a e'
        'c d e';

    >div {
        box-sizing: border-box;
        padding: 12px;

        .scroll {
            overflow-x: hidden;
            overflow-y: overlay;

            /* 滚动条整体 */
            &::-webkit-scrollbar {
                height: 20px;
                width: 20;
            }

            /* 两个滚动条交接处 -- x轴和y轴 */
            &::-webkit-scrollbar-corner {
                background-color: transparent;
            }

            /* 滚动条滑块 */
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 2px 0px 7px 2px rgba(0, 0, 0, 0.2);
                background: transparent;
                // opacity: .3;
            }

            /* 滚动条轨道 */
            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                background: #ea6b48;
            }

            /* 滚动条两端按钮 */
            &::-webkit-scrollbar-button {}
        }
    }

    .full {

        -webkit-animation: full .4s 1 alternate ease-in-out;
        // transition: all 2s ease-out;
        grid-column-start: a-start;
        grid-column-end: b-end;
        grid-row-start: a-start;
        grid-row-end: c-end;
        z-index: 10;

        @keyframes full {
            0% {
                opacity: 0.7
            }

            100% {
                opacity: 1
            }
        }
    }
}

.a {
    grid-area: a;

    >div {
        background-color: #ea6b48;
        width: 100%;
        height: 100%;
        border: 5px solid #f2e4e3;

        h1 {
            color: #f2e4e3;
            display: inline-block;
            margin: 0 auto;
            line-height: 100%;
        }

    }
}

.b {
    grid-area: b;

   > div {
        background-color: #94aa67;
        width: 100%;
        height: 100%;
        border: 5px solid #dbccb1;
    }

    h1 {
        color: #dbccb1;
    }
}

.c {
    grid-area: c;

   >div {
        background-color: #6667ab;
        width: 100%;
        height: 100%;
        border: 5px solid #f7fed5;
    }

    h1 {
        color: #f7fed5;
    }

}

.d {
    grid-area: d;

    >div {
        background-color: #d57799;
        width: 100%;
        height: 100%;
        border: 5px solid #fafafa;
    }

    h1 {
        color: #fafafa;
    }
}

.e {
    grid-area: e;

    >div {
        background-color: #fff;
        width: 102%;
        height: 102%;
        box-sizing: border-box;
        border: 5px solid #fff;
    }

    h1 {
        color: #fff;
    }
}
</style>