import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  employees: [],
  checkedEmployees: [],
  formMode: "view",
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
