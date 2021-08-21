import { createApp } from 'vue'
import App from './App.vue'
import urql from '@urql/vue'
import { urqlConfig } from './plugins/urql'
import PrimeVueInit from './plugins/primevue'
import './assets/styles/styles.scss'
import 'primeflex/primeflex.css'
import router from './plugins/router'
import { useFirebase } from './plugins/firebase'

const app = createApp(App)
PrimeVueInit(app)
app.use(urql, urqlConfig)
app.use(router)

app.mount('#app')
