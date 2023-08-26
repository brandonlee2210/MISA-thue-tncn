import { formatDate } from "@/helpers/utils";

const SET_SELECTED_EMPLOYEES = (state, employees) => {
  state.checkedEmployees = employees;
};

const SET_EMPLOYEES = (state, employees) => {
  // format lại ngày tháng năm sinh
  employees?.forEach((employee) => {
    employee.DateOfBirth = formatDate(employee.DateOfBirth);
  });
  state.employees = employees;
};

const SET_FORM_MODE = (state, mode) => {
  state.formMode = mode;
};

const SET_NEW_EMPLOYEE_CODE = (state, code) => {
  state.newEmployeeCode = code;
};

const SET_CURRENT_EMPLOYEEID = (state, id) => {
  state.currentEmployeeId = id;
};

export default {
  SET_FORM_MODE,
  SET_SELECTED_EMPLOYEES,
  SET_EMPLOYEES,
  SET_NEW_EMPLOYEE_CODE,
  SET_CURRENT_EMPLOYEEID,
};
