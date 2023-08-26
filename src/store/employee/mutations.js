import { formatDate } from "@/helpers/utils";

const SET_SELECTED_EMPLOYEES = (state, employees) => {
  state.checkedEmployees = employees;
};

const SET_EMPLOYEES = (state, employees) => {
  // format lại ngày tháng năm sinh
  employees?.forEach((employee) => {
    employee.DateOfBirth = formatDate(employee.DateOfBirth);
    employee.HireDate = formatDate(employee.HireDate);
    employee.ProbationDate = formatDate(employee.ProbationDate);
    employee.ReceiveDate = formatDate(employee.ReceiveDate);
    employee.ResignationDate = formatDate(employee.ResignationDate);
    employee.IdentityDate = formatDate(employee.IdentityDate);
  });
  state.employees = employees;
};

const SET_FILTER_DATA = (state, filterData) => {
  state.filterData = filterData;
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
  SET_FILTER_DATA,
};
