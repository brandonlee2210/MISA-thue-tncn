<template>
  <div class="container-filter" v-if="isFilterVisible">
    <div class="header-filter">
      <div class="title">Bộ lọc</div>
      <button
        type="button"
        class="v-icon notranslate v-icon--link mi mi-close theme--light"
        @click="hideFilter"
      ></button>
    </div>
    <div class="content-filter">
      <MFilterItem
        v-for="(item, index) in filterOptions"
        :key="index"
        :label="item.label"
        :value="filterData[item.key]"
        :startFilterDate="startFilterDate"
        :endFilterDate="endFilterDate"
        :options="item.options"
        :itemKey="item.key"
        @checkedChange="handleCheckedChange"
      >
      </MFilterItem>
    </div>
    <div class="footer-filter">
      <div class="d-flex align-center misa-contain-action">
        <div>
          <DxButton class="dx-button" :height="36" :onClick="onDefault">
            Bỏ lọc</DxButton
          >
        </div>
        <div>
          <DxButton class="dx-button save" :height="36" :onClick="onSave">
            Áp dụng</DxButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MFilterItem from "./MFilterItem.vue";
import { DxButton } from "devextreme-vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { filterOptions } from "./data";

export default {
  components: {
    MFilterItem,
    DxButton,
  },
  computed: {
    ...mapState("global", ["isFilterVisible"]),
    ...mapState("employee", ["filterData", "startFilterDate", "endFilterDate"]),
    ...mapGetters("employee", ["transformedFilterData"]),
  },
  methods: {
    ...mapActions("global", [
      "showFilter",
      "hideFilter",
      "showLoading",
      "hideLoading",
    ]),
    ...mapActions("employee", ["setFilterData", "getListPerson"]),
    /**
     * Xử lí khi lưu bộ lọc
     * @author baodg (25/08/2023)
     */
    onSave() {
      this.hideFilter();
      this.setFilterData(this.userFilterData);
      this.showLoading();
      this.getListPerson();
      this.hideLoading();
    },
    /**
     * Xử lí khi bỏ lọc
     * @author dgbao (25/08/2023)
     */
    onDefault() {
      this.hideFilter();
      this.setFilterData({
        FilterWorkStatus: null,
        FilterEmployeeTypeID: null,
        FilterUsageStatus: null,
        FilterHasTaxCode: null,
        FilterDate: null,
      });
      this.showLoading();
      this.getListPerson();
      this.hideLoading();
    },
    /**
     * Gán lại các trường khi người dùng tích vào các trường filter
     * @param {*} key
     * @param {*} value
     * @author dgbao (25/08/2023)
     */
    handleCheckedChange(key, value) {
      this.userFilterData[key] = value;
    },
  },
  data() {
    return {
      filterOptions,
      userFilterData: {},
    };
  },
};
</script>

<style lang="scss">
@import url(../../assets/style/base/filter/MFilter.scss);
</style>
