<template>
  <div
    role="document"
    tabindex="0"
    class="v-dialog__content v-dialog__content--active"
    style="z-index: 202"
  >
    <div
      class="v-dialog misa-container-base--confirm-dialog v-dialog--active v-dialog--persistent v-dialog--scrollable"
      style="transform-origin: center center; width: 435px"
    >
      <div class="v-card v-sheet theme--light">
        <div class="v-card__title d-flex">
          <div class="title-dialog">{{ title }}</div>
          <div class="status-email"></div>
          <button
            tabindex="201"
            type="button"
            class="misa-close-dialog v-btn v-btn--has-bg theme--light v-size--default b-transparent b-transparent"
            style="height: 36px"
            @click="hideNotification"
          >
            <span class="v-btn__content"
              ><i
                aria-hidden="true"
                class="v-icon notranslate ico ico-g-close theme--light"
              ></i
            ></span>
          </button>
        </div>
        <div class="v-card__text">
          <span class="text-lg-confirm" v-html="rawHtml"></span
          ><!---->
        </div>
        <div class="v-card__actions misa-border-none">
          <button
            type="button"
            class="ml-2 v-btn v-btn--has-bg theme--light v-size--default b-info b-info"
            style="height: 36px; max-width: 80px; width: 80px"
            v-if="type !== 'data-changed'"
            @click="hideNotification"
          >
            <span class="v-btn__content">Không</span>
          </button>
          <button
            type="button"
            class="ml-2 v-btn v-btn--has-bg theme--light v-size--default b-red b-red"
            style="height: 36px; max-width: 80px; width: 80px"
            v-if="
              type !== 'data-changed' && type !== 'manage' && type !== 'error'
            "
            @click="handleConfirm"
          >
            <span class="v-btn__content">Có</span>
          </button>

          <button
            type="button"
            class="ml-2 v-btn v-btn--has-bg theme--light v-size--default b-red b-red"
            style="height: 36px; max-width: 80px; width: 80px"
            v-if="type == 'error'"
            @click="handleConfirm"
          >
            <span class="v-btn__content">Đóng</span>
          </button>

          <button
            type="button"
            class="ml-2 v-btn v-btn--has-bg theme--light v-size--default b-primary b-primary"
            style="height: 36px; max-width: 80px; width: 80px"
            v-if="type == 'manage'"
            @click="handleConfirm"
          >
            <span class="v-btn__content">Có</span>
          </button>

          <!-- Dialog khi dữ liệu thay đổi -->
          <button v-if="type == 'data-changed'">
            <span class="v-btn__content">Huỷ</span>
          </button>
          <button v-if="type == 'data-changed'">
            <span class="v-btn__content">Không lưu</span>
          </button>
          <button v-if="type == 'data-changed'">
            <span class="v-btn__content">Lưu</span>
          </button>
          <!-- Dialog khi dữ liệu thay đổi -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { deleteEmployee, deleteManyEmployees } from "@/helpers/api";
// import EmployeeService from "@/service/EmployeeService";
import RelativeService from "@/service/RelativeService";

export default {
  data() {
    return {
      isDialogVisible: true,
      dialogTitle: "Data Changes",
    };
  },
  computed: {
    ...mapState("global", ["notificationProps"]),
    ...mapState("relative", ["popupFormMode"]),
    ...mapState("employee", ["tableRef"]),
    title() {
      return this.notificationProps.title;
    },
    message() {
      return this.notificationProps.message;
    },
    type() {
      return this.notificationProps.type;
    },
    rawHtml() {
      return this.notificationProps.rawHtml;
    },
    idToDelete() {
      return this.notificationProps.idToDelete;
    },
  },

  methods: {
    ...mapActions("global", [
      "hideNotification",
      "showToast",
      "hideToast",
      "showLoading",
      "hideLoading",
    ]),
    ...mapActions("employee", [
      "getListPerson",
      "setSelectedRows",
      "getListEmployees",
    ]),
    ...mapActions("relative", ["deleteRelative"]),
    /**
     * Xử lí sự kiện khi ấn vào nút có
     */
    handleConfirm() {
      switch (this.type) {
        case "delete":
          deleteEmployee(this.idToDelete)
            .then(() => {
              this.hideNotification();
              this.showToast({ title: "Xóa thành công", type: "success" });
              this.tableRef.clearSelection();
            })
            .then(() => {
              this.showLoading();
              this.getListPerson();
              this.hideLoading();
              // hide toast
              setTimeout(() => {
                this.hideToast();
              }, 2000);
            });
          break;
        case "delete-many":
          deleteManyEmployees(this.notificationProps.listIds)
            .then(() => {
              this.hideNotification();
              this.showToast({ title: "Xóa thành công", type: "success" });
              this.tableRef.clearSelection();
            })
            .then(() => {
              this.showLoading();
              this.getListPerson();
              this.hideLoading();
              // hide toast
              setTimeout(() => {
                this.hideToast();
              }, 2000);
            });
          break;
        // Xoá trực tiếp thành viên gia đình
        case "delete-relative":
          RelativeService.delete(this.idToDelete)
            .then(() => {
              this.deleteRelative(this.idToDelete);
              this.hideNotification();
              this.showToast({
                title: "Xóa thành viên gia đình thành công",
                type: "success",
              });
            })
            .then(() => {
              // hide toast
              setTimeout(() => {
                this.hideToast();
              }, 2000);
            });
          break;
        case "delete-relative-indirect":
          this.deleteRelative(this.idToDelete);
          this.hideNotification();
          this.showToast({
            title: "Xóa thành viên gia đình thành công",
            type: "success",
          });
          setTimeout(() => {
            this.hideToast();
          }, 2000);
          break;
        case "error":
          this.hideNotification();
          break;

        default:
          break;
      }
      this.notificationProps.onConfirm();
    },
  },
};
</script>

<style lang="scss">
.v-dialog__content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
  width: 100%;
  z-index: 6;
  outline: none;

  .v-dialog {
    border-radius: 4px;
    margin: 24px;
    overflow-y: auto;
    pointer-events: auto;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 100%;
    z-index: inherit;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
      0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.v-dialog--scrollable > .v-card,
.v-dialog--scrollable > form > .v-card {
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
}

.v-sheet.v-card {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;

  .v-card__text {
    padding: 0 24px;
  }

  .v-card__actions {
    padding: 24px !important;
    display: flex;
    justify-content: flex-end;

    .b-info:hover {
      background-color: rgba(194, 191, 191, 0.204) !important;
    }

    .b-red:hover {
      background-color: rgb(202, 3, 3) !important;
    }
  }
}

.text-lg-confirm {
  font-size: 14px !important;
  line-height: 20px !important;
  cursor: default;
  letter-spacing: unset !important;
}

.v-card__title {
  z-index: 50;
  padding: 24px !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  color: #212121 !important;
  align-items: center;
  justify-content: space-between;
}

.b-transparent:hover {
  background-color: rgba(194, 191, 191, 0.204) !important;
}

.b-primary {
  color: #fff !important;
  background-color: #007aff !important;
}

.ico-g-close {
  background: url(https://amisplatform.misacdn.net/apps/mintax/img/Gray.247f7b7e.png);
  background-position: -120px 0;
  width: 16px !important;
  height: 16px !important;
}

.button.ml-2.v-btn.v-btn--has-bg.theme--light.v-size--default.b-red.b-red:hover {
  background-color: #8d1209 !important;
}
</style>
