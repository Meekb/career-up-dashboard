import { createApp } from "vue"
import App from "./App.vue";
import { createPinia } from "pinia"
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "./assets/main.css"

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount("#app");
