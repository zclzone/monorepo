<template>
  <div class="qs_query-bar">
    <n-space wrap :size="[35, 15]">
      <slot />
    </n-space>

    <div style="flex-shrink: 0">
      <n-button secondary type="primary" @click="emit('reset')">重置</n-button>
      <n-button ml-20 type="primary" @click="emit('search')">搜索</n-button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'QsQueryBar',
})
const emit = defineEmits(['search', 'reset'])
</script>

<style scoped lang="scss">
.qs_query-bar {
  min-height: 60px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafc;
}
</style>
