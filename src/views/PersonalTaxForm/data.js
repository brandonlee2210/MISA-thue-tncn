export const familiMemberTableHeader = [
  {
    id: 1,
    caption: "Họ và tên",
    dataField: "FullName",
    checked: true,
    fixed: false,
    disabled: false,
  },
  {
    id: 2,
    caption: "Mã số thuế",
    dataField: "TaxCode",
    checked: true,
    fixed: false,
    disabled: true,
  },
  {
    id: 3,
    caption: "Là người phụ thuộc",
    dataField: "IsDependent",
    checked: true,
    fixed: false,
    disabled: true,
    alignment: "center",
  },
  {
    id: 4,
    caption: "Ngày sinh",
    dataField: "DateOfBirth",
    checked: true,
    fixed: false,
    disabled: true,
    align: "center",
  },
  {
    id: 5,
    caption: "Quan hệ",
    dataField: "RelationshipName",
    checked: true,
    fixed: false,
    disabled: true,
  },
  {
    id: 6,
    caption: "Giảm trừ từ",
    dataField: "TaxCode",
    checked: true,
    fixed: false,
    width: 192,
    disabled: true,
  },
  {
    id: 7,
    caption: "Giảm trừ đến",
    dataField: "TaxCode",
    checked: true,
    fixed: false,
    width: 192,
    disabled: true,
  },
];

export const employeeTypes = [
  {
    id: 1,
    text: "Nhân viên",
  },
  {
    id: 2,
    text: "Vãng lai",
  },
];

export const relationshipsTypes = [
  {
    id: 1,
    text: "Bố",
  },
  {
    id: 2,
    text: "Mẹ",
  },
  {
    id: 3,
    text: "Vợ",
  },
  {
    id: 4,
    text: "Chồng",
  },
  {
    id: 5,
    text: "Con",
  },
];

export const workStatusesList = [
  {
    id: 1,
    text: "Đang làm việc",
  },
  {
    id: 2,
    text: "Đã nghỉ việc",
  },
];

export const positionsList = [
  {
    id: 1,
    text: "Lập trình viên",
  },
  {
    id: 2,
    text: "Kế toán",
  },
  {
    id: 3,
    text: "Nhân viên kinh doanh",
  },
  {
    id: 4,
    text: "Nhân viên bán hàng",
  },
];

export const identityTypes = [
  {
    id: 1,
    text: "CMND",
  },
  {
    id: 2,
    text: "CCCD",
  },
  {
    id: 3,
    text: "Hộ chiếu",
  },
];

export const contractTypes = [
  {
    id: 1,
    text: "Không cư trú",
  },
  {
    id: 2,
    text: "Cư trú và không kí HĐLĐ dưới 3 tháng",
  },
  {
    id: 3,
    text: "Cư trú và có HĐLĐ dưới 3 tháng",
  },
];

export const countryList = [
  {
    id: 1,
    text: "Việt Nam",
  },
];

export const provincesList = [
  {
    ID: 241,
    LocationID: 1,
    Kind: 1,
    GrandID: "",
    ParentID: "VN",
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: "null",
    SortOrder: 2,
    LocationName: "Hà Nội",
    ParentLocationName: "Việt Nam",
    GrandLocationName: "",
    Address: "Hà Nội, Việt Nam",
    PlaceName: "Thành phố Hà Nội",
    ParentPlaceName: "Việt Nam",
    GrandPlaceName: "",
    PlaceAddress: "Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Thành phố Trung ương",
    Description: "",
  },
  {
    ID: 242,
    LocationID: 2,
    ProvinceID: 2,
    LocationName: "Hồ Chí Minh",
  },
];

