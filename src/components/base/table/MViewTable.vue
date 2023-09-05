<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div id="table-container">
    <DxDataGrid
      :data-source="dataSourcesFormatted"
      :allow-column-reordering="false"
      key-expr="RelativeInformationID"
      :column-auto-width="true"
      scrolling="never"
      :show-column-lines="false"
      :showCheckBoxesMode="true"
      :ref="dataGridRef"
      :hoverStateEnabled="true"
      @selection-changed="getSelectedData"
    >
      <DxColumn
        :height="88"
        v-for="(item, index) in localColumns"
        :key="index"
        v-bind="item"
        header-cell-template="title-header"
        cell-template="workStatusCellTemplate"
      />

      <template #workStatusCellTemplate="{ data }">
        <slot :name="data.column.dataField" :value="data.value">
          {{ data.value }}
        </slot>
      </template>

      <template #title-header="{ data }">
        <div class="header__cell__container">
          <p style="font-size: 14px" class="">{{ data.column.caption }}</p>
        </div>
      </template>

      <!-- context menu -->
      <DxColumn
        cell-template="cellTemplate"
        css-class="ms-view-table__action-column"
      />
      <template #cellTemplate="{ data }">
        <div class="ms-view-table__action-container">
          <div class="d-flex align-center action-container dx-template-wrapper">
            <button
              type="button"
              class="mr-3 action-button v-btn v-btn--has-bg v-btn--rounded theme--light v-size--small b-info b-info"
              title="Chỉnh sửa"
              style="height: 36px; width: 36px"
              @click="openEditForm(data)"
            >
              <span class="v-btn__content"
                ><i
                  data-v-1090f892=""
                  aria-hidden="true"
                  class="v-icon notranslate ico ico-edit-table-row theme--light"
                ></i
              ></span></button
            ><button
              data-v-1090f892=""
              type="button"
              class="mr-3 action-button v-btn v-btn--has-bg v-btn--rounded theme--light v-size--small b-info b-info"
              title="Xóa"
              style="height: 36px; width: 36px"
              @click="deleteRow(data)"
            >
              <span class="v-btn__content"
                ><i
                  data-v-1090f892=""
                  aria-hidden="true"
                  class="v-icon notranslate ico ico-delete-table-row theme--light"
                ></i
              ></span>
            </button>
          </div>
        </div>
      </template>
      <!-- context menu -->
      <DxScrolling :mode="allMode" show-scrollbar="never" />
    </DxDataGrid>
  </div>
</template>

<script>
// ...
import {
  DxDataGrid,
  DxColumn,
  DxTemplate,
  DxScrolling,
} from "devextreme-vue/data-grid";

import { formatDate } from "@/helpers/utils";
import { mapState, mapActions } from "vuex";
import { EDIT_MODE, POPUP_FORM_MODE } from "@/helpers/enums";

const dataGridRef = "dataGrid";

export default {
  components: {
    DxDataGrid,
    /* eslint-disable */
    DxColumn,
    DxScrolling,
    DxTemplate,
  },
  props: ["dataSource", "columns"],
  data() {
    return {
      dataGridRef,
      allMode: "allPages",
      checkBoxesMode: "onClick",
    };
  },
  computed: {
    ...mapState("relative", ["popupForMode"]),
    ...mapState("employee", ["formMode"]),
    // Lấy ra instance của dxDataGrid
    dataGrid: function () {
      return this.$refs[dataGridRef].instance;
    },
    // Lấy ra danh sách các cột được check
    localColumns: {
      get() {
        return this.columns.filter((item) => item.checked);
      },
    },
    dataSourcesFormatted() {
      return this.dataSource.map((item) => {
        return {
          ...item,
          DateOfBirth: formatDate(item.DateOfBirth),
          DeductionStartDate: formatDate(item.DeductionStartDate),
          DeductionEndDate: formatDate(item.DeductionEndDate),
        };
      });
    },
  },
  methods: {
    ...mapActions("global", ["showNotification", "openFormPopup"]),
    ...mapActions("relative", [
      "setCurrentRelative",
      "setEditMode",
      "setPopupFormMode",
    ]),
    ...mapActions("employee", ["setFormMode"]),
    /**
     * Hàm lấy dữ liệu các dòng được chọn và emit kèm theo danh sách chứa các ids của các dòng được chọn
     * @author dgbao (17/08/2023)
     */
    getSelectedData() {
      let checkIds = this.dataGrid.getSelectedRowsData().map((item) => item.ID);
      this.$emit("onselected", checkIds);
    },

    /**
     * Xử lí sự kiện khi click vào nút xoá thành viên gia đình
     * @param data - dữ liệu cột
     * @author dgbao (17/08/2023)
     * */

    deleteRow(data) {
      let type;

      if (this.formMode === "view") {
        type = "delete-relative";
      } else {
        type = "delete-relative-indirect";
      }

      this.showNotification({
        title: "Xoá người nộp thuế",
        type,
        rawHtml: `Bạn có chắc chắn muốn xóa thành viên
            <strong>${data.data.FullName}</strong> vào thùng rác?`,
        idToDelete: data.key,
      });
    },

    /**
     * Xử lí sự kiện khi click vào nút chỉnh sửa thành viên gia đình
     * @param data - dữ liệu cột
     * @author dgbao (17/08/2023)
     * */
    openEditForm(data) {
      if (this.formMode === "view") {
        this.setEditMode(EDIT_MODE.EDIT);
        this.setPopupFormMode(POPUP_FORM_MODE.DIRECT);
        this.setCurrentRelative(data.key);
        this.openFormPopup();
        return;
      } else {
        this.setFormMode("edit");
        this.setEditMode(EDIT_MODE.EDIT);
        this.setCurrentRelative(data.key);
        this.openFormPopup();
      }
    },
  },
  // ...
};
</script>

<style lang="scss" scoped>
@import url(../../../assets/style/base/table/MViewTable.scss);

#table-container {
  height: 100%;
  width: 100%;
}

.dx-datagrid .dx-row > td {
  border-top: 1px solid #e4e4e4;
}

/* Add borders to headers */
.dx-datagrid .dx-header-row > td {
  border-top: 1px solid #e4e4e4;
}
</style>
