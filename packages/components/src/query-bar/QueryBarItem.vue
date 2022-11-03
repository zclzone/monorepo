<template>
  <div flex items-center>
    <label v-if="!isNullOrWhitespace(label)" class="item-label" :style="{ width: labelWidth + 'px' }">
      {{ label }}
    </label>
    <div :style="{ width: contentWidth + 'px' }" class="item-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { isNullOrWhitespace } from '@zclzone/utils'

defineOptions({
  name: 'QsQueryBarItem',
})

defineProps({
  label: {
    type: String,
    default: '',
  },
  labelWidth: {
    type: Number,
    default: 80,
  },
  contentWidth: {
    type: Number,
    default: 220,
  },
})
</script>

<style lang="scss" scoped>
.qs_query-bar-item {
  display: flex;
  align-items: center;

  .item-label {
    width: 80px;
    flex-shrink: 0;
  }

  .item-content {
    flex-shrink: 0;
  }
}
</style>
