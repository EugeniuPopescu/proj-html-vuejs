import { createApp } from "vue";
import App from "./App.vue";

// importo bootstrap (js)
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faPlay, faFacebook, faInstagram, faTwitter, faArrowUp);

window.vue = {};
window.vue.App = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
