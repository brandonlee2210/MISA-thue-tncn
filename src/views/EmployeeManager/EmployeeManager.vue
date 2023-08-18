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
        :number="1071"
        :title="resource.VN.BlockContent.Title.TotalEmployee"
        :subtitle="resource.VN.BlockContent.Subtitle.TotalEmployee"
        mainColor="rgb(67, 136, 255)"
      />
      <BlockContent
        :number="1010"
        :title="resource.VN.BlockContent.Title.CurrentUse"
        :subtitle="resource.VN.BlockContent.Subtitle.CurrentUse"
        mainColor="rgb(116, 203, 47)"
      />
      <BlockContent
        :number="61"
        :title="resource.VN.BlockContent.Title.NoCurrentUse"
        :subtitle="resource.VN.BlockContent.Subtitle.NoCurrentUse"
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

export default {
  name: "EmployeeManager",
  data() {
    return {
      isBlockContentVisible: true,
      resource: MISAResource,
    };
  },
  components: {
    BlockContent,
    DxButton,
    ListEmployee,
  },
  methods: {
    handleBackButton() {
      // back
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./EmployeeManager.scss);
</style>
