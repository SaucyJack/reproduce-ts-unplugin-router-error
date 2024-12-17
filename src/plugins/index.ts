import vuetify from '@/plugins/vuetify'
import router from '@/router'
import { createPinia } from 'pinia'

import type { App } from 'vue'

export function registerPlugins(app: App) {
  const pinia = createPinia()
  app.use(vuetify).use(pinia).use(router)
}
