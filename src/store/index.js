import Vue from "vue";
import Vuex from "vuex";
import employeeModule from "./employee";
import globalModule from "./global";
import relativeModule from "./relative";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employee: employeeModule,
    global: globalModule,
    relative: relativeModule,
  },
});
