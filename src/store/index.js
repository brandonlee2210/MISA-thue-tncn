import Vue from "vue";
import Vuex from "vuex";
import chatModule from "./chat";
import employeeModule from "./employee";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat: chatModule,
    employee: employeeModule,
  },
});
