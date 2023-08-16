<template>
  <div id="table-container">
    <DxDataGrid
      :data-source="dataSource"
      :allow-column-reordering="true"
      key-expr="ID"
      :column-auto-width="true"
      :allow-column-resizing="true"
      :show-column-lines="false"
      :showCheckBoxesMode="true"
      :ref="dataGridRef"
      @selection-changed="getSelectedData"
    >
      <!-- <DxColumn data-field="FullName" :width="'300'" :fixed="true"></DxColumn> -->
      <DxColumn
        :height="88"
        v-for="(item, index) in resource.VN.ColumnsTableHeader"
        :data-field="item.dataIndex"
        :caption="item.title"
        :width="item.width"
        :key="index"
      />
      <!-- <DxColumn data-field="title" /> -->

      <DxSelection
        :select-all-mode="allMode"
        :show-check-boxes-mode="checkBoxesMode"
        mode="multiple"
      />

      <DxScrolling mode="virtual" />
    </DxDataGrid>
    <DropDown />
  </div>
</template>

<script>
// ...
import {
  DxDataGrid,
  DxColumn,
  DxSelection,
  DxScrolling,
} from "devextreme-vue/data-grid";
import MISAResource from "@/helpers/resource";
import DropDown from "@/components/base/dropdown/DropDown.vue";

const dataGridRef = "dataGrid";

export default {
  components: {
    DxDataGrid,
    /* eslint-disable */
    DxColumn,
    DxSelection,
    DxScrolling,
    DropDown,
  },
  data() {
    return {
      dataGridRef,
      allMode: "allPages",
      checkBoxesMode: "onClick",
      resource: MISAResource,

      // generate data source sample
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
    };
  },
  computed: {
    dataGrid: function () {
      return this.$refs[dataGridRef].instance;
    },
  },
  methods: {
    getSelectedData() {
      console.log(this.dataGrid.getSelectedRowsData());
    },
    selectAll() {
      getSelectedData();
    },
  },
  // ...
};
</script>

<style lang="scss">
@import url(./MTable.scss);

.dx-datagrid .dx-row > td {
  border-top: 1px solid #e4e4e4;
}

/* Add borders to headers */
.dx-datagrid .dx-header-row > td {
  border-top: 1px solid #e4e4e4;
}
</style>
