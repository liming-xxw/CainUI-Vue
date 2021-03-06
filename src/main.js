import { createApp } from "vue";
import App from "./App.vue";
import CainUI from "./plugins/index.js";
// import { Button } from './plugins/index.js' 
// import { Button,Header,Container } from './plugins/index.js'

createApp(App)
  .use(CainUI)
  .mount("#app");
