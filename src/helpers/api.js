import axios from "axios";

/**
 * Thêm mới nhân viên
 * @param {*} employee
 */
async function addNewEmployee(employee) {
  try {
    const response = await axios.post(
      "https://localhost:7037/api/v1/Employees",
      employee
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Api lấy danh sách các nhân viên
 * CreatedBy: dgbao (24/08/2023)
 */
async function getEmployees(pageSize, pageNumber, filter) {
  try {
    const response = await axios.post(
      `https://localhost:7037/api/v1/Employees/filter?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      filter
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Lấy thông tin nhân viên theo id
 * @param {*} id
 * Created by: dgbao (24/08/2023)
 */
async function getEmployeeById(id) {
  try {
    const response = await axios.get(
      `https://localhost:7037/api/v1/Employees/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Api lấy mã nhân viên mới
 * @returns Mã nhân viên mới
 * CreatedBy: dgbao (24/08/2023)
 * */
async function getNewCode() {
  try {
    const response = await axios.get(
      "https://localhost:7037/api/v1/Employees/getNewCode"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Api lấy tổng số nhân viên đang sử dụng dịch vụ và không sử dụng dịch vụ
 */
async function getTotalEmployeeSummary() {
  await axios.get("https://youtube.com");
  throw new Error("Network Error");
}

/**
 * Api xóa nhân viên theo id
 * @param {string} id Id nhân viên
 * @returns Kết quả xóa nhân viên
 * CreatedBy: dgbao (24/08/2023)
 * */
async function deleteEmployee(id) {
  try {
    const response = await axios.delete(
      `https://localhost:7037/api/v1/Employees/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Api xóa nhiều nhân viên
 * @param {array} employees
 * @returns Kết quả xóa nhiều nhân viên
 * CreatedBy: dgbao (24/08/2023)
 */
async function deleteManyEmployees(employeesId) {
  try {
    const response = await axios.delete(
      `https://localhost:7037/api/v1/Employees`,
      { data: employeesId }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export {
  getEmployees,
  getNewCode,
  getEmployeeById,
  deleteEmployee,
  deleteManyEmployees,
  addNewEmployee,
  getTotalEmployeeSummary,
};
