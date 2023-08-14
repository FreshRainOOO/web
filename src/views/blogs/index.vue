<template>
    <div id="bolgText" class="bolg">
        <ul v-if="tocList?.length > 0" class="toc glass">
            <li v-for="item in tocList" :class="`${item.tagClass} ${item.checked && 'checked'}`"
                @click="scollTo(item.scollTop)">
                {{ item.content }}
            </li>
        </ul>
        <!-- <router-link to="/">home</router-link> -->
        <div v-highlight v-html="mdref" class="md glass" @click="(e) => copy(e)"></div>
        <div style="width:15%"></div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref, defineAsyncComponent, watch, onUpdated, onActivated, nextTick, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import mdFiles from "@/markdowns/list";
import Message from '@/components/Message/index'
type Toc = {
    tagClass: string,//标签名
    scollTop: number,//距离顶部距离
    content: string //内容
    checked?: boolean //是否选中
}
const mdref = ref()
const tocList = ref<Toc[]>()
const route = useRoute()
const router = useRouter()
const scollTo = (top: number) => {
    window.scrollTo({
        top,  // y 坐标
        behavior: 'smooth' // 可选值：smooth、instant、auto
    })
}
const copy = (e: { target: HTMLElement }) => {
    console.log(e.target);

    if (e.target?.tagName == 'PRE') {
        navigator.clipboard.writeText(e.target?.innerText).then(() => {
            Message({ str: '复制成功', type: 'success' })
        })
    }
}
const renderToc = async () => {
    const { html } = await mdFiles[`./${String(route.name)}.md`]()
    mdref.value = html
    await nextTick() //拿到最新的dom
    const all_headings = document.querySelectorAll('#bolgText h1,#bolgText h2,#bolgText h3')
    let aa: Toc[] = []
    all_headings.forEach((item, index) => { //不支持map
        aa.push({
            scollTop: index == 0 ? 0 : item.getBoundingClientRect().top,
            tagClass: `${item.tagName}Class`,
            content: item.textContent as string
        })
    })
    aa[0] && (aa[0].checked = true)
    tocList.value = aa
}
const windowScroll = () => {
    let aa = tocList.value?.map((item, index) => {
        if (window.scrollY >= item.scollTop && window.scrollY < tocList.value[index + 1].scollTop) {
            return { ...item, checked: true }
            // index > 1 && (tocList[index - 1]?.checked = false)
        } else {
            return { ...item, checked: false }
        }
    })
    tocList.value = aa
}
onMounted(async () => {
    await renderToc()
    window.addEventListener('scroll', windowScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', windowScroll)
})


</script>
<style lang="scss" >
.bolg {
    display: flex;
    justify-content: center;
    align-items: flex-start; //必须设置,否则ul的高度为页面高度,sticky不生效
    // background-image: url('@/assets/images/VCG.webp');
    background-image: linear-gradient(to bottom right,
            #91defe,
            #99c0f9,
            #bdb6ec,
            #d7b3e3,
            #efb3d5,
            #f9bccc);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 100vh;

    .glass {
        padding: 20px;
        background: rgba(255, 255, 255, 0.2);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        border-radius: 25px;
        box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    }

    .toc {
        position: sticky;
        top: 20px;
        box-sizing: border-box;
        list-style: none;
        margin-right: 20px;
        width: 15%;

        li {
            margin-top: 10px;
            cursor: pointer;
            // width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            color: #fff;
        }

        .checked {
            text-shadow: #fff 0px 0px 20px;
            position: relative;

            &::before {
                content: '';
                display: inline-block;
                width: 2px;
                height: 10px;
                margin-right: 5px;
                background-color: aquamarine;
            }
        }

        .H2Class {
            box-sizing: border-box;
            padding-left: 12px;
        }

        .H2Class {
            box-sizing: border-box;
            padding-left: 24px;
        }

        .H3Class {
            box-sizing: border-box;
            padding-left: 36px;
        }
    }

    .md {
        font-size: 16px;
        width: 60%;
        margin-top: 20px;

        h1 {
            margin: 20px 0;
        }

        h2 {
            margin: 10px 0;
        }

        h3 {
            margin: 10px 0;
        }
    }

    pre {
        position: relative;
        box-sizing: border-box;
        padding-top: 20px;
        background-color: #f6f6f6;
        border-radius: 10px;
        margin-bottom: 10px;
        overflow: auto;
        pointer-events: none;

        code {
            border-radius: 10px;
            pointer-events: none;
        }

        &:after {
            content: "复制";
            cursor: pointer;
            pointer-events: auto;
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            padding: 10px;
        }


    }

}
</style>