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
      { id: 1, title: "Mã nhân viên", dataIndex: "EmployeeCode", width: "162" },
      { id: 2, title: "Họ và tên", dataIndex: "FullName", width: "211" },
      {
        title: "Giới tính",
        dataIndex: "Gender",
        width: "140",
        align: "center",
      },
      {
        title: "Ngày sinh",
        dataIndex: "DateOfBirthFormatted",
        width: "160",
        align: "center",
      },
      {
        title: "Số CMND/CCCD/Hộ chiếu",
        dataIndex: "IdentityNumber",
        width: "200",
        align: "right",
        tooltip: "Số chứng minh nhân dân",
      },
      { title: "Vị trí/Chức vụ", dataIndex: "PositionName", width: "200" },
      {
        title: "Bộ phận/Phòng ban",
        dataIndex: "DepartmentName",
        width: "260",
      },

      { title: "Loại hợp đồng", dataIndex: "ContractType", width: "200" },
      { title: "Mã số thuế", dataIndex: "TaxCode", width: "200px" },
      { title: "Ngày học việc", dataIndex: "ProbationDate", width: "200" },
      { title: "Ngày thử việc", dataIndex: "HireDate", width: "200" },
      { title: "Ngày chính thức", dataIndex: "ReceiveDate", align: "right" },
      { title: "Ngày nghỉ việc", dataIndex: "ResignationDate", align: "right" },
      { title: "Email", dataIndex: "Email", width: "200px" },
      { title: "Trạng thái làm việc", dataIndex: "WorkStatus", width: "200" },
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
      { title: "Báo cáo", icon: "icon-sidebar-report", link: "/salary" },
      { title: "Người nộp thuế", icon: "icon-sidebar-persontax", link: "/tax" },
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
      { title: "Employee code", dataIndex: "EmployeeCode", width: "162px" },
      { title: "Full name", dataIndex: "FullName", width: "211px" },
      {
        title: "Gender",
        dataIndex: "GenderName",
        width: "140px",
        align: "center",
      },
      {
        title: "Date of birth",
        dataIndex: "DateOfBirthFormatted",
        width: "160px",
        align: "center",
      },
      {
        title: "Identity Number",
        tooltip: "Identity Number",
        dataIndex: "IdentityNumber",
        width: "200px",
        align: "right",
      },
      {
        title: "Date of issue",
        dataIndex: "IdentityDateFormatted",
        tooltip: "Date of issue",
        width: "160px",
        align: "center",
      },
      { title: "Position", dataIndex: "PositionName", width: "200px" },
      { title: "Department", dataIndex: "DepartmentName", width: "260px" },
      { title: "Email", dataIndex: "Email", width: "200px" },
      {
        title: "Mobile phone",
        dataIndex: "PhoneNumber",
        width: "200px",
        align: "right",
      },
      {
        title: "Bank Account",
        dataIndex: "BankAccountNumber",
        width: "200px",
        align: "right",
      },
      { title: "Bank Name", dataIndex: "BankAccountName", width: "200px" },
      { title: "Bank Branch", dataIndex: "BankAccountPlace" },
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
        title: "Dashboard",
        icon: "icon-sidebar-dashboard",
        link: "/dashboard",
      },
      { title: "Employee", icon: "icon-sidebar-cash", link: "/employee" },
      { title: "Deposit", icon: "icon-sidebar-bank", link: "/bank" },
      { title: "Purchase", icon: "icon-sidebar-purchase", link: "/purchase" },
      {
        title: "Invoice Management",
        icon: "icon-sidebar-invoice",
        link: "/invoice",
      },
      { title: "Stock", icon: "icon-sidebar-stock", link: "/stock" },
      { title: "Tools", icon: "icon-sidebar-tools", link: "/tools" },
      {
        title: "Fixed Assets",
        icon: "icon-sidebar-fixed-assets",
        link: "/assets",
      },
      { title: "Salary", icon: "icon-sidebar-purchase", link: "/salary" },
      { title: "Tax", icon: "icon-sidebar-tax", link: "/assets" },
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
