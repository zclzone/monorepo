import type { App } from 'vue'

const useRichText = {
  install: (app: App) => {
    app.directive('richText', {
      mounted(el, binding) {
        const shadowRoot = el.attachShadow({ mode: 'closed' })
        const { htmlText, styleText } = binding.value
        shadowRoot.innerHTML = htmlText
        if (styleText) {
          // 给富文本添加样式
          const style = document.createElement('style')
          style.textContent = styleText
          shadowRoot.appendChild(style)
        }
      },
    })
  },
}

export default useRichText
