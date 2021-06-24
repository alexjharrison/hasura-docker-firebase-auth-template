import { createApp } from "vue";
import App from "./App.vue";
import urql from "@urql/vue";
import { urqlConfig } from "./urql";

createApp(App).use(urql, urqlConfig).mount("#app");