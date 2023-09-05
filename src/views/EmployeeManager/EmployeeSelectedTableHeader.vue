<template>
  <div class="list-person">
    <span data-v-05bc7046="" class="text-lg-body-2">
      Đã chọn
      <span data-v-05bc7046="" class="text-lg-subheader ml-1">{{
        length
      }}</span></span
    >
    <div class="misa-separator"></div>
    <span class="text-lg-error mr-2 cursor-pointer" @click="$emit('deselect')"
      >Bỏ chọn</span
    >
    <div class="misa-separator"></div>
    <span
      class="text-lg-success mr-4 cursor-pointer"
      @click="$emit('select-all')"
      >Chọn tất cả</span
    >
    <ButtonWithIcon
      type="add--green"
      title="Sử dụng"
      :on-click="handleActiveEmployee"
      v-if="inactiveEmployee.length > 0"
    />
    <ButtonWithIcon
      type="disable"
      title="Ngừng sử dụng"
      :on-click="handleUnactiveEmployee"
      v-if="activeEmployee.length > 0"
    />
  </div>
</template>

<script>
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";

import { mapState, mapActions } from "vuex";
import { USAGE_STATUS } from "@/helpers/enums";
import EmployeeService from "@/service/EmployeeService";
import { convertToDateTime } from "@/helpers/utils";

