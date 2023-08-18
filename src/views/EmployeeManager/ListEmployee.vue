<template>
  <div class="employee-page" :class="{ narrow: isBlockContentVisible }">
    <ListEmployeeTableHeader
      v-if="checkedIdsLength == 0"
      @toggle-draggable-menu="handleToggleDraggableMenu"
    />
    <EmployeeSelectedTableHeader
      v-else
      :length="checkedIdsLength"
      v-on:deselect="handleDeselect"
      v-on:select-all="handleSelectAll"
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
import MISAResource from "@/helpers/resource";
import DraggableMenu from "@/components/base/draggable/DraggableMenu.vue";
import ListEmployeeTableHeader from "./ListEmployeeTableHeader.vue";
import EmployeeSelectedTableHeader from "./EmployeeSelectedTableHeader.vue";

const tableRef = "tableRef";

let defaultColumns = MISAResource.VN.ColumnsTableHeader;

export default {
  name: "ListEmployee",
  components: {
    MTable,
    Pagination,
    ListEmployeeTableHeader,
    EmployeeSelectedTableHeader,
    DraggableMenu,
  },
  props: ["isBlockContentVisible"],
  data() {
    return {
      checkedIds: [],
      dataSource: [
        {
          ID: 1,
          EmployeeCode: "John",
          Gender: "Nam",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 2,
          EmployeeCode: "John",
          Gender: "Nam",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 3,
          EmployeeCode: "John",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 4,
          EmployeeCode: "John",
          FullName: "Dinh gia Bao",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 5,
          EmployeeCode: "John",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 6,
          EmployeeCode: "John",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 7,
          EmployeeCode: "John",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "jheart@dx-email.com",
          Skype: "jheartDXskype",
          HomePhone: "(213) 555-9208",
          DepartmentID: 6,
          MobilePhone: "(213) 555-9392",
        },
        {
          ID: 8,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
          BirthDate: "1964/03/16",
          HireDate: "1995/01/15",
          Title: "Mr.",
          Address: "351 S Hill St.",
          City: "Los Angeles",
          State: "California",
          Zipcode: 90013,
          Email: "",
        },
        {
          ID: 9,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
        {
          ID: 10,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
        {
          ID: 11,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
        {
          ID: 12,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
        {
          ID: 13,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
        {
          ID: 14,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
        {
          ID: 15,
          EmployeeCode: "Nguyen van chien",
          FullName: "Heart",
          Position: "CEO",
        },
      ],
      columns: [
        {
          id: 1,
          caption: "Mã nhân viên",
          dataField: "EmployeeCode",
          width: "162",
          checked: true,
          fixed: false,
          disabled: true,
        },
        {
          checked: true,
          fixed: false,
          id: 2,
          caption: "Họ và tên",
          dataField: "FullName",
          width: "211",
        },
        {
          caption: "Vị trí công việc",
          checked: true,
          dataField: "PositionName",
          width: "200",
        },
        {
          caption: "Bộ phận/Phòng ban",
          dataField: "DepartmentName",
          width: "260",
          checked: true,
        },

        {
          checked: true,
          caption: "Loại đối tượng",
          dataField: "EmployeeType",
          width: "200",
        },

        {
          checked: true,
          caption: "Trạng thái làm việc",
          dataField: "WorkStatus",
          width: "200",
        },
        {
          checked: true,
          caption: "Trạng thái sử dụng dịch vụ",
          dataField: "ServiceStatus",
          width: "200px",
        },
      ],
      isDraggableMenuVisible: false,
      tableRef,
    };
  },
  computed: {
    /* Độ dài mảng chứa các dòng được chọn */
    checkedIdsLength() {
      return this.checkedIds.length;
    },
  },
  methods: {
    /**
     * Xử lí khi thêm id vào mảng
     * @param {*} ids - Danh sách id được check
     * Created by: dgbao (17/08/2023)
     * */
    handleCheckedIds(ids) {
      this.checkedIds = ids;
    },
    /**
     * Xử lí xoá tất cả các selection
     * Created by: dgbao (17/08/2023)
     * */
    handleDeselect() {
      this.$refs["tableRef"].$refs.dataGrid.$_instance.clearSelection();
    },
    handleSelectAll() {
      this.$refs["tableRef"].$refs.dataGrid.$_instance.selectAll();
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
};
</script>

<style lang="scss" scoped>
.employee-page {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  .table__container {
    overflow: auto;
    height: 606px;

    .dx-datagrid.dx-gridbase-container {
      height: calc(100vh - 342px) !important;
    }
  }
}

.narrow {
  .table__container {
    height: 476px;
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
