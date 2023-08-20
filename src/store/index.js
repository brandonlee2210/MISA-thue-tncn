import Vue from "vue";
import Vuex from "vuex";
import employeeModule from "./employee";
import globalModule from "./global";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employee: employeeModule,
    global: globalModule,
  },
});
