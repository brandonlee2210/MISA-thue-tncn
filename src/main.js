import "devextreme/dist/css/dx.light.css";

import Vue from "vue";

import MLoading from "./components/base/loading-dialog/MLoading.vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("m-loading", MLoading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
