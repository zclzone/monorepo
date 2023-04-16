function useResize(el, cb) {
  const resize = new ResizeObserver((entries) => {
    cb(entries[0]?.contentRect) 
  })
  resize(el)
}

const install = (app) => {
  app.directive('resize', {
    mounted(el, binding) {
      useResize(el, binding.value)
    }
  })
}