export default {
  components: {
    ButtonWithIcon,
  },
  computed: {
    ...mapState("employee", ["selectedRows"]),
    activeEmployee() {
      return this.selectedRows.filter(
        (item) => item.UsageStatus == USAGE_STATUS.ACTIVE
      );
    },
    inactiveEmployee() {
      return this.selectedRows.filter(
        (item) => item.UsageStatus == USAGE_STATUS.INACTIVE
      );
    },
  },
  props: ["length"],
  methods: {
    ...mapActions("employee", [
      "getListEmployees",
      "setSelectedRows",
      "setSummary",
    ]),
    ...mapActions("global", [
      "showLoading",
      "hideLoading",
      "showNotification",
      "hideNotification",
      "showToast",
      "hideToast",
    ]),
    handleActiveEmployee() {
      let rawHtml;

      if (this.inactiveEmployee.length == 1) {
        rawHtml = `<span>Bạn có chắc muốn thêm lao động <strong>${this.inactiveEmployee[0].FullName}</strong> vào danh sách lao động sử dụng dịch vụ Thuế TNCN không?</span>`;
      } else {
        rawHtml = `<span>Bạn có chắc muốn thêm <strong>${this.inactiveEmployee.length}/${this.selectedRows.length}</strong> lao động đã chọn vào danh sách lao động sử dụng dịch vụ Thuế TNCN không?</span>`;
      }
      const data = this.inactiveEmployee.map((item) => {
        return {
          ...item,
          UsageStatus: USAGE_STATUS.ACTIVE,
        };
      });

      data.forEach((row) => {
        if (row.DateOfBirth == "" || row.DateOfBirth == null) {
          row.DateOfBirth = null;
        } else {
          row.DateOfBirth = convertToDateTime(row.DateOfBirth);
        }

        if (row.HireDate == "" || row.HireDate == null) {
          row.HireDate = null;
        } else {
          row.HireDate = convertToDateTime(row.HireDate);
        }

        if (row.ProbationDate == "" || row.ProbationDate == null) {
          row.ProbationDate = null;
        } else {
          row.ProbationDate = convertToDateTime(row.ProbationDate);
        }

        if (row.ReceiveDate == "" || row.ReceiveDate == null) {
          row.ReceiveDate = null;
        } else {
          row.ReceiveDate = convertToDateTime(row.ReceiveDate);
        }

        if (row.ResignationDate == "" || row.ResignationDate == null) {
          row.ResignationDate = null;
        } else {
          row.ResignationDate = convertToDateTime(row.ResignationDate);
        }

        if (row.IdentityDate == "" || row.IdentityDate == null) {
          row.IdentityDate = null;
        } else {
          row.IdentityDate = convertToDateTime(row.IdentityDate);
        }
      });
      this.showNotification({
        title: "Thông báo",
        rawHtml,
        type: "manage",
        // callback khi ấn nút có
        onConfirm: () => {
          this.showLoading();
          EmployeeService.updateMany(data)
            .then(() => {
              this.hideNotification();
              this.setSelectedRows([]);
              this.$emit("deselect");
            })
            .then(() => {
              this.setSummary();
              this.getListEmployees();
              this.hideLoading();
              this.showToast({
                title: "Cập nhật trạng thái thành công",
                type: "success",
              });
              setTimeout(() => {
                this.hideToast();
              }, 2000);
            });
        },
      });
    },
    handleUnactiveEmployee() {
      let rawHtml;

      if (this.activeEmployee.length == 1) {
        rawHtml = `<span>Bạn có chắc muốn loại bỏ lao động <strong>${this.activeEmployee[0].FullName}</strong> ra khỏi danh sách sử dụng dịch vụ Thuế TNCN không?</span>`;
      } else {
        rawHtml = `<span>Bạn có chắc muốn loại bỏ <strong>${this.activeEmployee.length}/${this.selectedRows.length}</strong> lao động đã chọn ra khỏi danh sách sử dụng dịch vụ Thuế TNCN không?</span>`;
      }

      const data = this.activeEmployee.map((item) => {
        return {
          ...item,
          UsageStatus: USAGE_STATUS.INACTIVE,
        };
      });

      data.forEach((row) => {
        if (row.DateOfBirth == "" || row.DateOfBirth == null) {
          row.DateOfBirth = null;
        } else {
          row.DateOfBirth = convertToDateTime(row.DateOfBirth);
        }

        if (row.HireDate == "" || row.HireDate == null) {
          row.HireDate = null;
        } else {
          row.HireDate = convertToDateTime(row.HireDate);
        }

        if (row.ProbationDate == "" || row.ProbationDate == null) {
          row.ProbationDate = null;
        } else {
          row.ProbationDate = convertToDateTime(row.ProbationDate);
        }

        if (row.ReceiveDate == "" || row.ReceiveDate == null) {
          row.ReceiveDate = null;
        } else {
          row.ReceiveDate = convertToDateTime(row.ReceiveDate);
        }

        if (row.ResignationDate == "" || row.ResignationDate == null) {
          row.ResignationDate = null;
        } else {
          row.ResignationDate = convertToDateTime(row.ResignationDate);
        }

        if (row.IdentityDate == "" || row.IdentityDate == null) {
          row.IdentityDate = null;
        } else {
          row.IdentityDate = convertToDateTime(row.IdentityDate);
        }
      });
      this.showNotification({
        title: "Thông báo",
        rawHtml,
        type: "manage",
        // callback khi ấn nút có
        onConfirm: () => {
          this.showLoading();
          EmployeeService.updateMany(data)
            .then(() => {
              this.hideNotification();
              this.setSelectedRows([]);
              this.$emit("deselect");
            })
            .then(() => {
              this.setSummary();
              this.getListEmployees();
              this.hideLoading();
              this.showToast({
                title: "Cập nhật trạng thái thành công",
                type: "success",
              });
              setTimeout(() => {
                this.hideToast();
              }, 2000);
            });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dx-buttongroup {
  color: white;
}
.list-person {
  display: flex;

  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .dx-button:hover {
    background-color: white;
    border-color: var(--primary-color);
    border-width: 1px;
    color: var(--primary-color);
  }

  .button {
    margin-right: 10px;
  }

  .misa-separator {
    margin-left: 10px;
    margin-right: 10px;
    height: 16px;
    width: 1px;
    border-left: 1px solid #bbb;
  }

  .text-lg-success {
    font-weight: 700 !important;
    font-size: 14px !important;
    color: #39ac66 !important;
    line-height: 19px !important;
    cursor: default;
    letter-spacing: unset !important;
    cursor: pointer;
  }

  .text-lg-error {
    font-weight: 700 !important;
    font-size: 14px !important;
    color: #e61d1d !important;
    line-height: 19px !important;
    cursor: default;
    letter-spacing: unset !important;
    cursor: pointer;
  }

  .list-person__right {
    display: flex;
    align-items: center;
    position: relative;
    gap: 8px;

    .search-person {
      .dx-button-mode-contained {
        background-color: red !important;
      }
    }

    .dx-button {
      font-weight: 700;
    }

    &:hover {
      border-color: #007aff;
    }
  }
  .list-person__left {
    display: flex;
    align-items: center;

    gap: 8px;

    .group-button {
      display: flex;

      #addButton {
        background: #007aff;
        border-radius: 4px;
        color: white !important;

        .dx-button-text {
          color: white !important;
        }
      }
    }

    .dx-button-mode-outlined {
      color: white;
    }
  }
}
</style>
