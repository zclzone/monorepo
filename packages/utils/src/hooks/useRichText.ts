import type { App } from 'vue'

function toShadowDom(el: HTMLElement, htmlText: string, styleText = '') {
  const shadowRoot = el.attachShadow({ mode: 'closed' })
  shadowRoot.innerHTML = htmlText
  if (styleText) {
    // 给富文本添加样式
    const style = document.createElement('style')
    style.textContent = styleText
    shadowRoot.appendChild(style)
  }
}

const useRichText = {
  install: (app: App) => {
    app.directive('richText', {
      updated(el, binding) {
        let htmlText, styleText
        if(typeof binding.value === 'object') {
          htmlText = binding.value.htmlText
          styleText = binding.value.styleText
        } else {
          htmlText = binding.value
        }
        toShadowDom(el, htmlText, styleText)
      }
    })
  },
}

export default useRichText