export const districtsList = [
  {
    ID: 303,
    LocationID: "VN02001",
    ProvinceID: 2,
    DistrictID: 1,
    LocationName: "Quận 1",
  },
  {
    ID: 300,
    LocationID: 10,
    ProvinceID: 2,
    DistrictID: 10,
    LocationName: "Quận 10",
  },
  {
    ID: 304,
    LocationID: 11,
    Kind: 2,
    GrandID: "VN",
    ParentID: 1,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Quận Ba Đình",
    ParentLocationName: "Hà Nội",
    GrandLocationName: "Việt Nam",
    Address: "Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Quận Ba Đình",
    ParentPlaceName: "Thành phố Hà Nội",
    GrandPlaceName: "Việt Nam",
    PlaceAddress: "Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Quận",
    Description: "",
  },
  {
    ID: 318,
    LocationID: 12,
    Kind: 2,
    GrandID: "VN",
    ParentID: 1,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Quận Bắc Từ Liêm",
    ParentLocationName: "Hà Nội",
    GrandLocationName: "Việt Nam",
    Address: "Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Quận Bắc Từ Liêm",
    ParentPlaceName: "Thành phố Hà Nội",
    GrandPlaceName: "Việt Nam",
    PlaceAddress: "Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Quận",
    Description: "",
  },
];

