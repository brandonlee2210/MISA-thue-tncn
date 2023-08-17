const MISAResource = {
  VN: {
    EmployeeCodeInvalidError: {
      Empty: "Mã không được để trống",
      Duplicate: "Mã đã tồn tại",
      Invalid: "Mã cần có định dạng NV-XXXX",
      MaxCode: "Mã không được vượt quá mã nhân viên lớn nhất 10 đơn vị",
    },
    EmployeeFullNameInvalidError: {
      Empty: "Tên không được để trống",
      MaxLength: "Tên không được vượt quá 50 ký tự",
    },
    DepartmentInvalidError: {
      Empty: "Tên phòng ban không được để trống",
    },
    DateInvalidError: {
      MaxDate: "Ngày tháng phải nhỏ hơn ngày hiện tại",
      Invalid: "Ngày tháng không hợp lệ",
    },
    EmailInvalidError: {
      Empty: "Email không được để trống",
      Invalid: "Email không hợp lệ",
    },
    ToastMessageTitle: {
      Info: "Thông tin!",
      Warning: "Cảnh báo!",
      Error: "Lỗi!",
      Success: "Thành công!",
    },
    FormTitle: {
      AddEmployee: "Thêm mới nhân viên",
      UpdateEmployee: "Cập nhật nhân viên",
    },
    NotifyTitle: {
      DeleteEmployee: "Xóa nhân viên!",
      Info: "Thông báo!",
    },
    NotifyDialogType: {
      Warning: "warning",
    },
    AddEmployee: {
      Success: "Thêm mới nhân viên thành công",
      Error: "Gặp lỗi khi thêm nhân viên",
      DuplicatedCodeError: "Đã tồn tại mã nhân viên",
    },
    UpdateEmployee: {
      Success: "Cập nhật nhân viên thành công",
      Error: "Gặp lỗi khi cập nhật nhân viên",
    },
    DeleteEmployee: {
      Success: "Xóa nhân viên thành công",
      Error: "Gặp lỗi khi xóa nhân viên",
    },
    ColumnsTableHeader: [
      {
        id: 1,
        caption: "Mã nhân viên",
        dataField: "EmployeeCode",
        width: "162",
      },
      { id: 2, caption: "Họ và tên", dataField: "FullName", width: "211" },
      {
        caption: "Giới tính",
        dataField: "Gender",
        width: "140",
        align: "center",
      },
      {
        caption: "Ngày sinh",
        dataField: "DateOfBirthFormatted",
        width: "160",
        align: "center",
      },
      {
        caption: "Số CMND/CCCD/Hộ chiếu",
        dataField: "IdentityNumber",
        width: "260",
        align: "right",
        tooltip: "Số chứng minh nhân dân",
      },
      { caption: "Vị trí/Chức vụ", dataField: "PositionName", width: "200" },
      {
        caption: "Bộ phận/Phòng ban",
        dataField: "DepartmentName",
        width: "260",
      },

      { caption: "Loại hợp đồng", dataField: "ContractType", width: "200" },
      { caption: "Mã số thuế", dataField: "TaxCode", width: "200px" },
      { caption: "Ngày học việc", dataField: "ProbationDate", width: "200" },
      { caption: "Ngày thử việc", dataField: "HireDate", width: "200" },
      { caption: "Ngày chính thức", dataField: "ReceiveDate", align: "right" },
      {
        caption: "Ngày nghỉ việc",
        dataField: "ResignationDate",
        align: "right",
      },
      { caption: "Email", dataField: "Email", width: "200px" },
      { caption: "Trạng thái làm việc", dataField: "WorkStatus", width: "200" },
    ],
    ToastMessage: {
      ToastTitle: {
        Info: "Thông tin!",
        Warning: "Cảnh báo!",
        Error: "Lỗi!",
        Success: "Thành công!",
      },
      ToastDescription: {
        AddEmployee: "Thêm mới nhân viên thành công",
        UpdateEmployee: "Cập nhật nhân viên thành công",
        DeleteEmployee: "Xóa nhân viên thành công",
        DeleteManyEmployees(count) {
          return `${count} nhân viên đã được xoá thành công!`;
        },
      },
    },
    NotifyMessage: {
      NotifyTitle: {
        Info: "Thông báo!",
      },
      NotifyDescription: {
        DataChanged: "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?",
        DeleteOne: (EmployeeCode) =>
          `Bạn có chắc muốn xoá nhân viên [${EmployeeCode}] không?`,
        DeleteMany: (count) => `Bạn có chắc muốn xoá ${count} nhân viên không?`,
        Duplicate:
          "Mã nhân viên đã tồn tại trong hệ thống, vui lòng kiểm tra lại!",
      },
    },
    Sidebar: [
      { caption: "Báo cáo", icon: "icon-sidebar-report", link: "/salary" },
      {
        caption: "Người nộp thuế",
        icon: "icon-sidebar-persontax",
        link: "/tax",
      },
    ],
    Form: {
      FormLabel: {
        Code: "Mã",
        FullName: "Tên",
        DepartmentName: "Tên phòng ban",
        PositionName: "Chức danh",
        DateOfBirth: "Ngày sinh",
        Gender: "Giới tính",
        IdentityNumber: "Số CMND",
        IdentityDate: "Ngày cấp",
        IdentityPlace: "Nơi cấp",
        Address: "Địa chỉ",
        PhoneNumber: "Điện thoại di động",
        FixedPhoneNumber: "Điện thoại cố định",
        Email: "Email",
        BankAccountNumber: "Tài khoản ngân hàng",
        BankAccountName: "Tên ngân hàng",
        BankAccountPlace: "Chi nhánh",
      },
    },
    Placeholder: {
      Dropdown: {
        Department: "Chọn phòng ban",
        Position: "Chọn chức danh",
        Records: {
          10: "10 bản ghi trên 1 trang",
          20: "20 bản ghi trên 1 trang",
          30: "30 bản ghi trên 1 trang",
          50: "50 bản ghi trên 1 trang",
          100: "100 bản ghi trên 1 trang",
        },
      },
      Input: {
        Search: "Tìm theo mã, tên nhân viên",
      },
    },
    ButtonLabel: {
      Add: "Thêm mới",
      Cancel: "Huỷ",
      Delete: "Xoá",
      Edit: "Sửa",
      Yes: "Có",
      No: "Không",
      Confirm: "Đồng ý",
      Help: "Trợ giúp",
      Duplicate: "Nhân bản",
      Deprecate: "Ngưng sử dụng",
      Uncheck: "Bỏ chọn",
      Selected: "Đã chọn",
      Save: "Cất",
      SaveAndAdd: "Cất và thêm",
      Export: "Xuất khẩu",
    },
    ToolTip: {
      Reload: "Tải lại trang",
      IdentityDate: "Ngày cấp chứng minh nhân dân",
      IdentityNumber: "Số chứng minh nhân dân",
      Help: "Trợ giúp (F1)",
      Close: "Đóng (Esc)",
      Save: "Cất (Ctrl + S)",
      SaveAndAdd: "Cất và thêm (Ctrl + N)",
      Search: "Tìm kiếm",
    },
    Gender: {
      Male: "Nam",
      Female: "Nữ",
      Other: "Khác",
    },
    BlockContent: {
      Title: {
        TotalEmployee: "Tổng số lao động",
        CurrentUse: "Đang sử dụng dịch vụ",
        NoCurrentUse: "Không sử dụng dịch vụ",
      },
      Subtitle: {
        TotalEmployee:
          "Tất cả người nộp thuế có loại đối tượng là Nhân viên và Vãng lai trên AMIS Thuế TNCN",
        CurrentUse:
          "Người nộp thuế có loại đối tượng là Nhân viên và Vãng lai có thiết lập sử dụng dịch vụ Thuế TNCN",
        NoCurrentUse:
          "Người nộp thuế có loại đối tượng là Nhân viên và Vãng lai không thiết lập sử dụng dịch vụ Thuế TNCN",
      },
    },
    Others: {
      PageEmployeeTitle: "Hồ sơ người nộp thuế",
      PageEmployeeManager: "Quản lý lao động sử dụng dịch vụ",
      Prev: "Trước",
      Next: "Sau",
      TotalRecords: "Tổng số",
      Records: "bản ghi",
      Record: "bản ghi",
      TitleMetaData: "AMIS kế toán",
      Function: "Chức năng",
      ErrorFromServer: "Có lỗi xảy ra! Vui lòng liên hệ bộ phận hỗ trợ.",
      NotFoundImgURL: "/src/assets/img/notfoundvn.png",
    },
  },
  EN: {
    EmployeeCodeInvalidError: {
      Empty: "Code cannot be empty",
      Duplicate: "Code already exists",
      Invalid: "Code must be in the format of NV-XXXX",
      MaxCode: "Code cannot exceed max employee code 10 characters",
    },
    EmployeeFullNameInvalidError: {
      Empty: "Full name cannot be empty",
      MaxLength: "Full name cannot exceed 50 characters",
    },
    DepartmentInvalidError: {
      Empty: "Department name cannot be empty",
    },
    DateInvalidError: {
      MaxDate: "Date must be less than current date",
      Invalid: "Date is invalid",
    },
    EmailInvalidError: {
      Empty: "Email cannot be empty",
      Invalid: "Invalid email",
    },
    ToastMessageTitle: {
      Info: "Information!",
      Warning: "Warning!",
      Error: "Error!",
      Success: "Success!",
    },
    FormTitle: {
      AddEmployee: "Add new employee",
      UpdateEmployee: "Update employee",
    },
    NotifyTitle: {
      DeleteEmployee: "Delete employee!",
      Info: "Notification!",
    },
    NotifyDialogType: {
      Warning: "warning",
    },
    AddEmployee: {
      Success: "Add new employee successfully",
      Error: "Error when adding employee",
      DuplicatedCodeError: "Employee code already exists",
    },
    UpdateEmployee: {
      Success: "Update employee successfully",
      Error: "Error when updating employee",
    },
    DeleteEmployee: {
      Success: "Delete employee successfully",
      Error: "Error when deleting employee",
    },
    ColumnsTableHeader: [
      { caption: "Employee code", dataField: "EmployeeCode", width: "162px" },
      { caption: "Full name", dataField: "FullName", width: "211px" },
      {
        caption: "Gender",
        dataField: "GenderName",
        width: "140px",
        align: "center",
      },
      {
        caption: "Date of birth",
        dataField: "DateOfBirthFormatted",
        width: "160px",
        align: "center",
      },
      {
        caption: "Identity Number",
        tooltip: "Identity Number",
        dataField: "IdentityNumber",
        width: "200px",
        align: "right",
      },
      {
        caption: "Date of issue",
        dataField: "IdentityDateFormatted",
        tooltip: "Date of issue",
        width: "160px",
        align: "center",
      },
      { caption: "Position", dataField: "PositionName", width: "200px" },
      { caption: "Department", dataField: "DepartmentName", width: "260px" },
      { caption: "Email", dataField: "Email", width: "200px" },
      {
        caption: "Mobile phone",
        dataField: "PhoneNumber",
        width: "200px",
        align: "right",
      },
      {
        caption: "Bank Account",
        dataField: "BankAccountNumber",
        width: "200px",
        align: "right",
      },
      { caption: "Bank Name", dataField: "BankAccountName", width: "200px" },
      { caption: "Bank Branch", dataField: "BankAccountPlace" },
    ],
    ToastMessage: {
      ToastTitle: {
        Info: "Information!",
        Warning: "Warning!",
        Error: "Error!",
        Success: "Success!",
      },
      ToastDescription: {
        AddEmployee: "Add new employee successfully",
        UpdateEmployee: "Update employee successfully",
        DeleteEmployee: "Delete employee successfully",
        DeleteManyEmployees(count) {
          return `${count} employees have been deleted`;
        },
      },
    },
    NotifyMessage: {
      NotifyTitle: {
        Info: "Notification!",
      },
      NotifyDescription: {
        DataChanged: "Data has changed, do you want to save?",
        DeleteOne: (EmployeeCode) =>
          `Are you sure you want to delete employee [${EmployeeCode}] ?`,
        DeleteMany: (count) =>
          `Are you sure you want to delete ${count} employees?`,
        Duplicate:
          "Employee code already exists in the system, please check again!",
      },
    },
    Sidebar: [
      {
        caption: "Dashboard",
        icon: "icon-sidebar-dashboard",
        link: "/dashboard",
      },
      { caption: "Employee", icon: "icon-sidebar-cash", link: "/employee" },
      { caption: "Deposit", icon: "icon-sidebar-bank", link: "/bank" },
      { caption: "Purchase", icon: "icon-sidebar-purchase", link: "/purchase" },
      {
        caption: "Invoice Management",
        icon: "icon-sidebar-invoice",
        link: "/invoice",
      },
      { caption: "Stock", icon: "icon-sidebar-stock", link: "/stock" },
      { caption: "Tools", icon: "icon-sidebar-tools", link: "/tools" },
      {
        caption: "Fixed Assets",
        icon: "icon-sidebar-fixed-assets",
        link: "/assets",
      },
      { caption: "Salary", icon: "icon-sidebar-purchase", link: "/salary" },
      { caption: "Tax", icon: "icon-sidebar-tax", link: "/assets" },
    ],
    Form: {
      FormLabel: {
        Code: "Code",
        FullName: "Full name",
        DepartmentName: "Department name",
        PositionName: "Position",
        DateOfBirth: "Date Of birth",
        Gender: "Gender",
        IdentityNumber: "Identity Number",
        IdentityDate: "Date Of Issue",
        IdentityPlace: "Place Of Issue",
        Address: "Address",
        PhoneNumber: "Mobile Phone",
        FixedPhoneNumber: "Fixed Phone",
        Email: "Email",
        BankAccountNumber: "Bank Account Number",
        BankAccountName: "Bank Account Name",
        BankAccountPlace: "Bank Account Place",
      },
    },
    Placeholder: {
      Dropdown: {
        Department: "Select department",
        Position: "Select position",
        Records: {
          10: "10 records per page",
          20: "20 records per page",
          30: "30 records per page",
          50: "50 records per page",
          100: "100 records per page",
        },
      },
      Input: {
        Search: "Search by code or name",
      },
    },
    ButtonLabel: {
      Add: "Add",
      Yes: "Yes",
      No: "No",
      Cancel: "Cancel",
      Delete: "Delete",
      Edit: "Edit",
      Confirm: "Confirm",
      Help: "Help",
      Duplicate: "Duplicate",
      Deprecate: "Deprecate",
      Uncheck: "Uncheck",
      Selected: "Selected",
      Save: "Save",
      SaveAndAdd: "Save And Add",
      Export: "Export",
    },
    ToolTip: {
      Reload: "Reload page",
      IdentityDate: "Date Of Issue",
      IdentityNumber: "Identity Number",
      Help: "Help (F1)",
      Close: "Close (Esc)",
      Save: "Save (Ctrl + S)",
      SaveAndAdd: "Save And Add (Ctrl + N)",
      Search: "Search",
    },
    Gender: {
      Male: "Male",
      Female: "Female",
      Other: "Other",
    },
    Others: {
      PageEmployeeTitle: "Employee",
      Prev: "Prev",
      Next: "Next",
      TotalRecords: "Total",
      Records: "records",
      Record: "record",
      TitleMetaData: "AMIS Accounting",
      Function: "Action",
      ErrorFromServer: "Please contact support for more information.",
      NotFoundImgURL: "/src/assets/img/notfounden.png",
    },
  },
};

export default MISAResource;
