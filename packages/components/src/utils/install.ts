import { App } from 'vue'

export function setupInstall(component: any) {
  component.install = (app: App) => {
    app.component(component?.name, component)
  }
}
