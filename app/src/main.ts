import { createApp } from 'vue'
import App from './App.vue'
import urql from '@urql/vue'
import { urqlConfig } from './plugins/urql'

createApp(App).use(urql, urqlConfig).mount('#app')
