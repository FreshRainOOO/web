<template>
    <div class="main">
        <div class="reverse">
            <span :class="`${checkHistory && 'check'} history`" @click="reverseEle">history</span>
            <span :class="`${!checkHistory && 'check'} suggest`" @click="reverseEle">suggest</span>
        </div>
        <nav class="navigation">
            <router-link v-for="item in linkList" :to="item.path">{{ item.name }}</router-link>
        </nav>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import anime from 'animejs/lib/anime.js';
type Link = { path: string, name: string }
const myAnime = ref()
const checkHistory = ref(false)
const suggestList: Link[] = [
    { path: '/laboratory/starSky', name: 'ball' },
    { path: '/laboratory/grain', name: '粒子' },
    // { path: '/blog/%E7%BD%91%E9%A1%B5%E5%B5%8C%E5%85%A5markdown', name: 'mark' },
]
const linkList = ref<Link[]>(suggestList)
watch(checkHistory, (v) => {
    if (v) {
        const list = localStorage.getItem('historyPages')
        if (list) {
            linkList.value = JSON.parse(list)
        } else {
            linkList.value = [{ name: '主页', path: '/' }]
        }
    } else {
        linkList.value = suggestList
    }
})
const reverseEle = () => {
    checkHistory.value = !checkHistory.value
    myAnime.value.restart()
}
onMounted(() => {
    myAnime.value = anime.timeline({
        targets: '.reverse .history',
        keyframes: [
            { left: 0, bottom: 5 },
            { left: 15, bottom: -5 },
        ],
        duration: 1800,
        easing: 'easeOutElastic(1, .8)',
    }).add({
        targets: '.reverse .suggest',
        keyframes: [
            { right: 0, top: 5 },
            { right: 15, top: -5 },
        ],
        duration: 1800,
        easing: 'easeOutElastic(1, .8)',
    });
})
</script>
<style lang="scss" scoped>
.reverse {
    position: relative;
    width: 150px;
    height: 30px;
    cursor: pointer;

    span {
        position: absolute;
        font-size: 20px;
        color: #eee;
        text-transform: uppercase
    }

    .history {
        left: 15px;
        bottom: -5px;
    }

    .suggest {
        right: 15px;
        top: -5px;
    }

    .check {
        color: #359381;
        z-index: 100;

    }

}

.main {
    width: 80%;
    display: flex;

    .navigation {
        display: flex;

        a {
            text-decoration: none;
            color: #359381;
            padding: 6px 15px;
            border-radius: 20px;
            margin: 0 10px;
            font-weight: 600;
            text-shadow: 1px 1px 0px #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover,
            &:active {
                text-shadow: 0px 0px 0px transparent;
                background: #359381;
                color: #fff;
            }
        }

    }
}
</style>