import type { App } from 'vue'

const map = new WeakMap()
function toShadowDom(el: HTMLElement, htmlText: string, styleText = '') {
  let shadowRoot
  if (map.get(el)) {
    shadowRoot = map.get(el)
  } else {
    shadowRoot = el.attachShadow({ mode: 'closed' })
    map.set(el, shadowRoot)
  }
  shadowRoot.innerHTML = htmlText
  if (styleText) {
    // 给富文本添加样式
    const style = document.createElement('style')
    style.textContent = styleText
    shadowRoot.appendChild(style)
  }
}

function handleBindingVal(binding: any) {
  let htmlText, styleText
  if (typeof binding.value === 'object') {
    htmlText = binding.value.htmlText
    styleText = binding.value.styleText
  } else {
    htmlText = binding.value
  }
  return { htmlText, styleText }
}

const useRichText = {
  install: (app: App) => {
    app.directive('richText', {
      mounted(el, binding) {
        const { htmlText, styleText } = handleBindingVal(binding)
        toShadowDom(el, htmlText, styleText)
      },
      updated(el, binding) {
        const { htmlText, styleText } = handleBindingVal(binding)
        toShadowDom(el, htmlText, styleText)
      },
    })
  },
}

export default useRichText
