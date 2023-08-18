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
