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
      <DxDropDownBox
        placeholder="Bộ phận/phòng ban"
        :width="246"
        class="search-person"
      ></DxDropDownBox>
      <DxButton icon="export" text="Xuất khẩu"></DxButton>
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
import { DxTextBox, DxButton } from "devextreme-vue";
import DxDropDownBox from "devextreme-vue/drop-down-box";
import ButtonWithIcon from "@/components/base/button/ButtonWithIcon.vue";
import GroupButton from "@/components/base/button/GroupButton.vue";
// import { debounce } from "@/helpers/debounce";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    DxTextBox,
    DxDropDownBox,
    DxButton,
    ButtonWithIcon,
    GroupButton,
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
        if (this.filterData[key]) {
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
    };
  },
  methods: {
    ...mapActions("global", [
      "showFilter",
      "hideFilter",
      "showLoading",
      "hideLoading",
    ]),
    ...mapActions("employee", ["setFilterKeyword", "getListPerson"]),
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
      this.setFilterKeyword(this.inputValue);

      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.showLoading();
        this.getListPerson();
        this.hideLoading();
      }, 800);
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
}
</style>
