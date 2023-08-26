import { getEmployees, getNewCode } from "../../helpers/api";

const setFormMode = (context, mode) => {
  context.commit("SET_FORM_MODE", mode);
};

const setSelectedEmployees = (context, employees) => {
  console.log("addCheckedEmployees", employees);
  context.commit("SET_SELECTED_EMPLOYEES", employees);
};

const getListPerson = async (context) => {
  const employees = await getEmployees();
  context.commit("SET_EMPLOYEES", employees);
};

const getNewEmployeeCode = async (context) => {
  const code = await getNewCode();
  context.commit("SET_NEW_EMPLOYEE_CODE", code);
};

const setCurrentEmployeeId = async (context, id) => {
  context.commit("SET_CURRENT_EMPLOYEEID", id);
};

export default {
  setFormMode,
  setSelectedEmployees,
  getListPerson,
  getNewEmployeeCode,
  setCurrentEmployeeId,
};
