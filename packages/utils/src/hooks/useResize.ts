import type { App } from 'vue'

function useResize(el: HTMLElement, cb: Function) {
  const observer = new ResizeObserver((entries) => {
    cb(entries[0].contentRect)
  })
  observer.observe(el)
  return observer
}

const install = (app: App) => {
  let observer: ResizeObserver

  app.directive('resize', {
    mounted(el, binding) {
      observer = useResize(el, binding.value)
    },
    beforeUnmount() {
      observer?.disconnect()
    },
  })
}

useResize.install = install

export default useResize
