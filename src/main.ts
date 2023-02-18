import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
//any file that has .vue extension is a spcieal file type that is called
//vue component and vue can understand it but broswer cannot understand it
import router from "./router";

// import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

//vuetify registeration
import "vuetify/styles";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount("#app");
