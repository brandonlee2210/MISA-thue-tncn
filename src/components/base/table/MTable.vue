<template>
  <div id="table-container">
    <DxDataGrid
      :data-source="dataSource"
      :allow-column-reordering="false"
      key-expr="EmployeeID"
      :column-auto-width="true"
      :allow-column-resizing="true"
      column-resizing-mode="widget"
      :show-column-lines="false"
      :showCheckBoxesMode="true"
      :ref="dataGridRef"
      :hoverStateEnabled="true"
      @selection-changed="getSelectedData"
      :onCellDblClick="openFormView"
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
          <p style="font-size: 14px" class="" :id="data.column.dataField">
            {{ data.column.caption }}
          </p>
          <DxTooltip
            :hide-on-outside-click="false"
            target="#IdentityNumber"
            show-event="mouseenter"
            hide-event="mouseleave"
          >
            Số chứng minh nhân dân/ Căn cước công dân/ Hộ chiếu
          </DxTooltip>
          <div
            :class="[
              'misa-hidden-pin ico-un-pin misa-display-pin pin-location-right',
              { 'ico-pin': data.columnIndex == pinColumnIndex },
            ]"
            @click="handleChangePin(data)"
          ></div>
        </div>
      </template>

      <!-- context menu -->
      <DxColumn
        cell-template="cellTemplate"
        css-class="ms-table__action-column"
      />
      <template #cellTemplate="{ data }">
        <div class="ms-table__action-container" v-if="isContextMenuVisible">
          <div class="d-flex align-center action-container dx-template-wrapper">
            <div class="mr-3">
              <button
                type="button"
                class="action-button v-btn v-btn--has-bg v-btn--rounded theme--light v-size--small b-info b-info"
                title="Mở trên cửa sổ mới"
                style="height: 36px; width: 36px"
              >
                <span class="v-btn__content"
                  ><i
                    aria-hidden="true"
                    class="v-icon notranslate mi mi-open-new-tab theme--light"
                  ></i
                ></span>
              </button>
            </div>
            <button
              type="button"
              class="mr-3 action-button v-btn v-btn--has-bg v-btn--rounded theme--light v-size--small b-info b-info"
              title="Chỉnh sửa"
              style="height: 36px; width: 36px"
              @click="openEditForm(data)"
            >
              <span class="v-btn__content"
                ><i
                  aria-hidden="true"
                  class="v-icon notranslate ico ico-edit-table-row theme--light"
                ></i
              ></span></button
            ><button
              type="button"
              class="mr-3 action-button v-btn v-btn--has-bg v-btn--rounded theme--light v-size--small b-info b-info"
              title="Xóa"
              style="height: 36px; width: 36px"
              @click="deleteRow(data)"
            >
              <span class="v-btn__content"
                ><i
                  aria-hidden="true"
                  class="v-icon notranslate ico ico-delete-table-row theme--light"
                ></i
              ></span>
            </button>
          </div>
        </div>
      </template>
      <!-- context menu -->

      <DxSelection
        v-if="canSelect"
        :select-all-mode="allMode"
        :show-check-boxes-mode="checkBoxesMode"
        mode="multiple"
        :fixed="false"
      />
    </DxDataGrid>
  </div>
</template>

<script>
// ...
import { POPUP_FORM_MODE } from "@/helpers/enums";
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxScrolling,
  DxTemplate,
} from "devextreme-vue/data-grid";

import { mapActions } from "vuex";

import { DxTooltip } from "devextreme-vue/tooltip";

const dataGridRef = "dataGrid";

