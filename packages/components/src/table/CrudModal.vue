<template>
  <n-modal v-model:show="show" :style="{ width }" preset="card" :title="title" size="huge" :bordered="false">
    <slot />
    <template v-if="showFooter" #footer>
      <footer style="display: flex; justify-content: end">
        <slot name="footer">
          <n-button @click="show = false">取消</n-button>
          <n-button :loading="loading" style="margin-left: 20px" type="primary" @click="emit('onSave')">保存</n-button>
        </slot>
      </footer>
    </template>
  </n-modal>
</template>

<script setup>
defineOptions({
  name: 'QsCrudModal',
})
const props = defineProps({
  width: {
    type: String,
    default: '600px',
  },
  title: {
    type: String,
    default: '',
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:visible', 'onSave'])
const show = computed({
  get() {
    return props.visible
  },
  set(v) {
    emit('update:visible', v)
  },
})
</script>
