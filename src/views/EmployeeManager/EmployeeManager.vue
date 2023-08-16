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
    <div class="row__general d-flex w-100">
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
  </div>
</template>

<script>
import MISAResource from "@/helpers/resource";
import BlockContent from "./BlockContent.vue";
import { DxButton } from "devextreme-vue";

export default {
  name: "EmployeeManager",
  data() {
    return {
      resource: MISAResource,
    };
  },
  components: {
    BlockContent,
    DxButton,
  },
  methods: {
    handleBackButton() {
      // back
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
@import url(./EmployeeManager.scss);
</style>
