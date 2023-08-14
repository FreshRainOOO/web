<template>
  <div>
    {{ text }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  text: String,
  message: Number
})
const sonFn = () => { };//TODO:全局message提示
defineExpose({
  sonFn,
});
</script>