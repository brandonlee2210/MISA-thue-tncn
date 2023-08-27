<template>
  <div class="pagination-container">
    <div
      class="row ma-0 py-0 px-4 d-flex align-center misa-container-base--paging-table"
    >
      <div class="ma-0 pa-0 col col-6">
        <span class="text-lg-body-2">
          Tổng số:
          <span class="text-lg-subheader">{{ totalRecord }}</span> bản ghi
        </span>
      </div>
      <div class="ma-0 pa-0 d-flex align-center justify-end col col-6">
        <span class="text-lg-body-2">Số bản ghi/trang</span>
        <div class="container-page-size ml-2 mr-4">
          <div
            class="row misa-container-base--select d-flex align-center ma-0 pa-0"
          >
            <div data-v-3519a28f="" class="ma-0 pa-0 col col-12">
              <dx-select-box
                :items="items"
                :displayExpr="'text'"
                :valueExpr="'id'"
                :value="selectedItem"
                :searchEnabled="true"
                :searchExpr="['text']"
                :noDataText="'Không có dữ liệu'"
                @valueChanged="handleSetPageSize"
              ></dx-select-box>
            </div>
          </div>
        </div>
        <span class="text-lg-body-2 ml-2"
          ><span class="text-lg-subheader"> {{ currentRecords }} </span>
          bản ghi
        </span>
        <button
          type="button"
          :class="[
            'ml-2 v-btn prev v-btn--has-bg v-size--default b-transparent',
            { 'v-btn--disabled': isPrevDisabled },
          ]"
          :disabled="isPrevDisabled"
          style="height: 36px"
          @click="handlePrevClick"
        >
          <span class="v-btn__content"
            ><i class="v-icon notranslate ico ico-prev-page"></i
          ></span>
        </button>
        <button
          type="button"
          :class="[
            'v-btn next v-btn--has-bg v-size--default b-transparent b-transparent',
            { 'v-btn--disabled': isNextDisabled },
          ]"
          style="height: 36px"
          @click="handleNextClick"
          :disabled="isNextDisabled"
        >
          <span class="v-btn__content"
            ><i class="v-icon notranslate ico ico-next-page"></i
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { DxSelectBox } from "devextreme-vue/select-box";
import { mapState, mapActions } from "vuex";

export default {
  name: "DropDown",
  components: {
    DxSelectBox,
  },
  props: ["totalEmployee", "listType"],
  computed: {
    ...mapState("employee", [
      "pageSize",
      "pageNumber",
      "totalPage",
      "totalRecord",
    ]),
    currentRecords() {
      return `${1 + (this.pageNumber - 1) * this.pageSize} - ${
        this.pageSize * this.pageNumber
      }`;
    },
    isPrevDisabled() {
      return this.pageNumber == 1;
    },
    isNextDisabled() {
      return this.pageNumber == this.totalPage;
    },
  },
  data() {
    return {
      selectedItem: 15,
      items: [
        {
          id: 15,
          text: "15",
        },
        {
          id: 2,
          text: "2",
        },
        {
          id: 50,
          text: "50",
        },
        {
          id: 100,
          text: "100",
        },
      ],
    };
  },
  methods: {
    ...mapActions("employee", [
      "setPageSize",
      "setPageNumber",
      "getListPerson",
      "getListEmployees",
      "setPageSize",
      "setPageNumber",
    ]),
    ...mapActions("global", ["showLoading", "hideLoading"]),

    /**
     * Xử lý sự kiện click vào nút lùi trang
     * @author dgbao (25/08/2023)
     */
    handlePrevClick() {
      this.setPageNumber(this.pageNumber - 1);
      this.getData();
    },

    /**
     * Xử lý sự kiện click vào nút next
     * @author dgbao (25/08/2023)
     */
    handleNextClick() {
      this.setPageNumber(this.pageNumber + 1);
      this.getData();
    },

    /**
     * Set số bản ghi/trang
     * @param {*} e
     * @author dgbao (25/08/2023)
     */
    handleSetPageSize(e) {
      this.selectedItem = e.value;
      this.setPageNumber(1);
      this.setPageSize(this.selectedItem);

      this.getData();
    },
    /**
     * Lấy dữ liệu tương ứng với loại danh sách
     * @author dgbao (25/08/2023)
     */
    getData() {
      if (this.listType == "person") {
        this.showLoading();
        this.getListPerson();
        this.hideLoading();
      } else {
        this.showLoading();
        this.getListEmployees();
        this.hideLoading();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../../assets/style/base/pagination/Pagination.scss);

.pagination-container {
  height: 56px;
}
</style>
