import { App } from 'vue'

import 'primevue/resources/themes/vela-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

export default (app: App<Element>) => {
  app.use(PrimeVue)
  app.component('p-button', Button)
}