export const locationsList = [
  {
    ID: 10051,
    LocationID: 1,
    Kind: 3,
    GrandID: 2,
    ParentID: 10,
    CountryID: "VN",
    ProvinceID: 2,
    DistrictID: 10,
    SortOrder: 2,
    LocationName: "Phường 01",
    ParentLocationName: "Quận 10",
    GrandLocationName: "Hồ Chí Minh",
    Address: "Phường 01, Quận 10, Hồ Chí Minh, Việt Nam",
    PlaceName: "Phường 01",
    ParentPlaceName: "Quận 10",
    GrandPlaceName: "Thành phố Hồ Chí Minh",
    PlaceAddress: "Phường 01, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 10053,
    LocationID: 2,
    Kind: 3,
    GrandID: 2,
    ParentID: 10,
    CountryID: "VN",
    ProvinceID: 2,
    DistrictID: 10,
    SortOrder: 2,
    LocationName: "Phường 02",
    ParentLocationName: "Quận 10",
    GrandLocationName: "Hồ Chí Minh",
    Address: "Phường 02, Quận 10, Hồ Chí Minh, Việt Nam",
    PlaceName: "Phường 02",
    ParentPlaceName: "Quận 10",
    GrandPlaceName: "Thành phố Hồ Chí Minh",
    PlaceAddress: "Phường 02, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 10054,
    LocationID: 3,
    Kind: 3,
    GrandID: 2,
    ParentID: 10,
    CountryID: "VN",
    ProvinceID: 2,
    DistrictID: 10,
    SortOrder: 2,
    LocationName: "Phường 04",
    ParentLocationName: "Quận 10",
    GrandLocationName: "Hồ Chí Minh",
    Address: "Phường 04, Quận 10, Hồ Chí Minh, Việt Nam",
    PlaceName: "Phường 04",
    ParentPlaceName: "Quận 10",
    GrandPlaceName: "Thành phố Hồ Chí Minh",
    PlaceAddress: "Phường 04, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 9904,
    LocationID: 4,
    Kind: 3,
    GrandID: 2,
    ParentID: 1,
    CountryID: "VN",
    ProvinceID: 2,
    DistrictID: 1,
    SortOrder: 2,
    LocationName: "Phường Bến Nghé",
    ParentLocationName: "Quận 1",
    GrandLocationName: "Hồ Chí Minh",
    Address: "Phường Bến Nghé, Quận 1, Hồ Chí Minh, Việt Nam",
    PlaceName: "Phường Bến Nghé",
    ParentPlaceName: "Quận 1",
    GrandPlaceName: "Thành phố Hồ Chí Minh",
    PlaceAddress: "Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 9905,
    LocationID: 5,
    Kind: 3,
    GrandID: 2,
    ParentID: 1,
    CountryID: "VN",
    ProvinceID: 2,
    DistrictID: 1,
    SortOrder: 2,
    LocationName: "Phường Bến Thành",
    ParentLocationName: "Quận 1",
    GrandLocationName: "Hồ Chí Minh",
    Address: "Phường Bến Thành, Quận 1, Hồ Chí Minh, Việt Nam",
    PlaceName: "Phường Bến Thành",
    ParentPlaceName: "Quận 1",
    GrandPlaceName: "Thành phố Hồ Chí Minh",
    PlaceAddress: "Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 9911,
    LocationID: 6,
    Kind: 3,
    GrandID: 2,
    ParentID: 1,
    CountryID: "VN",
    ProvinceID: 2,
    DistrictID: 1,
    SortOrder: 2,
    LocationName: "Phường Cầu Kho",
    ParentLocationName: "Quận 1",
    GrandLocationName: "Hồ Chí Minh",
    Address: "Phường Cầu Kho, Quận 1, Hồ Chí Minh, Việt Nam",
    PlaceName: "Phường Cầu Kho",
    ParentPlaceName: "Quận 1",
    GrandPlaceName: "Thành phố Hồ Chí Minh",
    PlaceAddress: "Phường Cầu Kho, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1035,
    LocationID: 7,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Cống Vị",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Cống Vị, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Cống Vị",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Cống Vị, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1040,
    LocationID: 8,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Điện Biên",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Điện Biên, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Điện Biên",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Điện Biên, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1041,
    LocationID: 9,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Đội Cấn",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Đội Cấn, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Đội Cấn",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Đội Cấn, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1044,
    LocationID: 10,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Giảng Võ",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Giảng Võ, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Giảng Võ",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Giảng Võ, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1043,
    LocationID: 11,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Kim Mã",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Kim Mã, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Kim Mã",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Kim Mã, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1036,
    LocationID: 12,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Liễu Giai",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Liễu Giai, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Liễu Giai",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Liễu Giai, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1039,
    LocationID: 13,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Ngọc Hà",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Ngọc Hà, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Ngọc Hà",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Ngọc Hà, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1042,
    LocationID: 14,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Ngọc Khánh",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Ngọc Khánh, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Ngọc Khánh",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1037,
    LocationID: 15,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Nguyễn Trung Trực",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Nguyễn Trung Trực, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Nguyễn Trung Trực",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Nguyễn Trung Trực, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1032,
    LocationID: 16,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Phúc Xá",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Phúc Xá, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Phúc Xá",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Phúc Xá, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1038,
    LocationID: 17,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Quán Thánh",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Quán Thánh, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Quán Thánh",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Quán Thánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1045,
    LocationID: 18,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Thành Công",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Thành Công, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Thành Công",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Thành Công, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1033,
    LocationID: 19,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Trúc Bạch",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Trúc Bạch, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Trúc Bạch",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Trúc Bạch, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1034,
    LocationID: 20,
    Kind: 3,
    GrandID: 1,
    ParentID: 11,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 11,
    SortOrder: 2,
    LocationName: "Phường Vĩnh Phúc",
    ParentLocationName: "Quận Ba Đình",
    GrandLocationName: "Hà Nội",
    Address: "Phường Vĩnh Phúc, Quận Ba Đình, Hà Nội, Việt Nam",
    PlaceName: "Phường Vĩnh Phúc",
    ParentPlaceName: "Quận Ba Đình",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress: "Phường Vĩnh Phúc, Quận Ba Đình, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1265,
    LocationID: 21,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Cổ Nhuế 1",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Cổ Nhuế 1",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Cổ Nhuế 1, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1266,
    LocationID: 22,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Cổ Nhuế 2",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Cổ Nhuế 2, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Cổ Nhuế 2",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Cổ Nhuế 2, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1258,
    LocationID: 23,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Đông Ngạc",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Đông Ngạc, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Đông Ngạc",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Đông Ngạc, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1259,
    LocationID: 24,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Đức Thắng",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Đức Thắng, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Đức Thắng",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Đức Thắng, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1257,
    LocationID: 25,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Liên Mạc",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Liên Mạc, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Liên Mạc",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Liên Mạc, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1264,
    LocationID: 26,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Minh Khai",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Minh Khai",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Minh Khai, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1267,
    LocationID: 27,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Phú Diễn",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Phú Diễn",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Phú Diễn, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1268,
    LocationID: 28,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Phúc Diễn",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Phúc Diễn, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Phúc Diễn",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Phúc Diễn, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1261,
    LocationID: 29,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Tây Tựu",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Tây Tựu, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Tây Tựu",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Tây Tựu, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
  {
    ID: 1256,
    LocationID: 30,
    Kind: 3,
    GrandID: 1,
    ParentID: 12,
    CountryID: "VN",
    ProvinceID: 1,
    DistrictID: 12,
    SortOrder: 2,
    LocationName: "Phường Thượng Cát",
    ParentLocationName: "Quận Bắc Từ Liêm",
    GrandLocationName: "Hà Nội",
    Address: "Phường Thượng Cát, Quận Bắc Từ Liêm, Hà Nội, Việt Nam",
    PlaceName: "Phường Thượng Cát",
    ParentPlaceName: "Quận Bắc Từ Liêm",
    GrandPlaceName: "Thành phố Hà Nội",
    PlaceAddress:
      "Phường Thượng Cát, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam",
    CountryName: "Việt Nam",
    Level: "Phường",
    Description: "",
  },
];

export const items = [
  {
    itemType: "group",
    caption: "THÔNG TIN CHUNG",
    items: [
      {
        itemType: "group",
        caption: "Thông tin cá nhân",
        colCount: 2,
        items: [
          {
            dataField: "Loại đối tượng",
            editorOptions: {
              placeholder: "Chọn đối tượng",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Loại đối tượng",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Mã số thuế",
            },
            editorType: "dxTextBox",
            label: {
              text: "Mã số thuế",
            },
          },
          {
            label: {
              text: "Mã người nộp thuế",
            },
            dataField: "Password",
            editorOptions: {
              placeholder: "Nhập mã người nộp thuế",
            },
            editorType: "dxTextBox",
            validationRules: [
              {
                type: "required",
                message: "Mã người nộp thuế không được bỏ trống",
              },
            ],
          },
          {
            dataField: "Loại giấy tờ",
            editorType: "dxSelectBox",
            label: {
              text: "Loại giấy tờ",
            },
          },
          {
            label: {
              text: "Họ tên",
            },
            editorOptions: {
              placeholder: "Họ tên",
            },
            editorType: "dxTextBox",
            validationRules: [
              {
                type: "required",
                message: "Họ tên không được bỏ trống",
              },
            ],
          },
          {
            label: {
              text: "Số CMND",
            },
            editorOptions: {
              placeholder: "Nhập số CMND/CCCD/Hộ chiếu",
            },

            editorType: "dxTextBox",
            validationRules: [],
          },
          {
            label: {
              text: "Ngày sinh",
            },
            editorOptions: {
              placeholder: "__/__/____",
            },
            editorType: "dxDateBox",
            validationRules: [],
          },
          {
            label: {
              text: "Ngày cấp",
            },
            editorOptions: {
              placeholder: "__/__/____",
            },
            editorType: "dxDateBox",
            validationRules: [],
          },
          {
            dataField: "Gender",
            editorType: "dxRadioGroup",
            editorOptions: {
              items: [
                { id: 0, text: "Nam" },
                { id: 1, text: "Nữ" },
              ],
              layout: "horizontal", // Optional: Specify the layout of the radio buttons (horizontal or vertical)
              defaultValue: 0,
            },
            label: {
              text: "Giới tính",
            },
          },
          {
            label: {
              text: "Nơi cấp",
            },
            editorOptions: {
              placeholder: "Chọn/nhập nơi cấp",
            },
            editorType: "dxSelectBox",

            validationRules: [],
          },
          {
            label: {
              text: "Số điện thoại",
            },
            editorOptions: {
              placeholder: "Nhập số điện thoại",
            },
            editorType: "dxTextBox",
            validationRules: [],
          },
          {
            label: {
              text: "Quốc tịch",
            },

            editorType: "dxSelectBox",
            validationRules: [],
          },
          {
            label: {
              text: "Email",
            },
            editorOptions: {
              placeholder: "Nhập email",
            },
            editorType: "dxTextBox",
            validationRules: [
              {
                type: "required",
                message: "Email không được bỏ trống",
              },
              // ko đúng định dạng email
              {
                type: "pattern",
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Email không đúng định dạng",
              },
            ],
          },
          {
            label: {
              text: "Loại hợp đồng",
            },

            editorType: "dxSelectBox",
            validationRules: [],
          },
        ],
      },
      {
        itemType: "group",
        caption: "Hộ khẩu thường trú",
        colCount: 2,
        items: [
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Việt Nam",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quốc gia",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập xã/phường",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Xã/phường",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập tỉnh/thành phố",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Tỉnh/thành phố",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Nhập số nhà, đường/phố, thôn/xóm",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Số nhà, đường/phố, thôn/xóm",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập quận, huyện",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quận/huyện",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              readOnly: true,
            },
            editorType: "dxTextBox",
            label: {
              text: "Địa chỉ",
            },
          },
        ],
      },
      {
        itemType: "group",
        caption: "Chỗ ở hiện nay",
        colCount: 2,
        items: [
          {
            colSpan: 2,
            editorType: "dxCheckBox",
            value: true,
            label: {
              text: "Giống hộ khẩu thường trú",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Việt Nam",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quốc gia",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập xã/phường",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Xã/phường",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập tỉnh/thành phố",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Tỉnh/thành phố",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Nhập số nhà, đường/phố, thôn/xóm",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Số nhà, đường/phố, thôn/xóm",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              placeholder: "Chọn/nhập quận, huyện",
            },
            editorType: "dxSelectBox",
            label: {
              text: "Quận/huyện",
            },
          },
          {
            dataField: "Password",
            editorOptions: {
              readOnly: true,
            },
            editorType: "dxTextBox",
            label: {
              text: "Địa chỉ",
            },
          },
        ],
      },
    ],
  },
  {
    itemType: "group",
    caption: "THÔNG TIN CÔNG VIỆC",
    colCount: 2,
    items: [
      {
        dataField: "Bộ phận/phòng ban",
        editorOptions: {
          placeholder: "Chọn đối tượng",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Bộ phận/phòng ban",
        },
      },
      {
        label: {
          text: "Ngày học việc",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Vị trí công việc",
        },
        editorOptions: {
          placeholder: "Chọn/nhập vị trí công việc",
        },
        editorType: "dxSelectBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày thử việc",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Chức danh",
        },
        editorOptions: {
          readOnly: true,
        },
        editorType: "dxTextBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày chính thức",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Trạng thái làm việc",
        },
        editorOptions: {
          placeholder: "Chọn/nhập vị trí công việc",
        },
        editorType: "dxSelectBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày nghỉ việc",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
    ],
  },
];

