<script setup>
function onResize(o) {
  console.log(o)
}
</script>

<template>
  <div class="flex wh-full f-c-c">
    <div v-resize="onResize" ref="$resizeRef" class="w-200 h-200 resize b-1 bc-ccc overflow-hidden">测试useResize</div>
  </div>
</template>
