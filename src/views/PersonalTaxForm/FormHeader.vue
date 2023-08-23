<template>
  <div class="page__header">
    <div class="left-header">
      <div class="title">{{ title }}</div>
    </div>
    <div class="right-header">
      <DxButton class="dx-button" :height="36" :onClick="hanleCancelClick">
        Huỷ</DxButton
      >
      <DxButton
        class="dx-button"
        :height="36"
        :onClick="() => {}"
        v-if="formMode == 'add'"
      >
        Lưu & Thêm mới</DxButton
      >
      <DxButton
        class="dx-button save"
        :height="36"
        :onClick="onSave"
        v-if="formMode == 'add'"
      >
        Lưu
      </DxButton>
      <DxButton
        class="dx-button save"
        :height="36"
        :onClick="onSave"
        v-if="formMode == 'edit'"
      >
        Chỉnh sửa
      </DxButton>
    </div>
  </div>
</template>

<script>
import MISAResource from "@/helpers/resource";
import { mapState } from "vuex";
import { DxButton } from "devextreme-vue";

export default {
  name: "ListHeader",
  components: {
    DxButton,
  },
  computed: {
    ...mapState("employee", ["formMode"]),
  },
  data() {
    return {
      resource: MISAResource,
    };
  },
  props: {
    // Tiêu đề form
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    /**
     * Xử lý sự kiện huỷ
     */
    hanleCancelClick() {
      this.$router.push({
        name: "tax",
      });
    },
    /**
     * Xử lý sự kiện lưu
     */
    onSave() {
      this.$emit("save");
    },
  },
};
</script>

<style lang="scss" scoped>
.page__header {
  min-height: 64px;
}
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

  &.save {
    background-color: var(--primary-color);
    border: none;
    color: white;
  }
}

.title {
  font-size: 20px;
}
</style>
