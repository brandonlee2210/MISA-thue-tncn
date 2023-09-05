export const departments = [
  {
    id: "1",
    text: "Công ty Đông Phong - Chi nhánh Cửa Nam 1",
    expanded: false,
    items: [
      {
        id: "1_1",
        text: "Văn phòng Hà Nội 1",
        expanded: false,
        items: [
          {
            id: "1_1_1",
            text: "Cửa Nam 1",
          },
          {
            id: "1_1_2",
            text: "Cửa Nam 2",
            expanded: false,
          },
          {
            id: "1_1_3",
            text: "Cửa Nam 3",
            expanded: false,
          },
        ],
      },
    ],
  },
];

export const treeProducts = [
  {
    ID: "1",
    name: "Công ty Đông Phong - Chi nhánh Cửa Nam 1",
  },
  {
    ID: "1_1",
    categoryId: "1",
    name: "Văn phòng Hà Nội 1",
  },
  {
    ID: "1_1_1",
    categoryId: "1_1",
    name: "Cửa Nam 1",
  },
  {
    ID: "1_1_2",
    categoryId: "1_1",
    name: "Cửa Nam 2",
  },
  {
    ID: "1_1_3",
    categoryId: "1_1",
    name: "Cửa Nam 3",
  },
];
