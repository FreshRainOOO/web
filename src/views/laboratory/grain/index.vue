<template>
    <div class='index_page'>
        <div class='canvas_wrapper' ref='wrapper'></div>
        <ul class='list'>
            <li v-for="val in Models" :key="val.name" @click="log(val.name)">{{ val.name }}</li>
        </ul>
        <!-- <ul class='function_list'>
            <li @Click="() => MainParticle?.ListenMouseMove()">ListenMouseMove</li>
            <li @Click="() => MainParticle?.StopListenMouseMove()">StopListenMouseMove</li>
            <li @Click="() => MainParticle?.AlignCameraCenter()">AlignCameraCenter</li>
            <li @Click="() => MainParticle?.AlignCameraCenter(true)">AlignCameraCenter(immediately)</li>
        </ul> -->
    </div>
</template>
<script lang="ts" setup>
//https://gitee.com/shiinafan/Up2017-Particles-Effect-Template
import { onBeforeUpdate, onMounted, ref } from 'vue'
import ParticleSystem from '@/THREE/index'
import AtmosphereParticle from '@/THREE/atmosphere'
import { ParticleModelProps } from '@/THREE/declare'
import Tween from '@tweenjs/tween.js'
import GetFlatGeometry from '@/utils/GetFlatGeometry'
import { BufferGeometry, Float32BufferAttribute } from 'three'
import VerticesDuplicateRemove from '@/utils/VerticesDuplicateRemove'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const wrapper = ref<HTMLDivElement | null>(null)
let MainParticle: ParticleSystem | null = null
const log = (name) => {
    MainParticle?.ChangeModel(name)
}
const TurnBasicNum = { firefly: 0.002 }
const al = 1500

const tween2 = new Tween.Tween(TurnBasicNum).easing(Tween.Easing.Exponential.In)
const tween1 = new Tween.Tween(TurnBasicNum).easing(Tween.Easing.Exponential.In)

const Atomsphere1 = new AtmosphereParticle({
    longestDistance: al,
    particleSum: 500,
    renderUpdate: (Point) => {
        Point.rotation.x -= TurnBasicNum.firefly
    },
    callback: (Point) => {
        Point.position.z = -1 * al
    },
    onChangeModel: () => {
        tween2.stop()
        tween1.stop().to({ firefly: 0.04 }, 1500).chain(tween2)
        tween2.to({ firefly: 0.002 }, 1500)
        tween1.start()
    }
})
const Atomsphere2 = new AtmosphereParticle({
    longestDistance: al,
    particleSum: 500,
    renderUpdate: (Point) => {
        Point.rotation.y += TurnBasicNum.firefly
    },
    callback: (Point) => {
        Point.position.y = -0.2 * al
        Point.position.z = -1 * al
    }
})
const Atomsphere3 = new AtmosphereParticle({
    longestDistance: al,
    particleSum: 500,
    renderUpdate: (Point) => {
        Point.rotation.z += TurnBasicNum.firefly / 2
    },
    callback: (Point) => {
        Point.position.z = -1.2 * al
    }
})

const scaleNum = 600
let Q = 0
const Models: ParticleModelProps[] = [
    {
        name: 'cube',
        path: new URL('../../../THREE/models/examples/cube.fbx', import.meta.url).href,
        onLoadComplete(Geometry) {
            const s = 400
            Geometry.scale(s, s, s)
        },
        loader: {
            loaderInstance: new FBXLoader(),
            load(group) {
                const g = new BufferGeometry()
                console.log(group)
                let arr = new Float32Array([])
                for (const i of group.children) {
                    arr = new Float32Array([...arr, ...i.geometry.attributes.position.array])
                }
                g.setAttribute('position', new Float32BufferAttribute(VerticesDuplicateRemove(arr), 3))
                return g
            }
        }
    },
    {
        name: 'ball',
        path: new URL('../../../THREE/models/examples/ball.obj', import.meta.url).href,
        onLoadComplete(Geometry) {
            Geometry.scale(scaleNum, scaleNum, scaleNum)
            Geometry.translate(-600, 0, -100)
        },
        onEnterStart(PointGeometry) {
            console.log('ball enter start')
        },
        onEnterEnd(PointGeometry) {
            console.log('ball enter end')
        }
    },
    {
        name: 'wave',
        geometry: GetFlatGeometry(),
        onAnimationFrameUpdate(PerfromPoint, TweenList, Geometry) {
            const p = PerfromPoint.geometry.getAttribute('position')
            TweenList.forEach((val, i) => {
                if (val.isPlaying === false) {
                    p.setY(i, Math.sin((i + 1 + Q) * 0.3) * 50 + Math.sin((i + Q) * 0.5) * 50 - 500)
                }
            })
            Q += 0.08
            return true
        }
    },
    {
        name: 'cone',
        path: new URL('../../../THREE/models/examples/cone.obj', import.meta.url).href,
        onLoadComplete(Geometry) {
            Geometry.scale(scaleNum, scaleNum, scaleNum)
            Geometry.translate(600, 100, -100)
        }
    }
]
// @ts-expect-error
window.changeModel = (name: string) => {
    if (MainParticle != null) {
        MainParticle.ChangeModel(name)
    }
}
onMounted(() => {
    console.log(wrapper);

    if ((MainParticle == null) && wrapper.value != null) {
        MainParticle = new ParticleSystem({
            CanvasWrapper: wrapper.value,
            Models,
            addons: [Atomsphere1, Atomsphere2, Atomsphere3],
            onModelsFinishedLoad: (point) => {
                MainParticle?.ListenMouseMove()
            }
        })
    }
})


</script>
<style lang="scss">
.index_page {
    width: 100%;
    height: 100%;
}

.canvas_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.list,
.function_list {
    position: fixed;
    right: .6rem;
    top: 50%;
    width: fit-content;
    transform: translateY(-50%);

    li {
        width: fit-content;
        color: #fff;
        font-size: .4rem;
        cursor: pointer;
        opacity: .8;

        &:hover {
            opacity: 1;
        }
    }
}

.list {
    right: .6rem;

}

.function_list {
    left: .6rem;
}
</style>