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

const SET_POPUP_FORM_MODE = (state, mode) => {
  state.popupFormMode = mode;
};

const SET_NEW_EMPLOYEE_CODE = (state, code) => {
  state.newEmployeeCode = code;
};

const SET_CURRENT_EMPLOYEEID = (state, id) => {
  state.currentEmployeeId = id;
};

const SET_PAGESIZE = (state, pageSize) => {
  state.pageSize = pageSize;
};

const SET_PAGENUMBER = (state, pageNumber) => {
  state.pageNumber = pageNumber;
};

const SET_FILTER_KEYWORD = (state, filterKeyword) => {
  state.filterKeyword = filterKeyword;
};

const SET_TOTAL_PAGE = (state, totalPage) => {
  state.totalPage = totalPage;
};

const SET_TOTAL_RECORD = (state, totalRecord) => {
  state.totalRecord = totalRecord;
};

const SET_FILTER_DATA_PROPERTY = (state, filterData) => {
  // set lại giá trị cho từng thuộc tính của filterData
  for (const key in filterData) {
    if (Object.hasOwnProperty.call(state.filterData, key)) {
      state.filterData[key] = filterData[key];
    }
  }
};

const SET_START_DATE = (state, startDate) => {
  state.startFilterDate = startDate;
};

const SET_END_DATE = (state, endDate) => {
  state.endFilterDate = endDate;
};

const SET_USAGE_STATUS = (state, usageStatus) => {
  state.usageStatus = usageStatus;
};

export default {
  SET_FORM_MODE,
  SET_POPUP_FORM_MODE,
  SET_SELECTED_EMPLOYEES,
  SET_EMPLOYEES,
  SET_NEW_EMPLOYEE_CODE,
  SET_CURRENT_EMPLOYEEID,
  SET_FILTER_DATA,
  SET_PAGESIZE,
  SET_PAGENUMBER,
  SET_FILTER_KEYWORD,
  SET_FILTER_DATA_PROPERTY,
  SET_TOTAL_PAGE,
  SET_TOTAL_RECORD,
  SET_START_DATE,
  SET_END_DATE,
  SET_USAGE_STATUS,
};
