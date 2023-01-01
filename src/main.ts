import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
//any file that has .vue extension is a spcieal file time that is called
//vue component and vue can understand it but broswer cannot understand it
import router from "./router";

// import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
 