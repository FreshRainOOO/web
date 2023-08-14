<template>
    <div class="blog">
        <div class="padd">
            <div v-for="item in list" :key="item" @click="goBlog(item)">{{ item }} </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import mdList from '@/markdowns/list'
import { useRouter, useRoute } from "vue-router";
import anime from 'animejs/lib/anime.js';
import { nextTick, onMounted, ref, toRefs, watch } from 'vue';
//主页做成瀑布流 https://www.php.cn/toutiao-448807.html
const props = defineProps({
    isInMenu: Boolean
})
const { isInMenu } = toRefs(props)
const myanime = ref()
const router = useRouter()
const route = useRoute()
const goBlog = (path: string) => {
    // console.log(path);
    let fullpathName = fullPathList.value.find((item) => item.key == path)?.fullpathName
    router.push(`/blog/${encodeURI(fullpathName)}`)
}

const getList = () => {
    let arr = [];
    let arr2 = []
    for (const path in mdList) {
        console.log('mdList',mdList);
        console.log('path',path);
        
        const pathName = path.split('/').pop()?.slice(0, -3); //将前缀与.md去除 只剩文件名
        const fullpathName = path.slice(2, -3); //只将/markdown/ 去除
        arr.push(pathName)
        arr2.push({ fullpathName: fullpathName, key: pathName })
    }
    return { pathList: arr, fullPathList: arr2 };
    return { pathList: arr, fullPathList: arr2 };
};
const list = ref<(string | undefined)[]>(getList().pathList)
const fullPathList = ref<{ fullpathName: string, key: string | undefined }[]>(getList().fullPathList)
watch(isInMenu, () => {
    isInMenu.value && myanime.value.play()
})

onMounted(() => {
    myanime.value = anime({
        targets: '.blog div',
        keyframes: [
            { opacity: 0 },
            { opacity: 1 },
        ],
        easing: "easeOutQuad",
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
    });
})
const play = () => {
    myanime.value.restart()
}
</script>
<style  lang="scss" scoped>
.blog {

    .padd {
        box-sizing: border-box;
        padding: 0px 20px;
        display: flex;
        flex-wrap: wrap;

        >div {
            padding: 5px 0px;
            width: 50%;
            display: inline-block;
            color: #fff;
            font-size: 25px;
            opacity: 0;
            cursor: pointer;
            height: 38px;

            &:hover {
                // border-bottom: 1px solid #fff;
                transform: translateX(20px);
                transition: 0.5s ease-out;

                &::after {
                    content: '(⑉･-･⑉)☞';
                    margin-left: 20px;
                }
            }
        }
    }


}
</style>