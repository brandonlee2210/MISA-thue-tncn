<template>
  <div class="list-person">
    <div class="list-person__right">
      <DxTextBox
        placeholder="Tìm theo Mã/Tên nhân viên, MST, CMND"
        icon="check"
        class="search-person"
        mode="search"
        :width="380"
        :height="36"
        @input="handleInputChange"
      ></DxTextBox>
      <MTreeList />
      <button class="export-container" @click="handleExport">
        <div class="export" v-show="!isButtonLoading">
          <i
            aria-hidden="true"
            class="v-icon notranslate mi mi-export-default theme--light"
          ></i>
          <span>Xuất khẩu</span>
        </div>
        <img
          v-show="isButtonLoading == true"
          src="./Rolling-0.7s-81px.svg"
          alt=""
          width="32"
          height="32"
        />
      </button>
    </div>
    <div class="list-person__left">
      <GroupButton />
      <ButtonWithIcon type="filter" :onClick="showFilter">
        <span class="v-badge__wrapper" v-if="isBadgeVisible"
          ><span
            class="v-badge__badge blue"
            style="inset: auto auto calc(100% - 8px) calc(100% - 8px)"
          ></span
        ></span>
      </ButtonWithIcon>
      <ButtonWithIcon type="setting" :onClick="handleClickSetting" />
    </div>
  </div>
</template>

<script>
import { DxTextBox } from "devextreme-vue";

import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";
import GroupButton from "@/components/base/button/GroupButton.vue";
import MTreeList from "@/components/base/tree-list/MTreeList.vue";
import axios from "axios";
import { exportData } from "@/helpers/api";

// import { debounce } from "@/helpers/debounce";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    DxTextBox,
    // DxDropDownBox,
    // DxButton,
    ButtonWithIcon,
    GroupButton,
    MTreeList,
  },
  watch: {
    searchText(newValue) {
      console.log(newValue);
    },
  },
  computed: {
    ...mapState("employee", ["filterData"]),

    // Nếu không có trường nào đang lọc thì return false
    isBadgeVisible() {
      for (const key in this.filterData) {
        if (this.filterData[key] && key !== "FilterUsageStatus") {
          return true;
        }

        if (this.filterData.FilterHasTaxCode == 0) {
          return true;
        }
      }
      return false;
    },
  },
  data() {
    return {
      timeoutId: null,
      inputValue: "",
      isButtonLoading: false,
    };
  },
  methods: {
    ...mapActions("global", [
      "showFilter",
      "hideFilter",
      "showLoading",
      "hideLoading",
    ]),
    ...mapActions("employee", [
      "setFilterKeyword",
      "getListPerson",
      "setPageNumber",
    ]),
    /**
     * Hiển thị menu setting bảng
     * CreatedBy: dgbao (23/08/2023)
     */
    handleClickSetting() {
      this.$emit("toggle-draggable-menu");
    },
    /**
     * Xử lý khi người dùng nhập vào ô tìm kiếm
     * @author dgbao (25/08/2023)
     * @param {*} event
     */
    handleInputChange(event) {
      this.inputValue = event.event.currentTarget.value;
      this.setPageNumber(1);
      this.setFilterKeyword(this.inputValue);

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.showLoading();
        this.getListPerson();
        this.hideLoading();
      }, 800);
    },
    /**
     * Xuất khẩu dữ liệu
     * @author DGBao (29/07/2023)
     */
    handleExport() {
      this.isButtonLoading = true;
      axios({
        method: "post",
        url: "https://localhost:7037/api/v1/Employees/export-all",
        responseType: "blob",
        data: exportData,
      })
        .then((response) => {
          const file = new Blob([response.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          const fileURL = URL.createObjectURL(file);
          const link = document.createElement("a");
          link.href = fileURL;
          link.download = `Danh sách thông tin nhân viên.xlsx`;
          link.click();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setTimeout(() => {
            this.isButtonLoading = false;
          }, 1000);
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

  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .dx-texteditor-container {
    border-radius: 4px;
  }

  .dx-texteditor.dx-editor-outlined:hover {
    border-color: var(--primary-color);
  }

  .dx-button:hover {
    background-color: white;
    border-color: var(--primary-color);
    border-width: 1px;
    color: var(--primary-color);
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

  .mi-export-default {
    background: url(https://amisplatform.misacdn.net/apps/mintax/img/icon.4ca9813a.svg) -40px
      0 no-repeat;
  }

  .mi-export-default {
    width: 20px !important;
    height: 20px !important;
  }

  .v-icon {
    align-items: center;
    padding-right: 10px;
    display: inline-flex;
    font-feature-settings: "liga";
    font-size: 20px;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .export {
    display: flex;
    gap: 6px;
  }

  .export-container {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #cecbcb;
    border-radius: 3px;
    width: 120px;

    &:hover {
      cursor: pointer;
      color: #007aff;
      border-color: #007aff;
    }

    span {
      display: flex;
      align-items: center;
    }
  }
}
</style>
