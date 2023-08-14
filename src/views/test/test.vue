<template>
    <div @click="ooo">
        <span v-tooltip.right="'left'">hover</span>
    </div>
</template>
<script setup lang="ts">
import Message from '@/components/Message/index'
const ooo = () => {
    Message({ type: "success", str: "复制成功" })
}
</script>
<style scoped lang="scss"></style>