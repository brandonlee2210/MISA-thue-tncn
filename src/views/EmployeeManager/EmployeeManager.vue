<template>
  <div class="manager-container">
    <div class="header">
      <div class="header__left">
        <div class="button" @click="handleBackButton">
          <div class="header__left__icon"></div>
        </div>

        <div class="header__left__title">
          {{ resource.VN.Others.PageEmployeeManager }}
        </div>
      </div>
      <div class="header__right">
        <DxButton
          icon="preferences"
          :height="36"
          text="Thiết lập quy tắc tự động"
        ></DxButton>
      </div>
    </div>
    <div
      class="container__manage-license row__general d-flex w-100"
      v-if="isBlockContentVisible"
    >
      <BlockContent
        :number="summary.TotalEmployees"
        :title="resource.VN.BlockContent.Title.TotalEmployee"
        :subtitle="resource.VN.BlockContent.Subtitle.TotalEmployee"
        mainColor="rgb(67, 136, 255)"
        @on-click="getEmployeesByUsageStatus(null)"
      />
      <BlockContent
        :number="summary.ActiveEmployees"
        :title="resource.VN.BlockContent.Title.CurrentUse"
        :subtitle="resource.VN.BlockContent.Subtitle.CurrentUse"
        mainColor="rgb(116, 203, 47)"
        @on-click="getEmployeesByUsageStatus(USAGE_STATUS.ACTIVE)"
      />
      <BlockContent
        :number="summary.UnactiveEmployees"
        :title="resource.VN.BlockContent.Title.NoCurrentUse"
        :subtitle="resource.VN.BlockContent.Subtitle.NoCurrentUse"
        @on-click="getEmployeesByUsageStatus(USAGE_STATUS.INACTIVE)"
        mainColor="rgb(255, 110, 110)"
      />
    </div>
    <div
      class="p-relative"
      :style="`height: 44px; top: ${isBlockContentVisible ? '0px' : '-14px'}`"
    >
      <div
        class="button__expand"
        @click="isBlockContentVisible = !isBlockContentVisible"
      >
        <div>
          <i
            aria-hidden="true"
            class="v-icon notranslate ico ico-g-expand theme--light"
            :style="`${
              isBlockContentVisible ? '' : 'transform: rotate(-180deg)'
            }`"
          ></i>
        </div>
        <!---->
      </div>
      <div class="line"></div>
    </div>
    <ListEmployee :isBlockContentVisible="isBlockContentVisible" />
  </div>
</template>

<script>
import MISAResource from "@/helpers/resource";
import BlockContent from "./BlockContent.vue";
import { DxButton } from "devextreme-vue";
import ListEmployee from "./ListEmployee.vue";

import { getTotalEmployeeSummary } from "@/helpers/api";

// import EmployeeService from "@/service/EmployeeService";
import { USAGE_STATUS } from "@/helpers/enums";
import { mapActions, mapState } from "vuex";

export default {
  name: "EmployeeManager",
  data() {
    return {
      isBlockContentVisible: true,
      resource: MISAResource,
      USAGE_STATUS,
    };
  },
  components: {
    BlockContent,
    DxButton,
    ListEmployee,
  },
  computed: {
    ...mapState("employee", ["usageStatus", "summary"]),
  },
  methods: {
    ...mapActions("employee", [
      "setUsageStatus",
      "setFilterData",
      "getListEmployees",
      "setSummary",
      "setTotalRecord",
    ]),
    ...mapActions("global", ["showLoading", "hideLoading"]),
    /**
     * Lùi lại trang
     */
    handleBackButton() {
      this.$router.push("tax");
    },
    /**
     * Lấy tổng số nhân viên
     */
    getSummary() {
      getTotalEmployeeSummary();
    },
    /**
     * Lấy danh sách nhân viên theo trạng thái sử dụng
     * @param {*} usageStatus
     * @author baodg (25/08/2023)
     */
    getEmployeesByUsageStatus(status) {
      this.setUsageStatus(status);
      this.setFilterData({
        FilterUsageStatus: status,
      });
      this.showLoading();
      this.getListEmployees();
      this.hideLoading();
    },
  },
  /**
   * Khởi tạo lấy số liệu nhân viên
   * @author dgbao (25/08/2023)
   */
  created() {
    this.setSummary();
  },
};
</script>

<style lang="scss" scoped>
@import url(../../assets/style/view/EmployeeManager/EmployeeManager.scss);
</style>