export default {
  components: {
    DxDataGrid,
    /* eslint-disable */
    DxColumn,
    DxSelection,
    DxScrolling,
    DxTemplate,
    DxTooltip,
  },
  props: [
    "dataSource",
    "columns",
    "canSelect",
    "isContextMenuVisible",
    "canDbClick",
  ],
  data() {
    return {
      dataGridRef,
      allMode: "allPages",
      checkBoxesMode: "onClick",
    };
  },
  computed: {
    // Lấy ra instance của dxDataGrid
    dataGrid: function () {
      return this.$refs[dataGridRef].instance;
    },
    // Lấy ra index của cột ghim
    pinColumnIndex: function () {
      let maxFixedIndex = 0;
      for (let i = 0; i < this.columns.length; i++) {
        if (this.columns[i].fixed == true) {
          maxFixedIndex = i + 1;
        }
      }

      return maxFixedIndex;
    },
    // Lấy ra danh sách các cột được check
    localColumns: {
      get() {
        return this.columns.filter((item) => item.checked);
      },
    },
  },
  mounted() {
    // this.dataGrid.option("columns", this.columns);
    this.setTableRef(this.dataGrid);
  },
  methods: {
    ...mapActions("global", ["showNotification"]),
    ...mapActions("employee", [
      "setFormMode",
      "setCurrentEmployeeId",
      "setSelectedRows",
      "setTableRef",
    ]),
    ...mapActions("relative", ["setPopupFormMode"]),
    /**
     * Hàm lấy dữ liệu các dòng được chọn và emit kèm theo danh sách chứa các ids của các dòng được chọn
     * @author dgbao (17/08/2023)
     */
    getSelectedData() {
      let checkedList = this.dataGrid.getSelectedRowsData();

      this.setSelectedRows(checkedList);
      this.$emit("onselected", checkedList);
    },

    /**
     * Xử lí sự kiện khi click vào nút ghim cột
     * @param data - dữ liệu cột
     * @author dgbao (17/08/2023)
     * */
    handleChangePin(data) {
      let localColumns;
      // Nếu cột được click là cột ghim thì bỏ ghim
      if (data.columnIndex == this.pinColumnIndex) {
        localColumns = this.columns.map((item, index) => {
          if (index <= data.columnIndex) {
            item.fixed = false;
          }

          return item;
        });
      } else {
        // Nếu cột được click không phải là cột ghim thì set fixed tất cả các cột từ cột ghim trở về trước thành true
        localColumns = this.columns.map((item, index) => {
          if (index + 1 <= data.columnIndex) {
            item.fixed = true;
          } else {
            item.fixed = false;
          }

          return item;
        });
      }

      // Gửi lên list mới
      this.$emit("change-pin", localColumns);
    },
    /**
     * Xử lí sự kiện khi click vào nút xóa
     * @param data - data của dòng được click
     * @author dgbao (17/08/2023)
     */
    deleteRow(data) {
      this.showNotification({
        title: "Xoá người nộp thuế",
        type: "delete",
        rawHtml: `Bạn có chắc chắn muốn xóa người nộp thuế
            <strong>${data.data.FullName}</strong> vào thùng rác?`,
        idToDelete: data.key,
      });
    },
    /**
     * Xử lí sự kiện khi click vào nút chỉnh sửa
     * @param data - data của dòng được click
     * @author dgbao (17/08/2023)
     */
    openEditForm(data) {
      this.setFormMode("edit");
      this.setPopupFormMode(POPUP_FORM_MODE.INDIRECT);
      let key = data.key;
      this.setCurrentEmployeeId(key);

      this.$router.push(`/tax/add`);
    },
    /**
     * Mở form view chi tiết nhân viên
     * @param {*} event
     * @author dgbao (17/08/2023)
     */
    openFormView(event) {
      if (this.canDbClick) {
        this.setFormMode("view");
        // this.setPopupFormMode(POPUP_FORM_MODE.DIRECT);
        let key = event.key;
        this.setCurrentEmployeeId(key);

        this.$router.push(`/tax/view`);
      }
    },
  },
  // ...
};
</script>

<style lang="scss" scoped>
@import url(../../../assets/style/base/table/MTable.scss);

#table-container {
  height: 100%;
}

.dx-datagrid .dx-row > td {
  border-top: 1px solid #e4e4e4;
}

/* Add borders to headers */
.dx-datagrid .dx-header-row > td {
  border-top: 1px solid #e4e4e4;
}
</style>
