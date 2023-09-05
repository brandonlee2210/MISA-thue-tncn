<template>
  <div class="page__header">
    <div class="left-header">
      <div class="button" @click="handleBackClick" v-if="formMode == 'view'">
        <div class="header__left__icon"></div>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="right-header">
      <DxButton
        class="dx-button"
        :height="36"
        :onClick="hanleCancelClick"
        v-if="formMode == 'add' || formMode == 'edit'"
      >
        Huỷ</DxButton
      >
      <DxButton
        class="dx-button"
        :height="36"
        :onClick="handleSaveAndAddNew"
        v-if="formMode == 'add'"
      >
        Lưu & Thêm mới</DxButton
      >
      <DxButton
        class="dx-button save"
        :height="36"
        :onClick="onSave"
        v-if="formMode == 'add' || formMode == 'edit'"
      >
        Lưu
      </DxButton>
      <ButtonWithIcon type="delete" :title="'Xoá'" v-if="formMode == 'view'" />
      <DxButton
        class="dx-button save"
        :height="36"
        :onClick="handleOpenEditForm"
        v-if="formMode == 'view'"
      >
        Chỉnh sửa
      </DxButton>
    </div>
  </div>
</template>

<script>
import MISAResource from "@/helpers/resource";
import { mapState, mapActions } from "vuex";
import { DxButton } from "devextreme-vue";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";

export default {
  name: "ListHeader",
  components: {
    DxButton,
    ButtonWithIcon,
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
    ...mapActions("employee", ["setFormMode", "setPopupFormMode"]),
    /**
     * Xử lý sự kiện huỷ
     */
    hanleCancelClick() {
      this.setFormMode("");
      this.setPopupFormMode("");
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
    /**
     * Xử lý sự kiện lưu và thêm mới
     * */
    handleSaveAndAddNew() {
      this.$emit("save-and-add-new");
    },
    /**
     * Xử lý sự kiện ấn nút quay về
     */
    handleBackClick() {
      this.setFormMode("");
      this.setPopupFormMode("");
      this.$router.push({
        name: "tax",
      });
    },

    /**
     * Xử lý sự kiện click vào nút chỉnh sửa
     */
    handleOpenEditForm() {
      this.setFormMode("edit");
      if (this.$route.path !== "/tax/add") {
        this.$router.push("/tax/add");
      }
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

.left-header {
  button.button.delete {
    margin: 0 !important;
  }
  .button {
    cursor: pointer;
    width: 56px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    .header__left__icon,
    .icon-back {
      background: url(https://amisplatform.misacdn.net/apps/mintax/img/arrow-back-v2.b83cbafc.svg)
        no-repeat 50%;
      height: 24px;
      width: 24px;
    }

    &:hover {
      background-color: #f2f2f2 !important;
    }
  }
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

    &:hover {
      opacity: 0.8;
    }
  }
}

.title {
  font-size: 20px;
}
</style>
