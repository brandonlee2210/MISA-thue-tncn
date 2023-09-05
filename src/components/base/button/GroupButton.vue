<template>
  <div class="group-container">
    <div class="group__left" @click="handleOpenAddForm">
      <div class="icon-add"></div>
      <div>Thêm mới</div>
    </div>
    <div class="iconx">
      <div class="icon-expand"></div>
    </div>
  </div>
</template>

<script>
import { POPUP_FORM_MODE } from "@/helpers/enums";
import { mapActions } from "vuex";
export default {
  name: "GroupButton",
  methods: {
    handleOpenAddForm() {
      this.setFormMode("add");
      this.setPopupFormMode(POPUP_FORM_MODE.INDIRECT);
      if (this.$route.path !== "/tax/add") {
        this.$router.push("/tax/add");
      }
    },
    ...mapActions("employee", ["setFormMode"]),
    ...mapActions("relative", ["setPopupFormMode"]),
  },
};
</script>

<style lang="scss" scoped>
.group-container {
  width: 152px;
  height: 36px;

  display: flex;
  align-items: center;
  border-radius: 4px;

  gap: 1px;

  .group__left {
    display: flex;
    align-items: center;
    background: var(--primary-color);
    height: 100%;
    color: white;
    padding: 0 16px;
    white-space: nowrap;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    gap: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .iconx {
    width: 40px;
    height: 36px;
    background: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
