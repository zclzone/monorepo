<template>
  <div min-h-60 p-15 flex items-start justify-between border="1 solid #ccc" rounded-8 bg="#fafafc" dark:bg-black>
    <n-space wrap :size="[35, 15]">
      <slot />
    </n-space>

    <div flex-shrink-0>
      <n-button secondary type="primary" @click="emit('reset')">重置</n-button>
      <n-button ml-20 type="primary" @click="emit('search')">搜索</n-button>
    </div>
  </div>
</template>

<script setup>
import { NSpace, NButton } from 'naive-ui'
const emit = defineEmits(['search', 'reset'])
</script>
