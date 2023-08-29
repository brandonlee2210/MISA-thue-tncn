<template>
  <div class="page">
    <ListPersonTableHeader
      v-if="checkedIdsLength == 0"
      @toggle-draggable-menu="handleToggleDraggableMenu"
    />
    <SelectedTableHeader
      v-else
      :length="checkedIdsLength"
      :checkedIds="checkedIds"
      v-on:deselect="handleDeselect"
    />
    <div class="table__container">
      <m-loading v-if="isLoading" />
      <MTable
        v-else-if="!isLoading && employees.length > 0"
        v-on:onselected="handleCheckedIds"
        ref="tableRef"
        @change-pin="handleChangePin"
        :dataSource="employees"
        :columns="columns"
        :canSelect="true"
        :isContextMenuVisible="true"
      >
        <template #WorkStatus="{ value }">
          <MChip :label="value" :column="'WorkStatus'" />
        </template>
      </MTable>
      <MEmptyData v-else />
    </div>
    <Pagination listType="person" />
    <div id="draggable-container" v-if="isDraggableMenuVisible">
      <DraggableMenu
        :list="columns"
        @save="handleChangePin"
        @default="handleDefaultSetting"
      />
    </div>
    <MFilter> </MFilter>
  </div>
</template>

<script>
import MTable from "@/components/base/table/MTable.vue";
import Pagination from "@/components/base/pagination/Pagination.vue";
import ListPersonTableHeader from "./ListPersonTableHeader.vue";
import SelectedTableHeader from "./SelectedTableHeader.vue";
import MISAResource from "@/helpers/resource";
import DraggableMenu from "@/components/base/draggable/DraggableMenu.vue";
import MFilter from "@/components/filter/MFilter.vue";
import MChip from "@/components/base/MChip.vue";
import MEmptyData from "@/components/base/MEmptyData.vue";

import { mapActions, mapState } from "vuex";

const tableRef = "tableRef";

let defaultColumns = MISAResource.VN.ColumnsTableHeader;

export default {
  data() {
    return {
      checkedIds: [],
      columns: MISAResource.VN.ColumnsTableHeader,
      isDraggableMenuVisible: false,
      tableRef,
      startDate: null,
      endDate: null,
    };
  },
  // watch columns change
  watch: {
    columns: function (newVal) {
      console.log(newVal);
    },
    startDate(newValue) {
      console.log(newValue);
    },
  },
  computed: {
    ...mapState("employee", ["employees"]),
    ...mapState("global", ["isLoading"]),
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
    MFilter,
    MChip,
    MEmptyData,
  },

  methods: {
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
    ...mapActions("employee", ["getListPerson"]),
    ...mapActions("global", ["showLoading", "hideLoading"]),
  },

  /**
   * Lấy danh sách người nộp thuế
   * @author dgbao (17/08/2023)
   * */
  created() {
    const getListPerson = async () => {
      this.showLoading();
      await this.getListPerson();
      this.hideLoading();
    };

    getListPerson();
  },
  mounted() {
    // const childComponent = this.$refs.tableRef.$refs.dataGrid.$_instance;
    // const childScope = childComponent;

    // Access child component's scope
    console.log(this.$refs);
  },
};
</script>

<style lang="scss">
.page {
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;

  .table__container {
    position: relative;
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
