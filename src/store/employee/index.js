import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  newEmployeeCode: "",
  selectedRows: [],
  employees: [],
  checkedEmployees: [],
  formMode: "add",
  popupFormMode: "add",
  currentEmployeeId: "",
  filterData: {
    FilterWorkStatus: null,
    FilterEmployeeTypeID: null,
    FilterUsageStatus: null,
    FilterHasTaxCode: null,
    FilterDate: null,
  },
  startFilterDate: null,
  endFilterDate: null,
  pageSize: 15,
  pageNumber: 1,
  filterKeyword: "",
  totalPage: 1,
  totalRecord: 15,
  summary: {},
  // filter trạng thái sử dụng dịch vụ trong employee manager
  usageStatus: null,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
