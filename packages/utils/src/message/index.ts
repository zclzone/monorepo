import * as NaiveUI from 'naive-ui'

const { message } = NaiveUI.createDiscreteApi(['message'])

type ContentType = string | Array<string>

function setupMessage(NMessage: any) {
  class Message {
    showMessage(type: string, content: ContentType, option = {}) {
      if (Array.isArray(content)) {
        content.forEach((msg) => NMessage[type](msg, option))
      } else {
        NMessage[type](content, option)
      }
    }

    loading(content: ContentType) {
      this.showMessage('loading', content)
    }

    success(content: ContentType, option = {}) {
      this.showMessage('success', content, option)
    }

    error(content: ContentType, option = {}) {
      this.showMessage('error', content, option)
    }

    info(content: ContentType, option = {}) {
      this.showMessage('info', content, option)
    }

    warning(content: ContentType, option = {}) {
      this.showMessage('warning', content, option)
    }
  }

  return new Message()
}

export const $message = setupMessage(message)


