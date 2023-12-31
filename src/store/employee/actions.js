import EmployeeService from "@/service/EmployeeService";
import { USAGE_STATUS } from "@/helpers/enums";

/**
 * set form mode là 1 trong ba lựa chọn: add, edit, view
 * @param {*} context
 * @param {*} mode
 * @author dgbao (25/08/2023)
 */
const setFormMode = (context, mode) => {
  context.commit("SET_FORM_MODE", mode);
};

/**
 *  set popup form mode là 1 trong ba lựa chọn: add, edit
 * @param {*} context
 * @param {*} mode
 */
const setPopupFormMode = (context, mode) => {
  context.commit("SET_POPUP_FORM_MODE", mode);
};

/**
 * set những nhân viên được chọn vào danh sách những nhân viên được chọn trong store
 * @param {*} context
 * @param {*} employees
 * @author dgbao (25/08/2023)
 */
const setSelectedEmployees = (context, employees) => {
  context.commit("SET_SELECTED_EMPLOYEES", employees);
};

/**
 * Lấy danh sách nhân viên đang sử dụng dịch vụ
 * @param {*} context
 * @author dgbao (25/08/2023)
 */
const getListPerson = async (context) => {
  // Lọc những nhân viên đang sử dụng dịch vụ
  context.commit("SET_FILTER_DATA_PROPERTY", {
    FilterUsageStatus: USAGE_STATUS.ACTIVE,
  });
  const response = await EmployeeService.filter();
  let employees = response?.data?.Data;
  context.commit("SET_TOTAL_PAGE", response?.data.TotalPage);
  context.commit("SET_TOTAL_RECORD", response?.data.TotalRecord);
  context.commit("SET_EMPLOYEES", employees);
};

/**
 * Lấy tất cả danh sách nhân viên bao gồm cả những nhân viên đang và không sử dụng dịch vụ
 * @param {*} context
 * @author dgbao (25/08/2023)
 */
const getListEmployees = async (context) => {
  // Bỏ lọc những nhân viên đang sử dụng dịch vụ
  // context.commit("SET_FILTER_DATA_PROPERTY", { FilterUsageStatus: null });

  const employees = await EmployeeService.filter();
  context.commit("SET_EMPLOYEES", employees.data.Data);
  context.commit("SET_TOTAL_RECORD", employees.data.TotalRecord);
  context.commit("SET_TOTAL_PAGE", employees.data.TotalPage);
};

/**
 * Lấy mã nhân viên mới nhất
 * @param {*} context
 * @author dgbao (25/08/2023)
 */
const getNewEmployeeCode = async (context) => {
  const newCode = await EmployeeService.getNewCode();
  context.commit("SET_NEW_EMPLOYEE_CODE", newCode);
};

/**
 * Set id nhân viên hiện tại
 * @param {*} context
 * @param {*} id
 * @author dgbao (25/08/2023)
 */
const setCurrentEmployeeId = async (context, id) => {
  context.commit("SET_CURRENT_EMPLOYEEID", id);
};

/**
 * Set dữ liệu lọc
 * @param {*} context
 * @param {*} filterData
 * @author dgbao (25/08/2023)
 */
const setFilterData = async (context, filterData) => {
  context.commit("SET_FILTER_DATA_PROPERTY", filterData);
};

/**
 * Set số lượng bản ghi trên 1 trang
 * @param {*} context
 * @param {*} pageSize
 * @author dgbao (25/08/2023  )
 */
const setPageSize = async (context, pageSize) => {
  context.commit("SET_PAGESIZE", pageSize);
};

/**
 *  Set số trang hiện tại
 * @param {*} context
 * @param {*} pageNumber
 * @author dgbao (25/08/2023)
 */
const setPageNumber = async (context, pageNumber) => {
  context.commit("SET_PAGENUMBER", pageNumber);
};

/**
 * Set từ khóa tìm kiếm
 * @param {*} context
 * @param {*} filterKeyword
 * @author dgbao (25/08/2023)
 */
const setFilterKeyword = async (context, filterKeyword) => {
  context.commit("SET_FILTER_KEYWORD", filterKeyword);
};

/**
 * Set dữ liệu lọc theo từng thuộc tính
 * @param {*} context
 * @param {*} filterData
 * @author dgbao (25/08/2023)
 */
const setFilterDataProp = async (context, filterData) => {
  context.commit("SET_FILTER_DATA_PROP", filterData);
};

/**
 *  Set ngày bắt đầu
 * @param {*} context
 * @param {*} startDate
 * @author dgbao (25/08/2023)
 */
const setStartDate = (context, startDate) => {
  context.commit("SET_START_DATE", startDate);
};

/**
 *  Set ngày kết thúc
 * @param {*} context
 * @param {*} endDate
 * @author dgbao (25/08/2023)
 */
const setEndDate = (context, endDate) => {
  context.commit("SET_END_DATE", endDate);
};

/**
 *  Set filter trạng thái sử dụng dịch vụ
 * @param {*} context
 * @param {*} usageStatus
 * @author dgbao (25/08/2023)
 */
const setUsageStatus = (context, usageStatus) => {
  context.commit("SET_USAGE_STATUS", usageStatus);
};

/**
 *  Set danh sách các dòng được chọn
 * @param {*} context
 * @param {*} selectedRows
 * @author dgbao (25/08/2023)
 */
const setSelectedRows = (context, selectedRows) => {
  context.commit("SET_SELECTED_ROWS", selectedRows);
};

/**
 *  set thông tin tổng số lao động đang và không sử dụng dịch vụ
 * @param {*} context
 * @param {*} summary
 * @author dgbao (25/08/2023)
 */
const setSummary = async (context) => {
  const response = await EmployeeService.getSummary();
  context.commit("SET_SUMMARY", response.data);
};

/**
 *  Set lại tổng số bàn ghi trên grid
 * @param {*} context
 * @param {*} totalRecord
 * @author dgbao (25/08/2023)
 */
const setTotalRecord = (context, totalRecord) => {
  context.commit("SET_TOTAL_RECORD", totalRecord);
};

const setTableRef = (context, tableRef) => {
  context.commit("SET_TABLE_REF", tableRef);
};

export default {
  setTotalRecord,
  setFormMode,
  setPopupFormMode,
  setSelectedEmployees,
  getListPerson,
  getNewEmployeeCode,
  setCurrentEmployeeId,
  getListEmployees,
  setFilterData,
  setPageSize,
  setPageNumber,
  setFilterKeyword,
  setFilterDataProp,
  setStartDate,
  setEndDate,
  setUsageStatus,
  setSelectedRows,
  setSummary,
  setTableRef,
};
