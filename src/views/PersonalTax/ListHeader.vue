<template>
  <div class="page__header">
    <div class="left-header">
      <div class="title">{{ resource.VN.Others.PageEmployeeTitle }}</div>
    </div>
    <div class="right-header">
      <DxButton class="dx-button" :height="36" :onClick="hanleOnClick">
        <div class="icon icon-manage-license" style="margin-right: 6px"></div>
        Quản lý lao động sử dụng dịch vụ</DxButton
      >
    </div>
  </div>
</template>

<script>
import MISAResource from "@/helpers/resource";
import { DxButton } from "devextreme-vue";

export default {
  name: "ListHeader",
  components: {
    DxButton,
  },
  data() {
    return {
      resource: MISAResource,
    };
  },
  methods: {
    hanleOnClick() {
      this.$router.push({
        name: "manager",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dx-button:hover {
  background-color: white;
  border-color: var(--primary-color);
  border-width: 1px;
  color: var(--primary-color);
}

.right-header .dx-button {
  font-weight: 500;
  font-size: 14px !important;
  letter-spacing: normal;
  text-indent: 0;
  height: 36px;
  min-width: 80px;
  text-transform: none !important;

  display: flex;
  padding-left: 6px;
  padding-right: 6px;

  border-width: 1px;
}
</style>
