<template>
  <div class="page">
    <ListPersonTableHeader
      v-if="checkedIdsLength == 0"
      @toggle-draggable-menu="handleToggleDraggableMenu"
    />
    <SelectedTableHeader
      v-else
      :length="checkedIdsLength"
      v-on:deselect="handleDeselect"
    />
    <div class="table__container">
      <MTable
        v-on:onselected="handleCheckedIds"
        ref="tableRef"
        @change-pin="handleChangePin"
        :dataSource="dataSource"
        :columns="columns"
      />
    </div>
    <Pagination />
    <div id="draggable-container" v-if="isDraggableMenuVisible">
      <DraggableMenu
        :list="columns"
        @save="handleChangePin"
        @default="handleDefaultSetting"
      />
    </div>
  </div>
</template>

<script>
import MTable from "@/components/base/table/MTable.vue";
import Pagination from "@/components/base/pagination/Pagination.vue";
import ListPersonTableHeader from "./ListPersonTableHeader.vue";
import SelectedTableHeader from "./SelectedTableHeader.vue";
import MISAResource from "@/helpers/resource";
import DraggableMenu from "@/components/base/draggable/DraggableMenu.vue";

const tableRef = "tableRef";

let defaultColumns = MISAResource.VN.ColumnsTableHeader;

