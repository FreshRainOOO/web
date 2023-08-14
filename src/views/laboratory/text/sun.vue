<template>
    <span class="sun">SUN</span>
</template>
<style lang="scss">
.sun {
    color: #ff905b;

    &:hover {
        -webkit-animation: shining 0.5s alternate infinite;
        animation: bb 2s 1 alternate ease-in-out, shining 0.5s alternate 2s infinite;
        -webkit-animation: bb 2s 1 alternate ease-in-out, shining 0.5s alternate 2s infinite;
    }
}

@-webkit-keyframes bb {
    from {
        text-shadow: 0 0 10px #ff905b, 0 0 20px #ff905b, 0 0 30px #ff905b, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;
    }
    
    to {
        text-shadow: 0 0 5px red, 0 0 10px red, 0 0 15px red, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;
    }
}

@-webkit-keyframes shining {
    from {
        text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;
    }

    to {
        text-shadow: 0 0 5px red, 0 0 10px red, 0 0 15px red, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;
    }
}
</style>