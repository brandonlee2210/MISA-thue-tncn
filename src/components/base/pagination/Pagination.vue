<template>
  <div class="pagination-container">
    <div
      class="row ma-0 py-0 px-4 d-flex align-center misa-container-base--paging-table"
    >
      <div class="ma-0 pa-0 col col-6">
        <span class="text-lg-body-2">
          Tổng số:
          <span class="text-lg-subheader">{{ totalEmployee }}</span> bản ghi </span
        ><!----><!---->
      </div>
      <div class="ma-0 pa-0 d-flex align-center justify-end col col-6">
        <span data-v-1090f892="" class="text-lg-body-2">Số bản ghi/trang</span>
        <div data-v-1090f892="" class="container-page-size ml-2 mr-4">
          <div
            class="row misa-container-base--select d-flex align-center ma-0 pa-0"
          >
            <!---->
            <div data-v-3519a28f="" class="ma-0 pa-0 col col-12">
              <dx-select-box
                :items="items"
                :displayExpr="'text'"
                :valueExpr="'id'"
                :value="selectedItem"
                :placeholder="placeholder"
                :searchEnabled="true"
                :searchExpr="['text']"
                :noDataText="'Không có dữ liệu'"
                :readOnly="isReadOnly"
                @valueChanged="
                  (e) => {
                    selectedItem = e.value;
                    $emit('change', e.value);
                  }
                "
              ></dx-select-box>
            </div>
          </div>
        </div>
        <span class="text-lg-body-2 ml-2"
          ><span data-v-1090f892="" class="text-lg-subheader"> 1 - 25 </span>
          bản ghi
        </span>
        <button
          type="button"
          class="ml-2 v-btn prev v-btn--disabled v-btn--has-bg v-size--default b-transparent"
          style="height: 36px"
        >
          <span class="v-btn__content"
            ><i class="v-icon notranslate ico ico-prev-page"></i
          ></span>
        </button>
        <button
          type="button"
          class="v-btn next v-btn--has-bg v-size--default b-transparent b-transparent"
          style="height: 36px"
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

export default {
  name: "DropDown",
  components: {
    DxSelectBox,
  },
  props: ["totalEmployee"],
  data() {
    return {
      selectedItem: 1,
      items: [
        {
          id: 1,
          text: "5",
        },
        {
          id: 2,
          text: "15",
        },
        {
          id: 3,
          text: "25",
        },
        {
          id: 4,
          text: "50",
        },
        {
          id: 5,
          text: "100",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url(../../../assets/style/base/pagination/Pagination.scss);

.pagination-container {
  height: 56px;
}
</style>
