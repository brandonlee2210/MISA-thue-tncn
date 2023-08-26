import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  newEmployeeCode: "",
  employees: [],
  checkedEmployees: [],
  formMode: "add",
  currentEmployeeId: "",
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
