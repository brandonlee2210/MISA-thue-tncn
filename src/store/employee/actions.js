import EmployeeService from "@/service/EmployeeService";

const setFormMode = (context, mode) => {
  context.commit("SET_FORM_MODE", mode);
};

const setSelectedEmployees = (context, employees) => {
  console.log("addCheckedEmployees", employees);
  context.commit("SET_SELECTED_EMPLOYEES", employees);
};

const getListPerson = async (context) => {
  const employees = await EmployeeService.filter();
  context.commit("SET_EMPLOYEES", employees.data.Data);
};

const getListEmployees = async (context) => {
  const employees = await EmployeeService.get();
  context.commit("SET_EMPLOYEES", employees.data);
};

const getNewEmployeeCode = async (context) => {
  const newCode = await EmployeeService.getNewCode();
  context.commit("SET_NEW_EMPLOYEE_CODE", newCode);
};

const setCurrentEmployeeId = async (context, id) => {
  context.commit("SET_CURRENT_EMPLOYEEID", id);
};

const setFilterData = async (context, filterData) => {
  context.commit("SET_FILTER_DATA", filterData);
};

export default {
  setFormMode,
  setSelectedEmployees,
  getListPerson,
  getNewEmployeeCode,
  setCurrentEmployeeId,
  getListEmployees,
  setFilterData,
};
