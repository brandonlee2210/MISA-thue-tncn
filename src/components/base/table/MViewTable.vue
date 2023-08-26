<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div id="table-container">
    <DxDataGrid
      :data-source="dataSource"
      :allow-column-reordering="false"
      key-expr="RelativeID"
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
        <slot :name="data.column.dataField">
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
              title="Lưu"
              style="height: 36px; width: 36px; display: none"
            >
              <span class="v-btn__content"
                ><i
                  data-v-1090f892=""
                  aria-hidden="true"
                  class="v-icon notranslate mi mi-save-edit theme--light"
                ></i
              ></span></button
            ><button
              data-v-1090f892=""
              type="button"
              class="mr-3 action-button v-btn v-btn--has-bg v-btn--rounded theme--light v-size--small b-info b-info"
              title="Hủy"
              style="height: 36px; width: 36px; display: none"
            >
              <span class="v-btn__content"
                ><i
                  data-v-1090f892=""
                  aria-hidden="true"
                  class="v-icon notranslate mi mi-close-red theme--light"
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
  },
  methods: {
    /**
     * Hàm lấy dữ liệu các dòng được chọn và emit kèm theo danh sách chứa các ids của các dòng được chọn
     * Created by: dgbao (17/08/2023)
     */
    getSelectedData() {
      let checkIds = this.dataGrid.getSelectedRowsData().map((item) => item.ID);
      this.$emit("onselected", checkIds);
    },

    /**
     * Xử lí sự kiện khi click vào nút ghim cột
     * @param data - dữ liệu cột
     * Created by: dgbao (17/08/2023)
     * */

    test(data) {
      console.log(data);
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
