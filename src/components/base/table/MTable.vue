<!-- eslint-disable vue/no-unused-vars -->
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
        <slot :name="data.column.dataField">
          {{ data.value }}
        </slot>
      </template>

      <template #title-header="{ data }">
        <div class="header__cell__container">
          <p style="font-size: 14px" class="">{{ data.column.caption }}</p>
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
        <div class="ms-table__action-container">
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
              title="Lưu"
              style="height: 36px; width: 36px; display: none"
            >
              <span class="v-btn__content"
                ><i
                  aria-hidden="true"
                  class="v-icon notranslate mi mi-save-edit theme--light"
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
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxScrolling,
  DxTemplate,
} from "devextreme-vue/data-grid";

import { mapActions } from "vuex";

const dataGridRef = "dataGrid";

export default {
  components: {
    DxDataGrid,
    /* eslint-disable */
    DxColumn,
    DxSelection,
    DxScrolling,
    DxTemplate,
  },
  props: ["dataSource", "columns", "canSelect"],
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
  methods: {
    ...mapActions("global", ["showNotification"]),
    ...mapActions("employee", ["setFormMode", "setCurrentEmployeeId"]),
    /**
     * Hàm lấy dữ liệu các dòng được chọn và emit kèm theo danh sách chứa các ids của các dòng được chọn
     * Created by: dgbao (17/08/2023)
     */
    getSelectedData() {
      let checkIds = this.dataGrid
        .getSelectedRowsData()
        .map((item) => item.EmployeeID);
      this.$emit("onselected", checkIds);
    },

    /**
     * Xử lí sự kiện khi click vào nút ghim cột
     * @param data - dữ liệu cột
     * Created by: dgbao (17/08/2023)
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
     * @param id - id của dòng được click
     * Created by: dgbao (17/08/2023)
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
     * Mở form view chi tiết nhân viên
     * @param {*} event
     * Created by: dgbao (17/08/2023)
     */
    openFormView(event) {
      this.setFormMode("view");
      let key = event.key;
      this.setCurrentEmployeeId(key);

      this.$router.push(`/tax/view`);
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
