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
  pageSize: 15,
  pageNumber: 1,
  filterKeyword: "",
  totalPage: 1,
  totalRecord: 15,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
