export const filterOptions = [
  {
    key: "FilterWorkStatus",
    label: "Trạng thái làm việc",
    options: [
      {
        value: 1,
        text: "Đang làm việc",
      },
      {
        value: 2,
        text: "Đã nghỉ việc",
      },
    ],
  },
  {
    key: "FilterEmployeeTypeID",
    label: "Loại đối tượng",
    options: [
      {
        value: 1,
        text: "Nhân viên",
      },
      {
        value: 2,
        text: "Vãng lai",
      },
    ],
  },
  {
    key: "FilterHasTaxCode",
    label: "Mã số thuế",
    options: [
      {
        value: 1,
        text: "Đã có MST",
      },
      {
        value: 0,
        text: "Chưa có MST",
      },
    ],
  },
  {
    key: "FilterDate",
    label: "Thời gian",
    options: [
      {
        value: "HireDate",
        text: "Ngày thử việc",
      },
      {
        value: "ReceiveDate",
        text: "Ngày chính thức",
      },
    ],
    startDate: null,
    endDate: null,
  },
];
