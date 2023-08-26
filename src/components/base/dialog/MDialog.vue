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
            @click="hideNotification"
          >
            <span class="v-btn__content">Không</span>
          </button>
          <button
            type="button"
            class="ml-2 v-btn v-btn--has-bg theme--light v-size--default b-red b-red"
            style="height: 36px; max-width: 80px; width: 80px"
            @click="handleConfirm"
          >
            <span class="v-btn__content">Có</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { deleteEmployee, deleteManyEmployees } from "@/helpers/api";

export default {
  data() {
    return {
      isDialogVisible: true,
      dialogTitle: "Data Changes",
    };
  },
  computed: {
    ...mapState("global", ["notificationProps"]),
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
    ...mapActions("global", ["hideNotification", "showToast"]),
    ...mapActions("employee", ["getListPerson"]),
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
            })
            .then(() => {
              this.getListPerson();
            });
          break;
        case "delete-many":
          deleteManyEmployees(this.notificationProps.listIds)
            .then(() => {
              this.hideNotification();
              this.showToast({ title: "Xóa thành công", type: "success" });
            })
            .then(() => {
              this.getListPerson();
            });
          break;
        default:
          break;
      }
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
