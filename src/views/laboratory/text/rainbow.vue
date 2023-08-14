<template>
    <span class="">RAINBOW</span>
</template>
<style lang="scss">
.rainbow {
    position: absolute;
    right: 0;
    -webkit-transform-style: preserve-3d;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;

    &:hover {
        -webkit-animation: a1 1.5s 1 alternate ease-in-out, maskedAnimation 4s infinite 1s ease-in-out;
    }

    /*设置元素保留3D位置*/
    /*设置动画*/
    -webkit-animation-fill-mode: forwards;
}

@keyframes a1 {

    /*创建动画*/
    0% {
        -webkit-transform: rotateY(0deg) rotateX(0deg);
    }

    50% {
        -webkit-transform: rotateY(180deg) rotateX(30deg);
    }

    100% {
        -webkit-transform: rotateY(360deg) rotateX(0deg);
    }
}

@keyframes maskedAnimation {
    0% {
        background-position: 0 0;
        background-image: -webkit-linear-gradient(left, skyblue, pink 25%, skyblue 50%, pink 75%, skyblue);
    }

    100% {
        background-position: -100% 0;
        background-image: -webkit-linear-gradient(left, skyblue, pink 25%, skyblue 50%, pink 75%, skyblue);

    }
}
</style>