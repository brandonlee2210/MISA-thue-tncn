import BaseService from "./BaseService.js";
import store from "@/store/index.js";

class EmployeeServiceClass extends BaseService {
  constructor() {
    super("Employees");
  }

  /**
   * lấy 1 code mới từ server
   * @author dgbao (25/08/2023)
   */
  async getNewCode() {
    const res = await this.baseAxios.get(this.endpoint("/getNewCode"));
    return res;
  }

  /**
   * lấy dữ liệu bằng phân trang và filter
   * @author dgbao (25/08/2023)
   */
  async filter() {
    const res = await this.baseAxios.post(
      this.endpoint(
        `/filter?pageSize=${store.state.employee.pageSize}&pageNumber=${store.state.employee.pageNumber}&filterKeyword=${store.state.employee.filterKeyword}`
      ),
      store.getters["employee/transformedFilterData"]
    );

    return res;
  }

  /**
   * Lấy dữ liệu tổng số nhân viên bao gồm không sử dụng và đang sử dụng dịch vụ
   * @author dgbao (25/08/2023)
   */
  async getSummary() {
    const res = await this.baseAxios.get(this.endpoint("/total-employee"));
    return res;
  }

  /**
   * xuất file excel
   * @author dgbao (25/08/2023)
   */
  async getExcel(data) {
    const res = await this.baseAxios.get(this.endpoint("/export"), {
      params: data,
      responseType: "blob",
    });

    return res;
  }
}

const EmployeeService = new EmployeeServiceClass();
export default EmployeeService;