export const popupItems = [
  {
    itemType: "group",
    caption: "",
    colCount: 2,
    items: [
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Họ tên thành viên",
          showClearButton: true,
        },
        editorType: "dxTextBox",
        label: {
          text: "Họ tên thành viên",
        },
        validationRules: [
          {
            type: "required",
            message: "Họ tên thành viên không được bỏ trống",
          },
        ],
      },
      {
        dataField: "Loại đối tượng",
        editorOptions: {
          placeholder: "Quốc tịch",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Quốc tịch",
        },
      },
      {
        label: {
          text: "Mã người nộp thuế",
        },
        dataField: "Password",
        editorOptions: {
          placeholder: "Nhập mã người nộp thuế",
        },
        editorType: "dxTextBox",
        validationRules: [
          {
            type: "required",
            message: "Mã người nộp thuế không được bỏ trống",
          },
        ],
      },
      {
        dataField: "Loại giấy tờ",
        editorType: "dxSelectBox",
        label: {
          text: "Loại giấy tờ",
        },
      },
      {
        label: {
          text: "Họ tên",
        },
        editorOptions: {
          placeholder: "Họ tên",
        },
        editorType: "dxTextBox",
        validationRules: [
          {
            type: "required",
            message: "Họ tên không được bỏ trống",
          },
        ],
      },
      {
        label: {
          text: "Số CMND",
        },
        editorOptions: {
          placeholder: "Nhập số CMND/CCCD/Hộ chiếu",
        },

        editorType: "dxTextBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày sinh",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        label: {
          text: "Ngày cấp",
        },
        editorOptions: {
          placeholder: "__/__/____",
        },
        editorType: "dxDateBox",
        validationRules: [],
      },
      {
        dataField: "Gender",
        editorType: "dxRadioGroup",
        editorOptions: {
          items: [
            { value: 0, text: "Nam" },
            { value: 1, text: "Nữ" },
          ],
          layout: "horizontal", // Optional: Specify the layout of the radio buttons (horizontal or vertical)
          defaultValue: 0,
        },
        label: {
          text: "Giới tính",
        },
      },
      {
        label: {
          text: "Nơi cấp",
        },
        editorOptions: {
          placeholder: "Chọn/nhập nơi cấp",
        },
        editorType: "dxSelectBox",

        validationRules: [],
      },
      {
        label: {
          text: "Số điện thoại",
        },
        editorOptions: {
          placeholder: "Nhập số điện thoại",
        },
        editorType: "dxTextBox",
        validationRules: [],
      },
      {
        label: {
          text: "Quốc tịch",
        },

        editorType: "dxSelectBox",
        validationRules: [],
      },
      {
        label: {
          text: "Email",
        },
        editorOptions: {
          placeholder: "Nhập email",
        },
        editorType: "dxTextBox",
        validationRules: [
          {
            type: "required",
            message: "Email không được bỏ trống",
          },
          // ko đúng định dạng email
          {
            type: "pattern",
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            message: "Email không đúng định dạng",
          },
        ],
      },
      {
        label: {
          text: "Loại hợp đồng",
        },

        editorType: "dxSelectBox",
        validationRules: [],
      },
    ],
  },
  {
    itemType: "group",
    caption: "Hộ khẩu thường trú",
    colCount: 2,
    items: [
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Việt Nam",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Quốc gia",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Chọn/nhập xã/phường",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Xã/phường",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Chọn/nhập tỉnh/thành phố",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Tỉnh/thành phố",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Nhập số nhà, đường/phố, thôn/xóm",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Số nhà, đường/phố, thôn/xóm",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Chọn/nhập quận, huyện",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Quận/huyện",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          readOnly: true,
        },
        editorType: "dxTextBox",
        label: {
          text: "Địa chỉ",
        },
      },
    ],
  },
  {
    itemType: "group",
    caption: "Chỗ ở hiện nay",
    colCount: 2,
    items: [
      {
        colSpan: 2,
        editorType: "dxCheckBox",
        value: true,
        label: {
          text: "Giống hộ khẩu thường trú",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Việt Nam",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Quốc gia",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Chọn/nhập xã/phường",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Xã/phường",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Chọn/nhập tỉnh/thành phố",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Tỉnh/thành phố",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Nhập số nhà, đường/phố, thôn/xóm",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Số nhà, đường/phố, thôn/xóm",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          placeholder: "Chọn/nhập quận, huyện",
        },
        editorType: "dxSelectBox",
        label: {
          text: "Quận/huyện",
        },
      },
      {
        dataField: "Password",
        editorOptions: {
          readOnly: true,
        },
        editorType: "dxTextBox",
        label: {
          text: "Địa chỉ",
        },
      },
    ],
  },
];
