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
 * @author dgbao (24/08/2023)
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

const exportData = [
  {
    SheetName: "Thông tin nhân viên",
    SheetKey: "Employee",
    SheetTitle: "DANH SÁCH XUẤT KHẨU THÔNG TIN CỦA NGƯỜI NỘP THUẾ ",
    ColumnGroups: [
      {
        Title: "Thông tin công việc của đối tượng nhân viên",
        StartColumn: 15,
        EndColumn: 19,
        BackgroundColor: "#F1D2D5",
      },
      {
        Title: "Hộ khẩu thường trú",
        StartColumn: 20,
        EndColumn: 24,
        BackgroundColor: "#FFFFA6",
      },
      {
        Title: "Chỗ ở hiện nay",
        StartColumn: 25,
        EndColumn: 29,
        BackgroundColor: "#D7FED0",
      },
    ],
    Columns: [
      {
        DataField: "EmployeeTypeID",
        Caption: "Loại đối tượng",
        Index: 1,
        Width: 100,
      },
      {
        DataField: "EmployeeCode",
        Caption: "Mã người nộp thuế",
        Index: 2,
        Width: 200,
      },
      {
        DataField: "DepartmentName",
        Caption: "Tên phòng ban",
        Index: 3,
        Width: 200,
      },
      {
        DataField: "TaxCode",
        Caption: "Mã số thuế",
        Index: 4,
        Width: 200,
      },
      {
        DataField: "FullName",
        Caption: "Họ và tên",
        Index: 5,
        Width: 200,
      },
      {
        DataField: "IdentityNumber",
        Caption: "Số CMND/CCCD/Hộ chiếu",
        Index: 6,
        Width: 200,
      },
      {
        DataField: "IdentityDate",
        Caption: "Ngày cấp",
        Alignment: "center",
        Index: 7,
        Width: 200,
      },
      {
        DataField: "IdentityPlace",
        Caption: "Nơi cấp",
        Index: 8,
        Width: 200,
      },
      {
        DataField: "DateOfBirth",
        Caption: "Ngày sinh",
        Alignment: "center",
        Index: 9,
        Width: 200,
      },
      {
        DataField: "GenderName",
        Caption: "Giới tính",
        Index: 10,
        Width: 100,
      },
      {
        DataField: "NationalityName",
        Caption: "Quốc tịch",
        Index: 11,
        Width: 100,
      },
      {
        DataField: "ContractTypeName",
        Caption: "Loại hợp đồng",
        Index: 12,
        Width: 100,
      },
      {
        DataField: "PhoneNumber",
        Caption: "Điện thoại",
        Index: 12,
        Width: 100,
      },
      {
        DataField: "Email",
        Caption: "Email",
        Index: 13,
        Width: 200,
      },
      {
        DataField: "WorkStatusName",
        Caption: "Trạng thái",
        Index: 14,
        Width: 100,
        HeaderBackground: "#D7FED0",
      },
      {
        DataField: "JobPositionName",
        Caption: "Mã vị trí công việc",
        Index: 15,
        Width: 200,
        HeaderBackground: "#F1D2D5",
      },
      {
        DataField: "ProbationDate",
        Caption: "Ngày học việc",
        Index: 16,
        Alignment: "center",
        Width: 100,
        HeaderBackground: "#F1D2D5",
      },
      {
        DataField: "HireDate",
        Caption: "Ngày thử việc",
        Index: 17,
        Alignment: "center",
        Width: 100,
        HeaderBackground: "#F1D2D5",
      },
      {
        DataField: "ReceiveDate",
        Caption: "Ngày chính thức",
        Index: 18,
        Alignment: "center",
        Width: 100,
        HeaderBackground: "#F1D2D5",
      },
      {
        DataField: "ResignationDate",
        Caption: "Ngày nghỉ việc",
        Index: 19,
        Alignment: "center",
        Width: 100,
        HeaderBackground: "#F1D2D5",
      },
      {
        DataField: "NativeCountryName",
        Caption: "Quốc gia (HKTT)",
        Index: 20,
        Width: 140,
        HeaderBackground: "#FFFFA6",
      },
      {
        DataField: "NativeProvinceName",
        Caption: "Tỉnh/TP (HKTT)",
        Index: 21,
        Width: 140,
        HeaderBackground: "#FFFFA6",
      },
      {
        DataField: "NativeDistrictName",
        Caption: "Quận/Huyện (HKTT)",
        Index: 22,
        Width: 140,
        HeaderBackground: "#FFFFA6",
      },
      {
        DataField: "NativeWardName",
        Caption: "Phường/Xã (HKTT)",
        Index: 23,
        Width: 140,
        HeaderBackground: "#FFFFA6",
      },
      {
        DataField: "NativeAddress",
        Caption: "Số nhà/Đường phố (HKTT)",
        Index: 24,
        Width: 220,
        HeaderBackground: "#FFFFA6",
      },
      {
        DataField: "CurrentCountryName",
        Caption: "Quốc gia (COHT)",
        Index: 25,
        Width: 100,
        HeaderBackground: "#D7FED0",
      },
      {
        DataField: "CurrentProvinceName",
        Caption: "TỉnhTP (COHT)",
        Index: 26,
        Width: 100,
        HeaderBackground: "#D7FED0",
      },
      {
        DataField: "CurrentDistrictName",
        Caption: "Quận/Huyện (COHT)",
        Index: 27,
        Width: 100,
        HeaderBackground: "#D7FED0",
      },
      {
        DataField: "CurrentWardName",
        Caption: "Phường/Xã (COHT)",
        Index: 28,
        Width: 100,
        HeaderBackground: "#D7FED0",
      },
      {
        DataField: "CurrentAddress",
        Caption: "Số nhà/Đường phố (COHT)",
        Index: 29,
        Width: 220,
        HeaderBackground: "#D7FED0",
      },
    ],
  },
  {
    SheetName: "Thông tin gia đình",
    SheetKey: "Relative",
    SheetTitle: "DANH SÁCH XUẤT KHẨU THÔNG TIN GIA ĐÌNH",
    ColumnGroups: [
      {
        Title: "Hộ khẩu thường trú",
        StartColumn: 1,
        EndColumn: 3,
        BackgroundColor: "#e4e4e4",
      },
      {
        Title: "Chỗ ở hiện nay",
        StartColumn: 1,
        EndColumn: 3,
        BackgroundColor: "#e4e4e4",
      },
      {
        Title: "Thông tin khai sinh",
        StartColumn: 1,
        EndColumn: 3,
        BackgroundColor: "#e4e4e4",
      },
      {
        Title: "Thông tin giảm trừ",
        StartColumn: 1,
        EndColumn: 3,
        BackgroundColor: "#e4e4e4",
      },
    ],
    Columns: [
      {
        DataField: "EmployeeCode",
        Caption: "Mã người nộp thuế trên sheet Thông tin người nộp thuế",
        Index: 1,
        Width: 200,
      },
      {
        DataField: "FullName",
        Caption: "Họ và tên thành viên",
        Alignment: "center",
        Index: 2,
        Width: 200,
      },
      {
        DataField: "RelationshipName",
        Caption: "Tên mối quan hệ",
        Alignment: "center",
        Index: 3,
        Width: 200,
      },
      {
        DataField: "TaxCode",
        Caption: "Mã số thuế",
        Index: 4,
        Width: 200,
      },
    ],
  },
];

export {
  getEmployees,
  getNewCode,
  getEmployeeById,
  deleteEmployee,
  deleteManyEmployees,
  addNewEmployee,
  getTotalEmployeeSummary,
  exportData,
};
