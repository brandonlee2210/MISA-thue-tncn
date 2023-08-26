import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  newEmployeeCode: "",
  employees: [],
  checkedEmployees: [],
  formMode: "add",
  currentEmployeeId: "",
  filterData: {
    FilterWorkStatus: null,
    FilterEmployeeTypeID: null,
    FilterUsageStatus: null,
    FilterHasTaxCode: null,
    HireDateStart: null,
    HireDateEnd: null,
    ReceiveDateStart: null,
    ReceiveDateEnd: null,
  },
  pageSize: 10,
  pageNumber: 1,
  filterKeyword: "",
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
