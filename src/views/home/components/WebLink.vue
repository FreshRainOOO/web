<template>
    <!-- <button @click="goplay()">play</button> -->
    <div class="demo-content staggering-grid">
        <div class="grid">
            <div v-for="item, idx in linkList" :key="idx" class="el" @click="linkTo(item.path)"
                :style="{ backgroundImage: `url(${item.imgSrc})` }">
                <i v-if="item.icon" :class="`iconfont ${item.icon}`"></i>
                <span>{{ item.describe }} </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, toRefs } from "vue";
import anime from 'animejs/lib/anime.js';
type Link = {
    path: string
    imgSrc?: string
    icon?: string
    describe: string
}
const props = defineProps({
    isInMenu: Boolean
})
const { isInMenu } = toRefs(props)
watch(isInMenu, () => {
    isInMenu.value && play.value.play()
})
const play = ref()
const linkList: Link[] = [

    {
        path: 'https://github.com/FreshRainOOO/da-blog',
        imgSrc: 'https://ts4.cn.mm.bing.net/th?id=ODLS.fe916855-7a5a-4f44-b52e-1c5c31f0329d&w=32&h=32&o=6&pid=13.1',
        describe: 'github'
    },
    {
        path: 'https://gitee.com/li-mengdada/blackda',
        imgSrc: 'https://ts3.cn.mm.bing.net/th?id=ODLS.801cff4e-cdce-446d-ba43-fa6cf0e27c18&w=32&h=32&o=6&pid=13.1',
        describe: 'gitee'
    },
    {
        path: 'https://anime.js.cool/documentation',
        imgSrc: 'https://anime.js.cool/documentation/assets/img/icons/icon-doc.png',
        describe: 'anime.js中文文档'
    },
    // {
    //     path: 'https://animejs.com/documentation/',
    //     imgSrc: 'https://animejs.com/documentation/assets/img/anime-mini-logo.svg',
    //     describe: 'anime.js原文档'
    // },
    // {
    //     path: 'https://space.bilibili.com/292519641?spm_id_from=444.41.0.0',
    //     imgSrc: 'https://ts1.cn.mm.bing.net/th?id=ODLS.4ce7043c-066c-4c41-bb41-16101bee101b&w=32&h=32&o=6&pid=13.1',
    //     describe: 'bilibili'
    // },
    // {
    //     path: 'https://cupfox.app/',
    //     imgSrc: 'https://apic.douyucdn.cn/upload/avanew/face/201803/25/19/64b723fd00fc71d9526c9618acfd9ac6_middle.jpg',
    //     describe: 'cupfox'
    // },
    // {
    //     path: 'https://c.runoob.com/more/svgeditor/',
    //     imgSrc: 'https://ts1.cn.mm.bing.net/th?id=OIP-C.mptH4EDBlxXQ5RF78FUuBAHaHa&w=192&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    //     describe: 'svg绘图'
    // },
    // {
    //     path: 'https://www.mp3smaller.com/zh/',
    //     icon: 'icon-sharpicons_Orca',
    //     describe: '压缩音乐'
    // },
    // {
    //     path: 'https://www.runoob.com/charsets/ref-emoji.html',
    //     icon: 'icon-sharpicons_Rabbit',
    //     describe: 'emoji对应html码'
    // },
    {
        path:'https://www.handsome-css.com/others',
        icon: 'icon-sharpicons_Orca',
        describe:'精致小动画QVQ'
    }
]
while (linkList.length < 30) {
    linkList.push({
        path: '',
        imgSrc: '',
        describe: ''
    })
}
const linkTo = (path: string) => {
    if (path) {
        window.open(path)
    }
}
onMounted(() => {
    play.value = anime({
        targets: '.staggering-grid .el',
        scale: [
            { value: .1, easing: 'easeOutSine', duration: 500 },
            { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ],
        delay: anime.stagger(200, { grid: [5, 6], from: 'center' })
    })
})
const goplay = () => {
    console.log(play.value);

    play.value.restart()
}

</script>
<style lang="scss">
.staggering-grid {
    display: flex;
    flex-wrap: wrap;
    height: 100%;

    .grid {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 0 !important;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
        }

        .el {
            width: 19%;
            padding-top: 19%;
            height: 0px;
            position: relative;
            background-color: #9dd6cf;
            font-size: 14px;
            margin: 1px;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            background-size: 90% 90%;

            &:hover {
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    top: 0;
                    padding-top: 100%;
                    background: rgba(255, 255, 255, 0.2);
                    -webkit-backdrop-filter: blur(8px);
                    backdrop-filter: blur(8px);
                    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
                }

                span {
                    width: 100%;
                    position: absolute;
                    z-index: 111;
                    top: 0;
                    text-align: center;
                    color: #fff;
                    display: block;
                }

                .iconfont {
                    filter: blur(3px);
                }
            }

            span {
                display: none;
            }

            .iconfont {
                font-size: 50px;
                position: absolute;
                top: calc(50% - 25px);
                left: calc(50% - 25px);
            }
        }

    }
}
</style>