export default {
  data() {
    return {
      checkedIds: [],
      dataSource: [
        {
          EmployeeID: "03ab41dc-a947-4cce-9f17-3bec4c8c96de",
          EmployeeCode: "quick brown fox jumps",
          FullName: "Audrey",
          DateOfBirth: "1999-07-10T09:50:59",
          Gender: 968228,
          GenderName: "Stephen",
          IdentityNumber: "24",
          IdentityDate: "2016-10-04T09:18:11",
          IdentityPlace: null,
          IdentityPlaceID: 24,
          Email: "Jolie.Watkin.72@home.nl",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Abby",
          EmployeeTypeID: 24,
          EmployeeTypeName: "Maximilian",
          IdentityKindOfPaperID: null,
          TaxCode: "the lazy dogThe quick br",
          ContractTypeID: 24,
          ContractTypeName: "Cuthbert",
          NationalityID: 24,
          NativeCountryCode: 825263,
          NativeProvinceCode: 282319,
          NativeDistrictCode: 615614,
          NativeWardCode: 502213,
          NativeAddress: "8274 Del Monte Drive Bristol, CT 06010",
          CurrentCountryCode: 518691,
          CurrentCountryName: "Belize",
          CurrentProvinceCode: 504742,
          CurrentDistrictCode: 999242,
          CurrentWardCode: 145834,
          CurrentAddress: "501 South Edgemont Street Pensacola, FL 32503",
          DepartmentName: "Patsy",
          ProbationDate: "1986-05-31T09:00:34",
          HireDate: "2008-06-21T21:46:33",
          ReceiveDate: "1990-07-01T02:41:05",
          ResignationDate: "1994-11-16T20:14:21",
          WorkStatus: 378603,
        },
        {
          EmployeeID: "0478d025-9222-401d-9b07-3f17028eb7f7",
          EmployeeCode: "lazy dog",
          FullName: "Bernard",
          DateOfBirth: "1980-03-21T08:50:40",
          Gender: 282064,
          GenderName: "Bobbi",
          IdentityNumber: "45",
          IdentityDate: "2003-04-04T07:52:13",
          IdentityPlace: null,
          IdentityPlaceID: 45,
          Email: "Raife.Short.46@live.co.uk",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Beatrice",
          EmployeeTypeID: 45,
          EmployeeTypeName: "Belinda",
          IdentityKindOfPaperID: null,
          TaxCode: "ogThe quick brown fox jumps ov",
          ContractTypeID: 45,
          ContractTypeName: "Brooks",
          NationalityID: 45,
          NativeCountryCode: 101506,
          NativeProvinceCode: 718570,
          NativeDistrictCode: 87672,
          NativeWardCode: 53082,
          NativeAddress: "215 W. Orange Ave. Menasha, WI 54952",
          CurrentCountryCode: 279220,
          CurrentCountryName: "Cyprus",
          CurrentProvinceCode: 136196,
          CurrentDistrictCode: 860390,
          CurrentWardCode: 323334,
          CurrentAddress: "11 Water Avenue Lansdowne, PA 19050",
          DepartmentName: "Oswald",
          ProbationDate: "2012-07-28T06:24:38",
          HireDate: "2002-10-03T10:10:54",
          ReceiveDate: "2007-09-26T03:43:52",
          ResignationDate: "1993-08-24T00:24:07",
          WorkStatus: 533525,
        },
        {
          EmployeeID: "09092994-150d-4857-ad05-6baa586028c2",
          EmployeeCode: "over the lazy dogThe",
          FullName: "Russell",
          DateOfBirth: "2003-06-22T19:07:32",
          Gender: 664329,
          GenderName: "Angie",
          IdentityNumber: "34",
          IdentityDate: "2014-03-17T16:59:19",
          IdentityPlace: null,
          IdentityPlaceID: 34,
          Email: "Susan.Ryan.78@hotmail.de",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Alec",
          EmployeeTypeID: 34,
          EmployeeTypeName: "Jamie",
          IdentityKindOfPaperID: null,
          TaxCode: "over the lazy dogThe quick brown fox j",
          ContractTypeID: 34,
          ContractTypeName: "Marta",
          NationalityID: 34,
          NativeCountryCode: 999483,
          NativeProvinceCode: 824011,
          NativeDistrictCode: 320655,
          NativeWardCode: 738257,
          NativeAddress: "8684 Old York St. Titusville, FL 32780",
          CurrentCountryCode: 585288,
          CurrentCountryName: "Marshall Islands",
          CurrentProvinceCode: 684997,
          CurrentDistrictCode: 964874,
          CurrentWardCode: 212102,
          CurrentAddress: "305C Old Amerige Road Wilmington, MA 01887",
          DepartmentName: "Charmaine",
          ProbationDate: "1994-08-04T17:42:37",
          HireDate: "1982-09-26T12:08:32",
          ReceiveDate: "2009-06-09T21:50:50",
          ResignationDate: "1982-08-31T15:10:40",
          WorkStatus: 669761,
        },
        {
          EmployeeID: "1069641a-5fae-4345-b6c9-3ff2f01b2cda",
          EmployeeCode: "brown fox jumps over the ",
          FullName: "Paulina",
          DateOfBirth: "1995-07-01T11:38:15",
          Gender: 676077,
          GenderName: "Michele",
          IdentityNumber: "33",
          IdentityDate: "1989-05-10T09:51:29",
          IdentityPlace: null,
          IdentityPlaceID: 33,
          Email: "Erin.Piper.13@tiscali.co.uk",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Jeffrey",
          EmployeeTypeID: 33,
          EmployeeTypeName: "Rosamund",
          IdentityKindOfPaperID: null,
          TaxCode: "br",
          ContractTypeID: 33,
          ContractTypeName: "Betty",
          NationalityID: 33,
          NativeCountryCode: 489956,
          NativeProvinceCode: 247382,
          NativeDistrictCode: 358928,
          NativeWardCode: 856497,
          NativeAddress: "521 Manor Drive Westport, CT 06880",
          CurrentCountryCode: 880997,
          CurrentCountryName: "Estonia",
          CurrentProvinceCode: 996745,
          CurrentDistrictCode: 828277,
          CurrentWardCode: 840171,
          CurrentAddress: "36 Crescent Ave. Apopka, FL 32703",
          DepartmentName: "Maya",
          ProbationDate: "1996-06-11T01:34:37",
          HireDate: "1993-10-27T23:53:40",
          ReceiveDate: "2019-10-16T06:18:08",
          ResignationDate: "2006-09-06T23:23:16",
          WorkStatus: 9533,
        },
        {
          EmployeeID: "1113c1c5-40ca-42ae-9f4d-e154623a7315",
          EmployeeCode: "quick brown fox jumps ove",
          FullName: "Ivy",
          DateOfBirth: "1992-06-09T06:13:07",
          Gender: 483896,
          GenderName: "Jenna",
          IdentityNumber: "21",
          IdentityDate: "2009-09-23T06:55:25",
          IdentityPlace: null,
          IdentityPlaceID: 21,
          Email: "Maureen.Herring.63@voila.fr",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Anderson",
          EmployeeTypeID: 21,
          EmployeeTypeName: "Claribel",
          IdentityKindOfPaperID: null,
          TaxCode: "lazy dogThe quick brown fox jump",
          ContractTypeID: 21,
          ContractTypeName: "Leanne",
          NationalityID: 21,
          NativeCountryCode: 131939,
          NativeProvinceCode: 968544,
          NativeDistrictCode: 584329,
          NativeWardCode: 797619,
          NativeAddress: "935 South Sage Court Champlin, MN 55316",
          CurrentCountryCode: 574786,
          CurrentCountryName: "Sao Tome and Principe",
          CurrentProvinceCode: 508267,
          CurrentDistrictCode: 822093,
          CurrentWardCode: 59535,
          CurrentAddress: "7227 Rose St. Cartersville, GA 30120",
          DepartmentName: "Daphne",
          ProbationDate: "2011-10-31T07:55:28",
          HireDate: "1980-08-12T02:12:52",
          ReceiveDate: "2002-03-04T20:04:12",
          ResignationDate: "1999-07-08T18:51:33",
          WorkStatus: 300045,
        },
        {
          EmployeeID: "15c46947-805d-432a-94eb-3c102bbf2f60",
          EmployeeCode: "the lazy do",
          FullName: "Arabella",
          DateOfBirth: "2014-12-27T09:24:46",
          Gender: 372781,
          GenderName: "Alice",
          IdentityNumber: "54",
          IdentityDate: "2017-02-09T06:45:45",
          IdentityPlace: null,
          IdentityPlaceID: 54,
          Email: "Louella.Fleck.17@juno.com",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Lorna",
          EmployeeTypeID: 54,
          EmployeeTypeName: "Charity",
          IdentityKindOfPaperID: null,
          TaxCode: "lazy dogThe quick brown fo",
          ContractTypeID: 54,
          ContractTypeName: "Patrice",
          NationalityID: 54,
          NativeCountryCode: 735665,
          NativeProvinceCode: 481801,
          NativeDistrictCode: 603781,
          NativeWardCode: 431390,
          NativeAddress: "494 Alton Ave. Canyon Country, CA 91387",
          CurrentCountryCode: 448488,
          CurrentCountryName: "Canada",
          CurrentProvinceCode: 723450,
          CurrentDistrictCode: 270065,
          CurrentWardCode: 150485,
          CurrentAddress: "38 Howard Drive Tacoma, WA 98444",
          DepartmentName: "Cuthbert",
          ProbationDate: "2011-05-27T02:25:37",
          HireDate: "1981-12-06T05:52:01",
          ReceiveDate: "1998-10-31T22:54:18",
          ResignationDate: "1981-04-08T05:14:02",
          WorkStatus: 572304,
        },
        {
          EmployeeID: "1673a3e7-288e-4ba6-8e50-2a9f083f9180",
          EmployeeCode: "dogThe quick",
          FullName: "Genevieve",
          DateOfBirth: "1996-07-14T17:48:12",
          Gender: 90698,
          GenderName: "Drusilla",
          IdentityNumber: "41",
          IdentityDate: "2007-03-27T13:52:45",
          IdentityPlace: null,
          IdentityPlaceID: 41,
          Email: "Rachel.Ball.37@tin.it",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Diana",
          EmployeeTypeID: 41,
          EmployeeTypeName: "Keith",
          IdentityKindOfPaperID: null,
          TaxCode: "the lazy dogThe quick brown fox jumps",
          ContractTypeID: 41,
          ContractTypeName: "Holly",
          NationalityID: 41,
          NativeCountryCode: 115849,
          NativeProvinceCode: 62001,
          NativeDistrictCode: 570873,
          NativeWardCode: 423456,
          NativeAddress: "8026 Middle River St. Kernersville, NC 27284",
          CurrentCountryCode: 935279,
          CurrentCountryName: "Ukraine",
          CurrentProvinceCode: 993416,
          CurrentDistrictCode: 957886,
          CurrentWardCode: 682458,
          CurrentAddress: "881 East Mammoth Avenue Bridgewater, NJ 08807",
          DepartmentName: "Matthew",
          ProbationDate: "2019-06-12T10:31:40",
          HireDate: "1992-10-21T22:58:18",
          ReceiveDate: "1990-11-09T17:18:15",
          ResignationDate: "1981-03-28T04:53:44",
          WorkStatus: 349154,
        },
        {
          EmployeeID: "2046deb0-804b-447e-a511-1413d517788f",
          EmployeeCode: "j",
          FullName: "Deborah",
          DateOfBirth: "1985-12-25T22:20:49",
          Gender: 613359,
          GenderName: "Philip",
          IdentityNumber: "31",
          IdentityDate: "2016-04-10T07:16:32",
          IdentityPlace: null,
          IdentityPlaceID: 31,
          Email: "Diana.Voyles.25@live.ca",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Lila",
          EmployeeTypeID: 31,
          EmployeeTypeName: "Edna",
          IdentityKindOfPaperID: null,
          TaxCode: "lazy dogThe quick bro",
          ContractTypeID: 31,
          ContractTypeName: "Kim",
          NationalityID: 31,
          NativeCountryCode: 45322,
          NativeProvinceCode: 355313,
          NativeDistrictCode: 637361,
          NativeWardCode: 159345,
          NativeAddress: "15 North Glenridge Avenue Ada, OK 74820",
          CurrentCountryCode: 282511,
          CurrentCountryName: "Nauru",
          CurrentProvinceCode: 650660,
          CurrentDistrictCode: 65179,
          CurrentWardCode: 576863,
          CurrentAddress: "3 Water Street Kalamazoo, MI 49009",
          DepartmentName: "Kenneth",
          ProbationDate: "2000-02-26T11:56:57",
          HireDate: "1986-10-09T14:29:27",
          ReceiveDate: "1988-02-19T07:58:26",
          ResignationDate: "1989-01-27T11:03:04",
          WorkStatus: 361773,
        },
        {
          EmployeeID: "2063df58-2e75-4eb1-814e-4de5c2565f0a",
          EmployeeCode: "fox jumps o",
          FullName: "Samuel",
          DateOfBirth: "2005-07-06T11:54:25",
          Gender: 115423,
          GenderName: "Cadence",
          IdentityNumber: "19",
          IdentityDate: "2009-06-11T00:16:01",
          IdentityPlace: null,
          IdentityPlaceID: 19,
          Email: "Edward.Pickavance.69@yahoo.de",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Maureen",
          EmployeeTypeID: 19,
          EmployeeTypeName: "Karen",
          IdentityKindOfPaperID: null,
          TaxCode: "jumps over the lazy ",
          ContractTypeID: 19,
          ContractTypeName: "Charlene",
          NationalityID: 19,
          NativeCountryCode: 192423,
          NativeProvinceCode: 975737,
          NativeDistrictCode: 825483,
          NativeWardCode: 216058,
          NativeAddress: "902 New Saddle Lane Cape Coral, FL 33904",
          CurrentCountryCode: 79283,
          CurrentCountryName: "United Kingdom",
          CurrentProvinceCode: 417905,
          CurrentDistrictCode: 315295,
          CurrentWardCode: 343909,
          CurrentAddress: "22 East Temple Street Danville, VA 24540",
          DepartmentName: "Mavis",
          ProbationDate: "1995-02-05T13:46:31",
          HireDate: "1982-08-26T03:52:17",
          ReceiveDate: "1992-12-07T03:50:38",
          ResignationDate: "2008-03-11T16:47:15",
          WorkStatus: 676599,
        },
        {
          EmployeeID: "20730b43-e87a-438b-962a-aa94d485a95e",
          EmployeeCode: "dogThe quick brown",
          FullName: "Alaina",
          DateOfBirth: "2003-06-09T03:49:51",
          Gender: 307294,
          GenderName: "Charlotte",
          IdentityNumber: "8",
          IdentityDate: "1992-09-16T15:58:39",
          IdentityPlace: null,
          IdentityPlaceID: 8,
          Email: "Maria.Lukis.83@live.it",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Minna",
          EmployeeTypeID: 8,
          EmployeeTypeName: "Marjorie",
          IdentityKindOfPaperID: null,
          TaxCode: "The quick ",
          ContractTypeID: 8,
          ContractTypeName: "Amelia",
          NationalityID: 8,
          NativeCountryCode: 498100,
          NativeProvinceCode: 614523,
          NativeDistrictCode: 586510,
          NativeWardCode: 714080,
          NativeAddress: "4 Lilac Ave. Clarksville, TN 37040",
          CurrentCountryCode: 5988,
          CurrentCountryName: "Latvia",
          CurrentProvinceCode: 383459,
          CurrentDistrictCode: 64087,
          CurrentWardCode: 394474,
          CurrentAddress: "922 St Paul Road Findlay, OH 45840",
          DepartmentName: "Jolie",
          ProbationDate: "2008-11-16T09:56:30",
          HireDate: "1982-08-06T22:09:53",
          ReceiveDate: "2000-08-20T23:02:47",
          ResignationDate: "2001-12-11T18:26:58",
          WorkStatus: 367210,
        },
        {
          EmployeeID: "280393b4-5cea-4b97-a21e-07b36b0b94c0",
          EmployeeCode: "lazy dogThe q",
          FullName: "Colby",
          DateOfBirth: "1991-03-27T09:23:11",
          Gender: 182462,
          GenderName: "Imogen",
          IdentityNumber: "27",
          IdentityDate: "2015-02-03T07:19:56",
          IdentityPlace: null,
          IdentityPlaceID: 27,
          Email: "Jayne.Townsend.42@aim.com",
          PhoneNumber: null,
          Address: null,
          DepartmentId: "00000000-0000-0000-0000-000000000000",
          PositionId: 0,
          PositionName: "Cathleen",
          EmployeeTypeID: 27,
          EmployeeTypeName: "Angel",
          IdentityKindOfPaperID: null,
          TaxCode: "the lazy dogThe quick brown fox jumps",
          ContractTypeID: 27,
          ContractTypeName: "Maurice",
          NationalityID: 27,
          NativeCountryCode: 895935,
          NativeProvinceCode: 849922,
          NativeDistrictCode: 366892,
          NativeWardCode: 596157,
          NativeAddress: "841 Primrose St. Alabaster, AL 35007",
          CurrentCountryCode: 386803,
          CurrentCountryName: "The Bahamas",
          CurrentProvinceCode: 665025,
          CurrentDistrictCode: 585047,
          CurrentWardCode: 350927,
          CurrentAddress: "90 Cross Avenue Bedford, OH 44146",
          DepartmentName: "Joey",
          ProbationDate: "1996-05-27T09:49:26",
          HireDate: "2018-10-09T15:14:28",
          ReceiveDate: "2017-04-25T17:51:23",
          ResignationDate: "1983-12-24T11:06:12",
          WorkStatus: 677099,
        },
      ],
      columns: MISAResource.VN.ColumnsTableHeader,
      isDraggableMenuVisible: false,
      tableRef,
    };
  },
  // watch columns change
  watch: {
    columns: function (newVal) {
      console.log(newVal);
    },
  },
  computed: {
    /* Độ dài mảng chứa các dòng được chọn */
    checkedIdsLength() {
      return this.checkedIds.length;
    },
  },
  components: {
    ListPersonTableHeader,
    MTable,
    Pagination,
    SelectedTableHeader,
    DraggableMenu,
  },

  methods: {
    /**
     * Xử lí khi thêm id vào mảng
     * @param {*} ids - Danh sách id được check
     * Created by: dgbao (17/08/2023)
     * */
    handleCheckedIds(ids) {
      this.checkedIds = ids;
      console.log(this.checkedIds);
    },
    /**
     * Xử lí xoá tất cả các selection
     * Created by: dgbao (17/08/2023)
     * */
    handleDeselect() {
      this.$refs["tableRef"].$refs.dataGrid.$_instance.clearSelection();
    },
    /**
     * Xử lí khi thay đổi vị trí cột
     * Render lại dữ liệu các cột
     * Created by: dgbao (17/08/2023)
     * */
    handleChangePin(data) {
      this.columns = data;
      this.isDraggableMenuVisible = false;
    },

    /**
     * Xử lí khi click vào nút hiển thị menu draggable
     * Created by: dgbao (17/08/2023)
     * */
    handleToggleDraggableMenu() {
      this.isDraggableMenuVisible = !this.isDraggableMenuVisible;
    },

    /**
     * Xử lí khi click vào nút mặc định trong setting
     * Created by: dgbao (17/08/2023)
     * */
    handleDefaultSetting() {
      this.columns = defaultColumns;
      this.isDraggableMenuVisible = false;
    },
  },

  onCreated() {
    console.log("onCreated");
  },
};
</script>

<style lang="scss">
.page {
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;

  .table__container {
    height: calc(100% - 60px - 96px);
    overflow: auto;
    flex: 1;
  }
}

#draggable-container {
  width: 340px;
  height: 470px;
  position: fixed;
  top: 170px;
  right: 40px;
  z-index: 11;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}
</style>
