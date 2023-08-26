import axios from "axios";

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
async function getEmployees() {
  try {
    const response = await axios.get("https://localhost:7037/api/v1/Employees");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

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
};
