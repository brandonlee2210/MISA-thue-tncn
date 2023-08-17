<template>
  <div class="page">
    <ListPersonTableHeader v-if="checkedIdsLength == 0" />
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
  </div>
</template>

<script>
import MTable from "@/components/base/table/MTable.vue";
import Pagination from "@/components/base/pagination/Pagination.vue";
import ListPersonTableHeader from "./ListPersonTableHeader.vue";
import SelectedTableHeader from "./SelectedTableHeader.vue";
import MISAResource from "@/helpers/resource";

const tableRef = "tableRef";

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
      tableRef,
    };
  },
  computed: {
    checkedIdsLength() {
      return this.checkedIds.length;
    },
  },
  components: {
    ListPersonTableHeader,
    MTable,
    Pagination,
    SelectedTableHeader,
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
    handleChangePin(data) {
      this.columns = data;
    },
  },
};
</script>

<style lang="scss">
.page {
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
}
.table__container {
  height: 100%;
  overflow: auto;
  flex: 1;
}
</style>
