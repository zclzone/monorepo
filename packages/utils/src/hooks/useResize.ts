import type {App} from 'vue'

function useResize(el:HTMLElement, cb: Function) {
  const resize = new ResizeObserver((entries) => {
    cb(entries[0].contentRect)
  })
  resize.observe(el)
}

const install = (app: App) => {
  app.directive('resize', {
    mounted(el, binding) {
      useResize(el, binding.value)
    }
  })
}

useResize.install = install

export default useResize