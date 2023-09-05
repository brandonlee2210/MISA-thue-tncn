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
      <m-loading v-if="isLoading" />
      <MTable
        v-on:onselected="handleCheckedIds"
        ref="tableRef"
        @change-pin="handleChangePin"
        :canSelect="true"
        :dataSource="employees"
        :columns="columns"
      >
        <template #UsageStatus="{ value }">
          <MChip :label="value" :column="'UsageStatus'" />
        </template>
        <template #WorkStatus="{ value }">
          <MChip :label="value" :column="'WorkStatus'" />
        </template>
      </MTable>
    </div>
    <Pagination :totalEmployee="20" />
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

import { mapState, mapActions } from "vuex";
import MChip from "@/components/base/MChip.vue";

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
    MChip,
  },
  props: ["isBlockContentVisible"],
  data() {
    return {
      checkedIds: [],

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
          width: "191",
        },
        {
          caption: "Bộ phận/Phòng ban",
          dataField: "DepartmentName",
          width: "260",
          checked: true,
        },
        {
          caption: "Vị trí công việc",
          checked: true,
          dataField: "JobPositionName",
          width: "160",
        },

        {
          checked: true,
          caption: "Loại đối tượng",
          dataField: "EmployeeTypeName",
          width: "150",
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
          dataField: "UsageStatus",
        },
      ],
      isDraggableMenuVisible: false,
      tableRef,
    };
  },
  computed: {
    ...mapState("employee", ["employees"]),
    ...mapState("global", ["isLoading"]),
    /* Độ dài mảng chứa các dòng được chọn */
    checkedIdsLength() {
      return this.checkedIds.length;
    },
    totalEmployee() {
      return this.dataSource.length;
    },
  },
  methods: {
    ...mapActions("employee", ["getListEmployees"]),
    ...mapActions("global", ["showLoading", "hideLoading"]),
    /**
     * Xử lí khi thêm id vào mảng
     * @param {*} ids - Danh sách id được check
     * @author dgbao (17/08/2023)
     * */
    handleCheckedIds(ids) {
      this.checkedIds = ids;
    },
    /**
     * Xử lí xoá tất cả các selection
     * @author dgbao (17/08/2023)
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
     * @author dgbao (17/08/2023)
     * */
    handleChangePin(data) {
      this.columns = data;
      this.isDraggableMenuVisible = false;
    },

    /**
     * Xử lí khi click vào nút hiển thị menu draggable
     * @author dgbao (17/08/2023)
     * */
    handleToggleDraggableMenu() {
      this.isDraggableMenuVisible = !this.isDraggableMenuVisible;
    },

    /**
     * Xử lí khi click vào nút mặc định trong setting
     * @author dgbao (17/08/2023)
     * */
    handleDefaultSetting() {
      this.columns = defaultColumns;
      this.isDraggableMenuVisible = false;
    },
  },
  created() {
    const getEmployeesData = async () => {
      this.showLoading();
      await this.getListEmployees();
      this.hideLoading();
    };
    getEmployeesData();
  },
};
</script>

<style lang="scss" scoped>
.employee-page {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  .table__container {
    position: relative;
    overflow: auto;

    .dx-datagrid.dx-gridbase-container {
      height: calc(100vh - 342px) !important;
    }
  }
}

.narrow {
  .table__container {
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
